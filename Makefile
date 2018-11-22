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

# Default goal
.DEFAULT_GOAL := help

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

# Check if the specified local image exists
define helper-image-verify
	docker image inspect $(1) >/dev/null 2>&1
endef

# Download image from Docker Hub
define helper-image-download
	docker image inspect $(1) >/dev/null 2>&1 && \
	(echo "Skipping, $(1) already exists.") || \
	(docker pull $(1) && $(call log-complete,Downloaded successfully.))
endef

# Build image for the CI environment
define helper-image-ci
	docker-compose -f ${COMPOSE_BASE} -f ${COMPOSE_CI} $(1) $(2) ${SERVICE_APP} $(3)
endef

# Rebuild image for the development environment
define helper-image-rebuild
	$(call log-step,[Step 1/3] Stop running containers (if ones exist)); \
	docker-compose stop; \
	$(call log-step,[Step 2/3] Download base images (if needed)); \
	$(call log-step,[Step 3/3] Rebuild the image(s)); \
	docker-compose build $(1)
endef

# Add host names
define helper-host
	if grep -Fxq "${HOST_IP}       $(1)" ${HOST_DNS}; then \
		echo "Skipping, $(1) is already set."; \
	else \
		echo "${HOST_IP}       $(1)" | sudo tee -a ${HOST_DNS}; \
		$(call log-complete,Set host name successfully.); \
	fi
endef

# Open a web browser
define helper-browser
	printf "Opening $(call log-bold,$(1)) in the default browser...\n"; \
	open -a ${BROWSER} $(1); \
	$(txt-done)
endef

# Open Finder
define helper-finder
	printf "Opening $(call log-bold,$(1)) in Finder...\n"; \
	open $(1); \
	$(txt-done)
endef

# Open code editor
helper-code = code ${DIR_CWD}

# Create an optimized production build
define helper-production-build
	docker-compose -f ${COMPOSE_BASE} -f ${COMPOSE_PRODUCTION} $(1)
endef

# Run an optimized production build
define helper-production-preview
	$(newline); \
	$(call log-start,Run the production build...); \
	$(call log-step,[Step 1/8] Stop running containers *); \
	docker-compose stop; \
	$(call log-step,[Step 2/8] Create an optimized production build *); \
	$(call log-step,[Step 3/8] Build the production image tagged $(call log-bold,${IMAGE_NAME}) *); \
	$(call log-step,[Step 4/8] Create a network *); \
	$(call log-step,[Step 5/8] Create app and reverse proxy containers *); \
	$(call log-step,[Step 6/8] Start the containers); \
	$(call log-step,[Step 7/8] Attach STDOUT/STDERR and forward signals); \
	$(call log-step,[Step 8/8] Start the web and reverse proxy servers); \
	$(newline); \
	$(call log-info,Information); \
	printf "You can view the production build in the browser at:\n"; \
	$(newline); \
	printf "Local           : ${URL_BUILD}\n"; \
	printf "On your network : ${URL_PROTOCAL}://$(get-ip)\n"; \
	$(call helper-image-verify, ${IMAGE_NAME}) && ( \
		if [ "$(1)" == "build" ]; then \
			$(newline); \
			$(call log-start,Rebuilding the production image$(,) this will take a moment...); \
			$(call helper-production-build,up --build --no-start); \
		fi; \
	) || ( \
		$(newline); \
		$(call log-start,Building the production image$(,) this will take a moment...) && \
		$(call helper-production-build,up --no-start) \
	); \
	$(newline); \
	$(call log-start,Starting the containers...); \
	$(call helper-production-build,up)
endef

# Run unit tests
define helper-run-test
	$(call log-step,[Step 1/5] Remove the existing code coverage reports); \
	if [ "$(2)" == "cleanup" ]; then \
		$(helper-remove-coverage); \
	else \
		echo "Skipping, this is not the case."; \
		$(txt-continue); \
	fi; \
	$(call log-step,[Step 2/5] Build the development image (if needed)); \
	$(call log-step,[Step 3/5] Create and start a container for running tests); \
	$(call log-step,[Step 4/5] Run tests); \
	$(call log-step,[Step 5/5] Remove the container when the process finishes); \
	docker-compose \
	-f ${COMPOSE_BASE} \
	-f ${COMPOSE_DEVELOPMENT} \
	-f ${COMPOSE_TEST} run \
	--name ${IMAGE_REPO}-${ENV_TEST} \
	--rm \
	${SERVICE_APP} test$(1)
endef

# Run code linting
define helper-run-lint
	$(call log-step,[Step 1/4] Build the development image (if needed)); \
	$(call log-step,[Step 2/4] Create and start a container for running code linting); \
	$(call log-step,[Step 3/4] Run code linting); \
	$(call log-step,[Step 4/4] Remove the container when the process finishes); \
	docker-compose run --rm ${SERVICE_APP} lint$(1)
endef

# Run static type checking
define helper-run-typecheck
	$(call log-step,[Step 1/4] Build the development image (if needed)); \
	$(call log-step,[Step 2/4] Create and start a container for running static type checking); \
	$(call log-step,[Step 3/4] Run static type checking); \
	$(call log-step,[Step 4/4] Remove the container when the process finishes); \
	docker-compose run --rm ${SERVICE_APP} type$(1)
endef

# Remove build artifacts
define helper-remove-build
	$(call log-process,Removing build artifacts...); \
	if [ -d "${DIR_BUILD}" ]; then \
		rm -rf -v ${DIR_BUILD}; \
		$(call log-complete,Removed successfully.); \
	else \
		echo "Skipping, no build artifacts found."; \
		$(txt-continue); \
	fi
endef

# Remove code coverage reports
define helper-remove-coverage
	$(call log-process,Removing code coverage reports...); \
	if [ -d "${DIR_COVERAGE}" ]; then \
		rm -rf -v ${DIR_COVERAGE}; \
		$(call log-complete,Removed successfully.); \
	else \
		echo "Skipping, no code coverage reports found."; \
		$(txt-continue); \
	fi
endef

# Remove artifacts
define helper-remove-artifacts
	if [[ -d "${DIR_BUILD}" || -d "${DIR_COVERAGE}" ]]; then \
		$(helper-remove-build); \
		$(helper-remove-coverage); \
	else \
		$(call log-process,Removing artifacts...); \
		echo "Skipping, no artifacts found."; \
		$(txt-continue); \
	fi
endef

# Remove temporary files
define helper-remove-temporary
	$(call log-process,Removing temporary files...); \
	for f in ${DIR_TEMP}/*; do \
		[ -e "$$f" ] && \
		(rm -rf -v ${DIR_TEMP}/* && $(call log-complete,Removed successfully.)) || \
		(printf "Skipping, no temporary files found.\n" && $(txt-continue)); \
		break; \
	done
endef

##@ Miscellaneous:

.PHONY: help
help: ## Print usage
	@awk 'BEGIN {FS = ":.*##"; \
	printf "\nUsage: make \033[${ANSI_COLOR_CYAN}m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ \
	{ printf "  \033[${ANSI_COLOR_CYAN}m%-27s\033[0m %s\n", $$1, $$2 } /^##@/ \
	{ printf "\n\033[0m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
	@$(newline)
	@printf "*   with options\n"
	@printf "**  requires user input\n"
	@printf "*** requires superuser access\n\n"
	@$(txt-version)
	@$(newline)
