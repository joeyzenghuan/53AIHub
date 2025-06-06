package service

import (
	"fmt"
	"strconv"

	"github.com/53AI/53AIHub/common"
	"github.com/53AI/53AIHub/common/utils/helper"
	"github.com/53AI/53AIHub/model"
	"gorm.io/gorm"
)

// UserService handles user-related business logic
type UserService struct{}

// BatchAddInternalUserResult defines the result of batch adding users
type BatchAddInternalUserResult struct {
	Success []BatchAddUserResult
	Failed  []BatchAddUserResult
}

// BatchAddUserResult defines the structure for batch add user result
type BatchAddUserResult struct {
	Username     string `json:"username"`
	UserID       int64  `json:"user_id,omitempty"`
	Message      string `json:"message,omitempty"`
	ExistingType int    `json:"existing_type,omitempty"` // If the user already exists, mark the user type
	UsernameType int    `json:"username_type,omitempty"` // 1: mobile phone, 2: email
}

// InternalUserInfo defines internal user information
type InternalUserInfo struct {
	Username string
	Nickname string
	Dids     []int64
	Password string
}

// BatchAddInternalUsers batch add internal users
func (s *UserService) BatchAddInternalUsers(eid int64, users []InternalUserInfo) (*BatchAddInternalUserResult, error) {
	// Begin transaction
	tx := model.DB.Begin()
	if tx.Error != nil {
		return nil, tx.Error
	}

	result := &BatchAddInternalUserResult{
		Success: []BatchAddUserResult{},
		Failed:  []BatchAddUserResult{},
	}

	// Process each user
	for _, userInfo := range users {
		username := userInfo.Username

		// Validate username format
		isEmail := helper.IsValidEmail(username)
		isMobile := helper.IsValidPhone(username)

		if !isEmail && !isMobile {
			result.Failed = append(result.Failed, BatchAddUserResult{
				Username: username,
				Message:  "invalid username",
			})
			continue
		}

		// Create user object
		user := model.User{
			Username: username,
			Nickname: userInfo.Nickname,
			Password: userInfo.Password,
			Eid:      eid,
			GroupId:  0,
			Type:     model.UserTypeInternal,
			Role:     model.RoleCommonUser,
		}

		// Set email or mobile
		if isMobile {
			user.Mobile = username
		}
		if isEmail {
			user.Email = username
		}

		// Validate user struct
		if err := common.Validate.Struct(&user); err != nil {
			result.Failed = append(result.Failed, BatchAddUserResult{
				Username: username,
				Message:  err.Error(),
			})
			continue
		}

		// Check if user already exists
		if err := s.checkExistingUser(tx, &user, eid, result); err != nil {
			continue
		}

		// Handle password encryption
		user.Salt = helper.RandomString(6)
		var err error
		user.Password, err = helper.PasswordHash(user.Password, user.Salt)
		if err != nil {
			result.Failed = append(result.Failed, BatchAddUserResult{
				Username: username,
				Message:  err.Error(),
			})
			continue
		}

		// Create user
		if err := tx.Create(&user).Error; err != nil {
			result.Failed = append(result.Failed, BatchAddUserResult{
				Username: username,
				Message:  err.Error(),
			})
			continue
		}

		user.Status = model.UserStatusNotJoined
		if err := tx.Model(&model.User{}).
			Where("user_id = ?", user.UserID).
			Update("status", model.UserStatusNotJoined).Error; err != nil {
			result.Failed = append(result.Failed, BatchAddUserResult{
				Username: username,
				Message:  err.Error(),
			})
			continue
		}

		// Create member binding
		if err := s.createMemberBinding(tx, &user, eid); err != nil {
			result.Failed = append(result.Failed, BatchAddUserResult{
				Username: username,
				UserID:   user.UserID,
				Message:  "User created successfully but member binding failed: " + err.Error(),
			})
			continue
		}

		// Associate with departments
		if len(userInfo.Dids) > 0 {
			for _, did := range userInfo.Dids {
				if did > 0 {
					if err := s.associateWithDepartment(tx, user.UserID, eid, did); err != nil {
						result.Failed = append(result.Failed, BatchAddUserResult{
							Username: username,
							UserID:   user.UserID,
							Message:  "User created successfully but failed to associate with department: " + err.Error(),
						})
						continue
					}
				}
			}
		}

		result.Success = append(result.Success, BatchAddUserResult{
			Username: username,
			UserID:   user.UserID,
		})
	}

	// Handle transaction commit or rollback
	if len(result.Failed) > 0 && len(result.Success) == 0 {
		tx.Rollback()
		return result, nil
	}

	if err := tx.Commit().Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	return result, nil
}

