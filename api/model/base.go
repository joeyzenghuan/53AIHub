package model

import (
	"time"

	"gorm.io/gorm"
)

type BaseModel struct {
	CreatedTime int64 `json:"created_time" gorm:"not null"`
	UpdatedTime int64 `json:"updated_time" gorm:"not null"`
}

func (m *BaseModel) BeforeCreate(tx *gorm.DB) (err error) {
	now := time.Now().UTC().UnixMilli()
	if m.CreatedTime == 0 {
		m.CreatedTime = now
	}
	m.UpdatedTime = now
	return
}

func (m *BaseModel) BeforeUpdate(tx *gorm.DB) (err error) {
	m.UpdatedTime = time.Now().UTC().UnixMilli()
	return
}
