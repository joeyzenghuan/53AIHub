package config

import (
	"os"
)

// GetEncryptionKey returns the encryption key for sensitive data
func GetEncryptionKey() string {
	// In production, this should be a secure key stored in environment variables
	// or a secure key management system
	key := os.Getenv("53AIHub_ENCRYPTION_KEY")
	if key == "" {
		// Fallback to a default key (not recommended for production)
		key = "default-encryption-key-32-bytes-long"
	}
	return key
}
