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

# Loggers
log-bold = \e[1m$(1)\e[0m
log-complete = printf "\e[${ANSI_COLOR_GREEN}m$(1)\e[0m \n"
log-danger = $(call log-template,${ANSI_COLOR_RED},$(1))
log-info = $(call log-template,${ANSI_COLOR_WHITE},$(1))
log-italic = \e[3m$(1)\e[0m
log-process = printf "\e[${ANSI_COLOR_WHITE}m$(1)\e[0m \n"
log-result = $(call log-template,${ANSI_COLOR_MAGENTA},$(1))
log-start = $(call log-template,${ANSI_COLOR_MAGENTA},$(1))
log-step = $(call log-template,${ANSI_COLOR_YELLOW},$(1))
log-success = $(call log-template,${ANSI_COLOR_GREEN},$(1))
log-sum = $(call log-template,${ANSI_COLOR_CYAN},$(1))
log-template = printf "\e[100m make \e[${1};49m $(2)\e[0m \n"
log-underline = \e[4m$(1)\e[0m

# Text and string
newline = echo ""
headline = printf "\e[${ANSI_COLOR_CYAN};49;1m$(1)\e[0m \n\n"
txt-continue = echo "Continue to the next step..."
txt-diff = $(call log-sum,Changes between commits and working tree)
txt-done = $(call log-success,Done)
txt-note = $(call log-underline,Note)
txt-opps = echo "Opps! please try again."
txt-options = printf "* default option, press $(call log-bold,enter) key to continue / enter $(call log-bold,0) to cancel.\n"
txt-performing = echo "This command will perform the following actions:"
txt-processing = $(call log-process,Processing...)
txt-result = $(call log-result,Listing the results...)
txt-skipped = echo "Skipped"
txt-status = $(call log-sum,The working tree status)
txt-summary = $(call log-sum,Summary)
txt-version = printf "Makefile version ${MAKEFILE_VERSION}\n"
txt-warning = $(call log-underline,Warning)

# Getters and Setters
get-ip = $$(ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p')
set-json = sed -i.${EXT_BACKUP} 's|\(.*"$(1)"\): "\(.*\)"$(3).*|\1: '"\"$(2)\"$(3)|" $(4)
set-env = sed -i.${EXT_BACKUP} 's;^$(1)=.*;$(1)='"$(2)"';' $(3)
