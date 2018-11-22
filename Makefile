# Dependencies
include .env

# Configuration
SHELL := /bin/bash

# Global variables
, := ,
BLANK :=
SPACE := $(BLANK) $(BLANK)
CURRENT_DATE = $$(date +'%d.%m.%Y')

# Conditional cases
IF_ANY := *
IF_NO := [nN] | [nN][oO]
IF_YES := [yY] | [yY][eE][sS]

# Confirmation messages
CONFIRM_CONTINUE := Are you sure you want to continue? [y/N]

# ANSI color codes
ANSI_COLOR_BLACK := 30
ANSI_COLOR_BLUE := 34
ANSI_COLOR_CYAN := 36
ANSI_COLOR_GREEN := 32
ANSI_COLOR_MAGENTA := 35
ANSI_COLOR_RED := 31
ANSI_COLOR_YELLOW := 33
ANSI_COLOR_WHITE := 37
