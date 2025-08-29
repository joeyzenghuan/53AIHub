package model

import (
	"errors"
	"os"
	"time"

	"github.com/53AI/53AIHub/common/logger"
	"github.com/53AI/53AIHub/common/utils/helper"
	"github.com/53AI/53AIHub/common/utils/system"
	"github.com/53AI/53AIHub/config"
	"gorm.io/gorm"
)

type Enterprise struct {
	Eid              int64             `json:"id" gorm:"primaryKey;autoIncrement"`
	DisplayName      string            `json:"display_name" gorm:"not null" binding:"required" example:"Enterprise Name"`
	Logo             string            `json:"logo" gorm:"not null" binding:"required" example:"http://a.com/a.jpg"`
	Ico              string            `json:"ico" gorm:"type:varchar(100);default:'';not null" example:"http://a.com/favicon.ico"`
	Keywords         string            `json:"keywords" gorm:"type:text;not null" example:"AI,Hub,Agent"`
	Copyright        string            `json:"copyright" gorm:"type:varchar(255);default:'';not null" example:"© 2023 Company Name"`
	Type             string            `json:"type" gorm:"type:varchar(20);default:independent;not null;comment:'站点类型：independent、enterprise、industry'" example:"independent、enterprise、industry"`
	Banner           string            `json:"banner" gorm:"type:text;not null" example:"http://a.com/banner.jpg"`
	Language         string            `json:"language" gorm:"type:varchar(10);default:zh-cn;not null" binding:"required" example:"En"`
	Timezone         string            `json:"timezone" gorm:"type:varchar(20);default:UTC+8;not null" binding:"required" example:"UTC+8"`
	Domain           string            `json:"domain" gorm:"not null" binding:"required" example:"http://a.com"`
	Slogan           string            `json:"slogan" gorm:"not null" binding:"required" example:"Slogan Test"`
	Status           int               `json:"status" gorm:"type:int;default:1;not null" example:"1"`
	Description      string            `json:"description" gorm:"not null" example:"Description Test"`
	TemplateType     string            `json:"template_type" gorm:"type:text;not null" example:"default"`
	LayoutType       string            `json:"layout_type" gorm:"type:varchar(10);default:1;not null" example:"1"`
	WecomCorpID      string            `json:"wecom_corp_id" gorm:"type:varchar(100);default:'';not null" example:""`
	WecomInstallInfo *WecomInstallInfo `json:"wecom_install_info" gorm:"-"`
	BaseModel
}

type WecomInstallInfo struct {
	InstallWecomApp int           `json:"install_wecom_app" default:"0"`
	AuthCorpInfo    *AuthCorpInfo `json:"auth_corp_info"`
}

const (
	EnterpriseStatusNormal       = 1
	EnterpriseStatusDisabled     = 2
	EnterpriseStatusNotActivated = 0

	EnterpriseTypeIndependent = "independent"
	EnterpriseTypeEnterprise  = "enterprise"
	EnterpriseTypeIndustry    = "industry"
)

type EnterpriseTypeDescription struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

var enterpriseTypeDescMap = map[string]string{
	EnterpriseTypeIndependent: "AI 独立站",
	EnterpriseTypeEnterprise:  "企业 AI 门户",
	EnterpriseTypeIndustry:    "行业 AI 门户",
}

func GetEnterpriseTypeDescription(key string) string {
	if desc, ok := enterpriseTypeDescMap[key]; ok {
		return desc
	}
	return ""
}

func GetAllEnterpriseTypeDescriptions() []EnterpriseTypeDescription {
	descriptions := make([]EnterpriseTypeDescription, 0, len(enterpriseTypeDescMap))
	for k, v := range enterpriseTypeDescMap {
		descriptions = append(descriptions, EnterpriseTypeDescription{Key: k, Value: v})
	}
	return descriptions
}

func GetEnterpriseModel(id int64) (*Enterprise, error) {
	var enterprise Enterprise
	err := DB.First(&enterprise, id).Error

	if err != nil {
		return nil, err
	}
	return &enterprise, nil
}