// check if user already exists
func (s *UserService) checkExistingUser(tx *gorm.DB, user *model.User, eid int64, result *BatchAddInternalUserResult) error {
	var existingUser model.User
	if user.Mobile != "" {
		if tx.Where("eid = ? AND mobile = ?", eid, user.Mobile).First(&existingUser).Error == nil {
			result.Failed = append(result.Failed, BatchAddUserResult{
				UserID:       existingUser.UserID,
				Username:     existingUser.Username,
				Message:      user.Mobile,
				ExistingType: existingUser.Type,
				UsernameType: 1,
			})
			return fmt.Errorf("user with mobile %s already exists", user.Mobile)
		}
	}

	if user.Email != "" {
		if tx.Where("eid = ? AND email = ?", eid, user.Email).First(&existingUser).Error == nil {
			result.Failed = append(result.Failed, BatchAddUserResult{
				UserID:       existingUser.UserID,
				Username:     existingUser.Username,
				Message:      user.Email,
				ExistingType: existingUser.Type,
				UsernameType: 2,
			})
			return fmt.Errorf("user with email %s already exists", user.Email)
		}
	}
	return nil
}

// create member binding
func (s *UserService) createMemberBinding(tx *gorm.DB, user *model.User, eid int64) error {
	memberBinding := model.MemberBinding{
		MID:       user.UserID,
		EID:       eid,
		Name:      user.Nickname,
		BindValue: strconv.FormatInt(user.UserID, 10),
		Status:    model.MemberBindingStatusActive,
	}
	return tx.Create(&memberBinding).Error
}

// associate with department
func (s *UserService) associateWithDepartment(tx *gorm.DB, userID int64, eid int64, did int64) error {
	departmentRelation := model.MemberDepartmentRelation{
		BID: userID,
		EID: eid,
		DID: did,
	}
	return tx.Create(&departmentRelation).Error
}

// UserDepartmentMapping defines the mapping relationship between user and department
type UserDepartmentMapping struct {
	UserID int64
	DIDs   []int64
}

type RegisterUserToInternalResult struct {
	SuccessCount int      `json:"success_count"`
	FailedUsers  []string `json:"failed_users"`
	Total        int      `json:"total"`
}

func (s *UserService) RegisterUserToInternal(eid int64, mappings []UserDepartmentMapping) (*RegisterUserToInternalResult, error) {
	tx := model.DB.Begin()
	if tx.Error != nil {
		return nil, tx.Error
	}

	result := &RegisterUserToInternalResult{
		SuccessCount: 0,
		FailedUsers:  []string{},
		Total:        len(mappings),
	}

	for _, mapping := range mappings {
		user, err := model.GetUserByID(mapping.UserID)
		if err != nil {
			result.FailedUsers = append(result.FailedUsers, fmt.Sprintf("User ID %d not found", mapping.UserID))
			continue
		}

		if user.Eid != eid {
			result.FailedUsers = append(result.FailedUsers, fmt.Sprintf("User ID %d does not belong to this enterprise", mapping.UserID))
			continue
		}

		if err := tx.Model(&model.User{}).Where("user_id = ?", mapping.UserID).Update("type", model.UserTypeInternal).Error; err != nil {
			result.FailedUsers = append(result.FailedUsers, fmt.Sprintf("Failed to update user type for user ID %d", mapping.UserID))
			continue
		}

		for _, did := range mapping.DIDs {
			if did > 0 {
				relation := model.MemberDepartmentRelation{
					BID: mapping.UserID,
					DID: did,
					EID: eid,
				}

				var count int64
				tx.Model(&model.MemberDepartmentRelation{}).
					Where("bid = ? AND did = ? AND eid = ?", mapping.UserID, did, eid).
					Count(&count)

				if count == 0 {
					if err := tx.Create(&relation).Error; err != nil {
						result.FailedUsers = append(result.FailedUsers, fmt.Sprintf("Failed to create department relation for user ID %d and department ID %d", mapping.UserID, did))
						continue
					}
				}
			}
		}

		result.SuccessCount++
	}

	if result.SuccessCount == 0 {
		tx.Rollback()
	} else {
		if err := tx.Commit().Error; err != nil {
			return nil, err
		}
	}

	return result, nil
}

// GetInternalUsersWithPagination get internal user list, supports pagination, status filtering and keyword search
func (s *UserService) GetInternalUsersWithPagination(eid int64, keyword string, status, offset, limit int, did int64) (int64, []*model.User, error) {
	// Build base query condition
	query := model.DB.Model(&model.User{}).Where("users.eid = ? AND users.type = ?", eid, model.UserTypeInternal)

	// Filter by status
	if status != -1 {
		query = query.Where("users.status = ?", status)
	}

	// Keyword search (user nickname, mobile, email)
	if keyword != "" {
		// Only query fields in user table, do not join tables
		query = query.Where(
			"nickname LIKE ? OR mobile LIKE ? OR email LIKE ?",
			"%"+keyword+"%",
			"%"+keyword+"%",
			"%"+keyword+"%",
		)
	}

	if did > 0 {
		query = query.Joins("JOIN member_department_relations ON member_department_relations.bid = users.user_id").
			Where("member_department_relations.did = ?", did)
	}

	// Get total count
	var count int64
	if err := query.Count(&count).Error; err != nil {
		return 0, nil, err
	}

	// Get paginated data
	var users []*model.User
	if err := query.Offset(offset).Limit(limit).Find(&users).Error; err != nil {
		return 0, nil, err
	}

	for _, user := range users {
		user.LoadUserInfo()
	}

	return count, users, nil
}
