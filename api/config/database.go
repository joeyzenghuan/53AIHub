package config

import "github.com/53AI/53AIHub/common/utils/env"

var UsingSQLite = false
var UsingPostgreSQL = false
var UsingMySQL = false
var DebugSQLEnabled = env.Bool("DEBUG_SQL", false)

var SQLitePath = "53ai-hub.db"
var SQLiteBusyTimeout = env.Int("SQLITE_BUSY_TIMEOUT", 3000)