// GetEnterpriseByID Get enterprise information by ID
func GetEnterpriseByID(eid int64) (*Enterprise, error) {
	var enterprise Enterprise
	err := DB.Where("eid = ?", eid).First(&enterprise).Error
	if err != nil {
		return nil, err
	}
	return &enterprise, nil
}

func CreateEnterpriseModel(enterprise *Enterprise) error {
	return DB.Create(enterprise).Error
}

func (enterprise *Enterprise) Update() error {
	err := DB.Model(enterprise).
		Where("eid = ?", enterprise.Eid). // 添加主键条件
		Select("*").                      // 明确指定更新所有字段
		Updates(enterprise).Error
	return err
}

func (enterprise *Enterprise) Delete() error {
	return DB.Delete(enterprise).Error
}

func (enterprise *Enterprise) PartialUpdateEnterprise(updateData map[string]interface{}) error {
	// 定义允许更新的字段白名单
	allowedFields := map[string]bool{
		"display_name":  true,
		"logo":          true,
		"ico":           true,
		"keywords":      true,
		"copyright":     true,
		"type":          true,
		"banner":        true,
		"language":      true,
		"timezone":      true,
		"domain":        true,
		"slogan":        true,
		"status":        true,
		"description":   true,
		"template_type": true,
		"layout_type":   true,
	}

	// 过滤非法字段
	filteredUpdate := make(map[string]interface{})
	for field, value := range updateData {
		if allowedFields[field] {
			filteredUpdate[field] = value
		}
	}

	// 自动添加更新时间
	filteredUpdate["updated_time"] = time.Now().Unix()

	return DB.Model(enterprise).
		Where("eid = ?", enterprise.Eid).
		Updates(filteredUpdate).Error
}

func GetEnterpriseName(eid int64) (string, error) {
	var displayName string
	err := DB.Model(&Enterprise{}).
		Select("display_name").
		Where("eid = ?", eid).
		Limit(1).
		Scan(&displayName).Error

	if err != nil {
		return "", err
	}

	return displayName, nil
}

