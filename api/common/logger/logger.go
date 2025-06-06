package logger

import (
	"context"
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"sync"
	"time"

	"github.com/53AI/53AIHub/common/utils/helper"
	"github.com/53AI/53AIHub/config"
	"github.com/gin-gonic/gin"
)

type loggerLevel string

const (
	loggerDEBUG loggerLevel = "DEBUG"
	loggerINFO  loggerLevel = "INFO"
	loggerWARN  loggerLevel = "WARN"
	loggerERROR loggerLevel = "ERROR"
	loggerFATAL loggerLevel = "FATAL"
	loggerNONE  loggerLevel = "NONE"
)

var (
	setupLogOnce sync.Once
	// Current log level, initialized from environment variable
	currentLogLevel loggerLevel = loggerINFO
)

// Initialize the logger system with environment variables
func init() {
	// Get log level from environment variable, default to INFO if not set
	envLogLevel := os.Getenv("LOG_LEVEL")
	if envLogLevel != "" {
		switch strings.ToUpper(envLogLevel) {
		case string(loggerDEBUG):
			currentLogLevel = loggerDEBUG
		case string(loggerINFO):
			currentLogLevel = loggerINFO
		case string(loggerWARN):
			currentLogLevel = loggerWARN
		case string(loggerERROR):
			currentLogLevel = loggerERROR
		case string(loggerFATAL):
			currentLogLevel = loggerFATAL
		case string(loggerNONE):
			currentLogLevel = loggerNONE
		default:
			// If invalid level is provided, default to INFO
			currentLogLevel = loggerINFO
		}
	}
}

// SetLogLevel allows programmatically setting the log level
func SetLogLevel(level string) {
	switch strings.ToUpper(level) {
	case string(loggerDEBUG):
		currentLogLevel = loggerDEBUG
	case string(loggerINFO):
		currentLogLevel = loggerINFO
	case string(loggerWARN):
		currentLogLevel = loggerWARN
	case string(loggerERROR):
		currentLogLevel = loggerERROR
	case string(loggerFATAL):
		currentLogLevel = loggerFATAL
	case string(loggerNONE):
		currentLogLevel = loggerNONE
	default:
		// If invalid level is provided, default to INFO
		currentLogLevel = loggerINFO
	}
}

// GetLogLevel returns the current log level
func GetLogLevel() string {
	return string(currentLogLevel)
}

// shouldLog determines if a log message should be output based on its level
func shouldLog(level loggerLevel) bool {
	if currentLogLevel == loggerNONE {
		return false
	}

	switch currentLogLevel {
	case loggerDEBUG:
		return true
	case loggerINFO:
		return level != loggerDEBUG
	case loggerWARN:
		return level != loggerDEBUG && level != loggerINFO
	case loggerERROR:
		return level == loggerERROR || level == loggerFATAL
	case loggerFATAL:
		return level == loggerFATAL
	default:
		return true
	}
}

func SetupLogger() {
	setupLogOnce.Do(func() {
		if config.LogDir != "" {
			var logPath string
			if config.OnlyOneLogFile {
				logPath = filepath.Join(config.LogDir, "53AIHub.log")
			} else {
				logPath = filepath.Join(config.LogDir, fmt.Sprintf("53AIHub-%s.log", time.Now().Format("20060102")))
			}
			fd, err := os.OpenFile(logPath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
			if err != nil {
				log.Fatal("failed to open log file")
			}
			gin.DefaultWriter = io.MultiWriter(os.Stdout, fd)
			gin.DefaultErrorWriter = io.MultiWriter(os.Stderr, fd)
		}
	})
}

func SysLog(s string) {
	logHelper(nil, loggerINFO, s)
}

func SysLogf(format string, a ...any) {
	logHelper(nil, loggerINFO, fmt.Sprintf(format, a...))
}

func SysWarn(s string) {
	logHelper(nil, loggerWARN, s)
}

func SysWarnf(format string, a ...any) {
	logHelper(nil, loggerWARN, fmt.Sprintf(format, a...))
}

func SysError(s string) {
	logHelper(nil, loggerERROR, s)
}

func SysErrorf(format string, a ...any) {
	logHelper(nil, loggerERROR, fmt.Sprintf(format, a...))
}

func Debug(ctx context.Context, msg string) {
	logHelper(ctx, loggerDEBUG, msg)
}

func Info(ctx context.Context, msg string) {
	logHelper(ctx, loggerINFO, msg)
}

func Warn(ctx context.Context, msg string) {
	logHelper(ctx, loggerWARN, msg)
}

func Error(ctx context.Context, msg string) {
	logHelper(ctx, loggerERROR, msg)
}

func Debugf(ctx context.Context, format string, a ...any) {
	logHelper(ctx, loggerDEBUG, fmt.Sprintf(format, a...))
}

func Infof(ctx context.Context, format string, a ...any) {
	logHelper(ctx, loggerINFO, fmt.Sprintf(format, a...))
}

func Warnf(ctx context.Context, format string, a ...any) {
	logHelper(ctx, loggerWARN, fmt.Sprintf(format, a...))
}

func Errorf(ctx context.Context, format string, a ...any) {
	logHelper(ctx, loggerERROR, fmt.Sprintf(format, a...))
}

func FatalLog(s string) {
	logHelper(nil, loggerFATAL, s)
}

func FatalLogf(format string, a ...any) {
	logHelper(nil, loggerFATAL, fmt.Sprintf(format, a...))
}

func logHelper(ctx context.Context, level loggerLevel, msg string) {
	// Check if this log level should be output
	if !shouldLog(level) {
		return
	}

	writer := gin.DefaultErrorWriter
	if level == loggerINFO {
		writer = gin.DefaultWriter
	}
	var requestId string
	if ctx != nil {
		rawRequestId := helper.GetRequestID(ctx)
		if rawRequestId != "" {
			requestId = fmt.Sprintf(" | %s", rawRequestId)
		}
	}
	lineInfo, funcName := getLineInfo()
	now := time.Now()
	_, _ = fmt.Fprintf(writer, "[%s] %v%s%s %s%s \n", level, now.Format("2006/01/02 - 15:04:05"), requestId, lineInfo, funcName, msg)
	SetupLogger()
	if level == loggerFATAL {
		os.Exit(1)
	}
}

func getLineInfo() (string, string) {
	funcName := "[unknown] "
	pc, file, line, ok := runtime.Caller(3)
	if ok {
		if fn := runtime.FuncForPC(pc); fn != nil {
			parts := strings.Split(fn.Name(), ".")
			funcName = "[" + parts[len(parts)-1] + "] "
		}
	} else {
		file = "unknown"
		line = 0
	}
	parts := strings.Split(file, "one-api/")
	if len(parts) > 1 {
		file = parts[1]
	}
	return fmt.Sprintf(" | %s:%d", file, line), funcName
}
