package model

import (
	"crypto/md5"
	"fmt"
	"path"
	"strconv"

	"github.com/53AI/53AIHub/common/storage"
)

type UploadFile struct {
	ID         int64  `json:"id" gorm:"primaryKey;autoIncrement"`
	FileName   string `json:"file_name" gorm:"not null;type:varchar(512);default:''"`
	Key        string `json:"key" gorm:"not null;type:varchar(512)"`
	Eid        int64  `json:"eid" gorm:"not null;index" example:"1"`
	UserID     int64  `json:"user_id" gorm:"not null;index" example:"1"`
	Size       int64  `json:"size" gorm:"not null;default:0" example:"0"`
	Extension  string `json:"extension" gorm:"not null;type:varchar(50);default:''" example:""`
	MimeType   string `json:"mime_type" gorm:"not null;type:varchar(50);default:''" example:""`
	Hash       string `json:"hash" gorm:"not null;type:varchar(512);default:''" example:""`
	PreviewKey string `json:"preview_key" gorm:"not null;type:varchar(100);index;default:''" example:""`
	BaseModel
}

func GetFileKey(fileName string, Eid int64, UserId int64) string {
	eidStr := strconv.FormatInt(Eid, 10)
	userIdStr := strconv.FormatInt(UserId, 10)

	return storage.StorageInstance.GetBasePath() + "/" + path.Join(eidStr, userIdStr, fileName)
}

func (uploadFile *UploadFile) Save() error {
	var oldUploadFile UploadFile
	if err := DB.Where("eid =? AND user_id =? AND hash =?", uploadFile.Eid, uploadFile.UserID, uploadFile.Hash).First(&oldUploadFile).Error; err != nil {
		if err.Error() == "record not found" {
			result := DB.Create(uploadFile)
			if result.Error != nil {
				return result.Error
			}

			return nil
		}
		return err
	}
	result := DB.Model(&oldUploadFile).Updates(uploadFile)
	if result.Error != nil {
		return result.Error
	}
	*uploadFile = oldUploadFile
	return nil
}

func GetPreviewKey(hashStr string, extension string) (string, error) {
	// md5 hash str + extension
	combined := hashStr
	hash := md5.Sum([]byte(combined))
	return fmt.Sprintf("%x", hash) + extension, nil
}

func GetUploadFileByEidAndPreviewKey(Eid int64, PreviewKey string) (uploadFile UploadFile, err error) {
	if len(PreviewKey) > 0 && PreviewKey[0] == '/' {
		PreviewKey = PreviewKey[1:]
	}
	err = DB.Model(&UploadFile{}).Where("eid =? AND `preview_key` =?", Eid, PreviewKey).First(&uploadFile).Error
	return uploadFile, err
}

func GetNoAuthUploadFileByEidAndPreviewKey(PreviewKey string) (uploadFile UploadFile, err error) {
	if len(PreviewKey) > 0 && PreviewKey[0] == '/' {
		PreviewKey = PreviewKey[1:]
	}
	err = DB.Model(&UploadFile{}).Where("`preview_key` =?", PreviewKey).First(&uploadFile).Error
	return uploadFile, err
}

func GetUploadFileByID(id int64) (uploadFile *UploadFile, err error) {
	err = DB.Model(&UploadFile{}).Where("id =?", id).First(&uploadFile).Error
	return uploadFile, err
}

func (uploadFile *UploadFile) GetChannelFileMapping(channelId int, model string) *ChannelFileMapping {
	var channelFileMapping ChannelFileMapping
	err := DB.Model(&ChannelFileMapping{}).Where("channel_id =? AND file_id =? AND model =?", channelId, uploadFile.ID, model).First(&channelFileMapping).Error
	if err != nil {
		return nil
	}
	return &channelFileMapping
}