// InitializeSystem checks if the system is in SAAS mode
// If not and no enterprise exists, it creates a default enterprise, user group, and admin user
func InitializeSystem() error {
	// Check if in SAAS mode
	isSaas := config.IS_SAAS
	if isSaas {
		logger.SysLogf("System is running in SAAS mode, skipping default enterprise and user initialization")
		return nil
	}

	// Check if any enterprise exists
	var count int64
	if err := DB.Model(&Enterprise{}).Count(&count).Error; err != nil {
		logger.SysLogf("Failed to check enterprise records: %s", err.Error())
		return err
	}

	// If enterprises already exist, no need to initialize
	if count > 0 {
		logger.SysLogf("Enterprise records already exist, skipping default enterprise and user initialization")
		return nil
	}

	logger.SysLogf("System is running in non-SAAS mode with no enterprise records, starting initialization")

	// Start a transaction
	tx := DB.Begin()
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()
	if tx.Error != nil {
		logger.SysLogf("Failed to begin transaction: %s", tx.Error.Error())
		return tx.Error
	}

	// 1. Create default enterprise
	enterprise := Enterprise{
		DisplayName:  "53AI Hub",
		Logo:         "https://img.ibos.cn/common/agenthub/agent/53ai.png",
		Language:     "zh-cn",
		Description:  "Default enterprise created during system initialization",
		LayoutType:   "1",
		TemplateType: "",
		Status:       EnterpriseStatusNormal,
	}

	if err := tx.Create(&enterprise).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create default enterprise: %s", err.Error())
		return err
	}
	logger.SysLogf("Successfully created default enterprise, ID: %d", enterprise.Eid)

	// 2. Create default user group
	defaultGroup := Group{
		Eid:       enterprise.Eid,
		CreatedBy: 0, // System created
		GroupName: "免费版",
		GroupType: USER_GROUP_TYPE,
		Sort:      0,
	}

	if err := tx.Create(&defaultGroup).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create default user group: %s", err.Error())
		return err
	}
	logger.SysLogf("Successfully created default user group, ID: %d", defaultGroup.GroupId)

	initAILinkData(tx, enterprise.Eid)
	logger.SysLog("Successfully created default ai_link group")

	agentGroup := Group{
		Eid:       enterprise.Eid,
		CreatedBy: 0, // System created
		GroupName: "默认",
		GroupType: AGENT_TYPE,
		Sort:      0,
	}

	if err := tx.Create(&agentGroup).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create default agent group: %s", err.Error())
		return err
	}
	logger.SysLogf("Successfully created default agent group, ID: %d", agentGroup.GroupId)

	// 创建订阅设置
	subscriptionSetting := &SubscriptionSetting{
		GroupId:   defaultGroup.GroupId,
		LogoUrl:   "//img.ibos.cn/common/agenthub/subscription/vip-1.png", // 默认为空
		AiEnabled: false,
		IsDefault: true,
	}

	if err := tx.Create(subscriptionSetting).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create subscription setting: %s", err.Error())
		return err
	}
	logger.SysLogf("Successfully created subscription setting, ID: %d", subscriptionSetting.SettingId)

	yearRelation := &SubscriptionRelation{
		SettingId: subscriptionSetting.SettingId,
		Amount:    0,
		Currency:  "CNY",
		TimeUnit:  "year",
		Type:      1,
	}

	if err := tx.Create(yearRelation).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create yearly subscription relation: %s", err.Error())
		return err
	}
	logger.SysLogf("Successfully created yearly subscription relation")

	monthRelation := &SubscriptionRelation{
		SettingId: subscriptionSetting.SettingId,
		Amount:    0,
		Currency:  "CNY",
		TimeUnit:  "month",
		Type:      1,
	}

	if err := tx.Create(monthRelation).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create monthly subscription relation: %s", err.Error())
		return err
	}
	logger.SysLogf("Successfully created monthly subscription relation")

	pointsRelation := &SubscriptionRelation{
		SettingId: subscriptionSetting.SettingId,
		Amount:    0,
		Currency:  "",
		TimeUnit:  "month",
		Type:      2,
	}

	if err := tx.Create(pointsRelation).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create points subscription relation: %s", err.Error())
		return err
	}
	logger.SysLogf("Successfully created points subscription relation")

	// 3. Create admin user
	adminEmail := os.Getenv("ADMIN_EMAIL")
	adminMobile := os.Getenv("ADMIN_MOBILE")
	adminPassword := os.Getenv("ADMIN_PASSWORD")

	if adminEmail == "" && adminMobile == "" {
		adminEmail = "admin@53ai.com"
	}

	if adminPassword == "" {
		adminPassword = "admin888"
	}

	salt := helper.RandomString(6)
	adminPassword, _ = helper.PasswordHash(adminPassword, salt)

	adminUser := User{
		Username: "admin",
		Nickname: "Administrator",
		Email:    adminEmail,
		Mobile:   adminMobile,
		Eid:      enterprise.Eid,
		GroupId:  defaultGroup.GroupId,
		Role:     RoleCreatorUser, // Set as admin user
		Password: adminPassword,
		Salt:     salt,
	}

	// Create user
	if err := tx.Create(&adminUser).Error; err != nil {
		tx.Rollback()
		logger.SysLogf("Failed to create admin user: %s", err.Error())
		return err
	}

	// Commit transaction
	if err := tx.Commit().Error; err != nil {
		logger.SysLogf("Failed to commit transaction: %s", err.Error())
		return err
	}

	logger.SysLogf("System initialization completed successfully")

	// 执行版本检查（异步执行，不阻塞初始化流程）
	go func() {
		if resp, statisticScript, err := system.CheckVersionAndReturn(); err != nil {
			logger.SysLogf("Async version check failed: %v", err)
		} else {
			if resp.Action == "install" && statisticScript != "" {
				// 保存到数据库
				setting := &Setting{
					Eid:   enterprise.Eid,
					Key:   string(ThirdPartyStatisticHeader),
					Value: statisticScript,
				}

				if err := CreateSetting(setting); err != nil {
					logger.SysLogf("Failed to save statistic setting: %v", err)
				}
				logger.SysLogf("Successfully generated and saved statistic script")
			}

		}
	}()

	logger.SysLogf("\033[34m" + `
                    @                
                   ###                
           /###################\      
          |#####################|     
        ##|#####################|##  
       ###|####    #####    ####|###  
        ##|#####################|##  
          |#####################|     
           \###################/      
                  ######              
                  ###                 
                  @
	` + "\033[0m")
	logger.SysLogf("\033[32m\n" +
		"#################################\n" +
		"#  Email: admin@53ai.com        #\n" +
		"#  Password: admin888           #\n" +
		"#################################\n" +
		"\033[0m")
	return nil
}

var GroupData = []struct {
	GroupName string
	GroupType int64
	Sort      int64
}{
	// 默认为空，用户需要自行添加分组
}

var AILinkData = []struct {
	GroupName   string
	Name        string
	Logo        string
	URL         string
	Description string
	Sort        int64
}{
	// AI搜索分组
	// 默认为空，用户需要自行添加AI工具
}

func initAILinkData(tx *gorm.DB, eid int64) error {
	groups := make([]Group, 0, len(GroupData))
	currentTime := time.Now().UnixMilli()

	for _, g := range GroupData {
		groups = append(groups, Group{
			Eid:       eid,
			GroupName: g.GroupName,
			GroupType: g.GroupType,
			Sort:      g.Sort,
			BaseModel: BaseModel{
				CreatedTime: currentTime,
				UpdatedTime: currentTime,
			},
		})
	}

	if err := tx.CreateInBatches(groups, 100).Error; err != nil {
		tx.Rollback()
		return err
	}

	groupMap := make(map[string]int64)
	var insertedGroups []Group
	if err := tx.Where("eid = ?", eid).Find(&insertedGroups).Error; err != nil {
		tx.Rollback()
		return err
	}

	for _, g := range insertedGroups {
		groupMap[g.GroupName] = g.GroupId
	}

	aiLinks := make([]AILink, 0, len(AILinkData))
	for _, link := range AILinkData {
		groupID, exists := groupMap[link.GroupName]
		if !exists {
			continue
		}

		aiLinks = append(aiLinks, AILink{
			Eid:         eid,
			GroupID:     groupID,
			Name:        link.Name,
			Logo:        link.Logo,
			URL:         link.URL,
			Description: link.Description,
			Sort:        link.Sort,
			BaseModel: BaseModel{
				CreatedTime: currentTime,
				UpdatedTime: currentTime,
			},
		})
	}

	if err := tx.CreateInBatches(aiLinks, 200).Error; err != nil {
		tx.Rollback()
		return err
	}

	return nil
}

func GetEnterpriseByWecomCorpID(wecomCorpID string) (*Enterprise, error) {
	var enterprise Enterprise
	err := DB.Where("wecom_corp_id = ?", wecomCorpID).First(&enterprise).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, err
	}
	return &enterprise, nil
}

func (e *Enterprise) LoadWecomCorpInfo(suiteID string, loadType int) error {
	e.WecomInstallInfo = &WecomInstallInfo{
		InstallWecomApp: 0,
	}
	if e.WecomCorpID == "" || suiteID == "" {
		return nil
	}

	wc, err := GetWecomCorp(suiteID, e.WecomCorpID)
	if wc == nil || err != nil {
		return nil
	}

	e.WecomInstallInfo.InstallWecomApp = 1
	if loadType == 1 {
		e.WecomInstallInfo.AuthCorpInfo = wc.GetAuthCorpInfo()
	}

	return nil
}
