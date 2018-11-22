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

# Configure Git user
define helper-git-user
	printf "Username : "; \
	git config user.name; \
	printf "Email    : "; \
	git config user.email
endef

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

# Open code coverage reports in a web browser
define helper-open-coverage
	if [ -d "${DIR_COVERAGE}" ]; then \
		$(call helper-browser,./${DIR_COVERAGE}/lcov-report/index.html); \
	else \
		printf "Skipping, no code coverage reports found.\n"; \
		printf "Run $(call log-bold,test) command with $(call log-bold,coverage) option to generate the reports.\n"; \
	fi
endef

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

# Install and update npm dependencies
define helper-update
	$(call log-start,Install and update dependencies...)
	$(call log-step,[Step 1/7] Stop running containers *)
	docker-compose stop
	$(call log-step,[Step 2/7] Build the development image *)
	$(call log-step,[Step 3/7] Create a container for updating dependencies)
	$(call log-step,[Step 4/7] Start the container)
	$(call log-step,[Step 5/7] Install and update dependencies in the persistent storage (volume))
	$(call log-step,[Step 6/7] Update ${CONFIG_PACKAGE} *)
	$(call log-step,[Step 7/7] Remove the container)
	$(call helper-image-verify, ${IMAGE_DEVELOPMENT}) || ( \
		$(newline); \
		$(call log-start,Building the development image$(,) this will take a moment...) && \
		docker-compose build ${SERVICE_APP}; \
	); \
	$(newline); \
	$(call log-start,Installing dependencies...); \
	docker-compose run --rm ${SERVICE_APP} install
endef

# Start the development environment
define helper-devserver-start
	if [ "$(1)" == "build" ]; then \
		$(call log-start,Restart the development environment...); \
	else \
		$(call log-start,Start the development environment...); \
	fi; \
	$(call log-step,[Step 1/8] Stop running containers *); \
	docker-compose stop; \
	$(call log-step,[Step 2/8] Build a development image *); \
	$(call log-step,[Step 3/8] Create a network *); \
	$(call log-step,[Step 4/8] Create a volume for persisting dependencies *); \
	$(call log-step,[Step 5/8] Create development and reverse proxy containers *); \
	$(call log-step,[Step 6/8] Start the containers); \
	$(call log-step,[Step 7/8] Attach STDOUT/STDERR and forward signals); \
	$(call log-step,[Step 8/8] Start the development and reverse proxy servers); \
	$(newline); \
	$(call log-info,Information); \
	printf "You can view $(call log-bold,${APP_NAME}) in the browser at:\n"; \
	$(newline); \
	printf "Local           : ${URL_LOCAL}\n"; \
	printf "On your network : ${URL_PROTOCAL}://$(get-ip)\n"; \
	$(newline); \
	printf "$(txt-note): DO NOT use the URLs, IP addresses and ports generated by Webpack DevServer\nshowing in the output below. They can only be accessible inside a container and\nare not bound to the host machine.\n"; \
	if [ "$(1)" == "build" ]; then \
		$(newline); \
		$(call log-start,Rebuilding the development image$(,) this will take a moment...); \
		docker-compose up --build --no-start; \
	else \
		$(call helper-image-verify, ${IMAGE_DEVELOPMENT}) || ( \
			$(newline); \
			$(call log-start,Building the development image$(,) this will take a moment...) && \
			docker-compose up --no-start \
		); \
	fi; \
	$(newline); \
	$(call log-start,Starting the containers...); \
	docker-compose up
endef

# Optionally start the development and proxy servers
define helper-devserver-option
	read -p "Would you like to start the development server right away? " CONFIRMATION; \
	case "$$CONFIRMATION" in \
		${IF_YES}) \
			$(newline); \
			$(helper-devserver-start); \
		;; \
		${IF_ANY}) \
			$(txt-skipped); \
			$(txt-done); \
		;; \
	esac
endef

# Set a new release version
define helper-version
	$(call log-start,Set a release version); \
	printf "The current version is $(call log-bold,v${RELEASE_VERSION}) (released on ${RELEASE_DATE})\n"; \
	$(newline); \
	printf "$(txt-note): You $(call log-bold,must) clean up the development environment built with the configuration\nfrom v${RELEASE_VERSION} before tagging a new release version, otherwise you will not be able\nto remove the outdated environment once you have set a new version. To do that,\ncancel this command by hitting $(call log-bold,enter/return) key and run $(call log-bold,reset) command.\n"; \
	$(newline); \
	read -p "Would you like to clean up the development environment? " CONFIRMATION; \
	case "$$CONFIRMATION" in \
		${IF_YES}) \
			$(newline); \
			$(call log-start,Cleaning up the development environment...); \
			$(call log-step,[Step 1/4] Stop and remove containers$(,) default network$(,) and volumes); \
			docker-compose down -v; \
			$(call log-step,[Step 2/4] Remove the development images); \
			docker image rm ${ENV_LOCAL}/${IMAGE_REPO}; \
			$(call log-step,[Step 3/4] Remove the production image); \
			docker image rm ${IMAGE_NAME}; \
			$(call log-step,[Step 4/4] Remove the intermediate images); \
			docker image prune --filter label=stage=${IMAGE_INTERMEDIATE} --force; \
			$(call log-complete,Cleaned up successfully.); \
			$(newline); \
			read -p "Enter a version number: " VERSION; \
			if [ "$$VERSION" != "" ]; then \
				GIT_CHANGES=${CONFIG_ENV}; \
				GIT_COMMIT="Set release version to v$$VERSION"; \
				TXT_INSTRUCTION="Skipping, please commit the changes before releasing the update."; \
				TXT_SUMMARY="Please run $(call log-bold,release) command to prepare for the next release."; \
				$(newline); \
				$(call log-start,Processing...); \
				$(call log-step,[Step 1/2] Set release date); \
				$(call set-env,RELEASE_DATE,${CURRENT_DATE},${CONFIG_ENV}); \
				echo "${CURRENT_DATE} (today)"; \
				$(call log-step,[Step 2/2] Set release version); \
				echo "v$$VERSION"; \
				$(call set-env,RELEASE_VERSION,$$VERSION,${CONFIG_ENV}); \
				rm ${CONFIG_ENV}.${EXT_BACKUP}; \
				$(call log-complete,Set a new version successfully.); \
				$(newline); \
				$(txt-result); \
				$(txt-status); \
				git status ${CONFIG_ENV}; \
				$(newline); \
				$(txt-diff); \
				git diff ${CONFIG_ENV}; \
				$(newline); \
				$(txt-summary); \
				printf "The next release will be $(call log-bold,v$$VERSION) on ${CURRENT_DATE} (today).\n"; \
				$(txt-done); \
			else \
				$(txt-skipped); \
			fi; \
		;; \
		${IF_ANY}) \
			$(txt-skipped); \
		;; \
	esac
endef

# Release new application version
define helper-release
	$(call log-step,[Step 1/1] Configure ${CONFIG_NPM} for Node.js environment deployment); \
	$(call set-json,version,${RELEASE_VERSION},$(,),${CONFIG_NPM}); \
	rm *.${EXT_BACKUP}
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

# Print Docker summary
define output-sum-docker
	$(call log-sum,Containers (including exited state)); \
	docker container ls -a; \
	$(newline); \
	$(call log-sum,Networks); \
	docker network ls; \
	$(newline); \
	$(call log-sum,Volumes); \
	docker volume ls; \
	$(newline); \
	$(call log-sum,Images (including intermediates)); \
	docker image ls -a
endef

# Print artifacts summary
define output-sum-artifacts
	$(call log-sum,Artifacts); \
	if [[ -d "${DIR_BUILD}" || -d "${DIR_COVERAGE}" ]]; then \
		echo "Opps! there are some artifacts left, please try again."; \
	else \
		echo "All clean"; \
	fi
endef

# Print temporary files summary
define output-sum-temporary
	$(call log-sum,Temporary files); \
	for f in ${DIR_TEMP}/*; do \
		[ -e "$$f" ] && \
		echo "Opps! there are some files left, please try again." || \
		echo "All clean"; \
		break; \
	done
endef

##@ Development:

.PHONY: start
start: ## Start the development environment and attach to containers for a service
	@$(helper-devserver-start)

.PHONY: restart
restart: ## Rebuild image and restart the development environment
	@$(call helper-devserver-start,build)

.PHONY: stop
stop: ## Stop running containers
	@$(call log-start,Stopping running containers...)
	@docker-compose stop
	@$(txt-done)

.PHONY: run
run: ## Update npm dependencies and start the development environment
	@$(call log-start,Update npm dependencies and start the development environment)
	@printf "Install and update all the dependencies listed within $(call log-italic,package.json) and $(call log-italic,yarn.lock)\nbefore starting the development environment.\n"
	@$(newline)
	@$(call log-info,Part 1/2 : Install and update dependencies)
	@$(helper-update)
	@$(newline)
	@$(call log-info,Part 2/2 : Start the development environment)
	@$(helper-devserver-start)

.PHONY: up
up: ## Rebuild development image for a service
	@$(call log-start,This command will perform the following actions:)
	@echo "- Stop running containers (if ones exist)"
	@echo "- Rebuild development image for a service"
	@$(newline)
	@echo "Available options:"
	@printf "1. $(call log-bold,all) *  : Rebuild images for all services\n"
	@printf "2. $(call log-bold,app)    : Rebuild image for app service\n"
	@printf "3. $(call log-bold,proxy)  : Rebuild image for proxy service\n"
	@$(newline)
	@$(txt-options)
	@$(newline)
	@read -p "Enter the option: " OPTION; \
	if [[ "$$OPTION" == "" || "$$OPTION" == 1 || "$$OPTION" == "all" ]]; then \
		$(newline); \
		$(call log-start,Rebuilding images for all services...); \
		$(call helper-image-rebuild); \
		$(txt-done); \
	elif [[ "$$OPTION" == 2 || "$$OPTION" == "app" ]]; then \
		$(newline); \
		$(call log-start,Rebuilding image for ${SERVICE_APP} service...); \
		$(call helper-image-rebuild,${SERVICE_APP}); \
		$(txt-done); \
	elif [[ "$$OPTION" == 3 || "$$OPTION" == "proxy" ]]; then \
		printf "Skipping, $(call log-bold,${SERVICE_PROXY}) service uses an image.\n"; \
	elif [ "$$OPTION" == 0 ]; then \
		$(txt-skipped); \
	else \
		$(txt-opps); \
	fi;

.PHONY: build
build: ## Create an optimized production build
	@$(call log-start,Creating an optimized production build...)
	@$(call log-step,[Step 1/6] Remove the existing build (if one exists))
	@$(helper-remove-build)
	@$(call log-step,[Step 2/6] Download base images (if needed))
	@$(call log-step,[Step 3/6] Build the development image (if it doesn't exist))
	@$(call log-step,[Step 4/6] Create and start a container for building the app)
	@$(call log-step,[Step 5/6] Create an optimized production build)
	@$(call log-step,[Step 6/6] Stop and remove the container)
	@docker-compose run --rm ${SERVICE_APP} build
	@$(newline)
	@$(txt-result)
	@$(call log-sum,Build artifacts)
	@ls ${DIR_BUILD}
	@$(newline)
	@$(txt-summary)
	@printf "The production build has been created successfully in $(call log-bold,./${DIR_BUILD}) directory.\n"
	@read -p "Would you like to view the build artifacts in Finder? " CONFIRMATION; \
	case "$$CONFIRMATION" in \
		${IF_YES}) \
			echo "Opening in Finder..."; \
			open ./${DIR_BUILD}; \
		;; \
		${IF_ANY}) \
			$(txt-skipped); \
		;; \
	esac
	@$(txt-done)

.PHONY: preview
preview: ## Run the production build locally
	@echo "Available options:"
	@printf "1. $(call log-bold,run) *  : Run the production build\n"
	@printf "2. $(call log-bold,build)  : Build image before running the app\n"
	@$(newline)
	@$(txt-options)
	@$(newline)
	@read -p "Enter the option: " OPTION; \
	if [[ "$$OPTION" == "" || "$$OPTION" == 1 || "$$OPTION" == "run" ]]; then \
		$(call helper-production-preview); \
	elif [[ "$$OPTION" == 2 || "$$OPTION" == "build" ]]; then \
		$(call helper-production-preview,build); \
	elif [ "$$OPTION" == 0 ]; then \
		$(txt-skipped); \
	else \
		$(txt-opps); \
	fi;

##@ Utilities:

.PHONY: setup
setup: GIT_CONFIG = ${DIR_GIT}/config
setup: ## Setup the development environment ***
	@$(call log-start,Setting up the development environment...)
	@$(call log-step,[Step 1/5] Configure Git username and email address)
	@if grep -Fxq "[user]" ${GIT_CONFIG}; then \
		echo "Your user settings are already set for this repository in ${GIT_CONFIG}:"; \
		$(newline); \
		$(helper-git-user); \
	else \
		echo "The following are your global Git user settings:"; \
		$(newline); \
		$(helper-git-user); \
		$(newline); \
		printf "$(txt-note): You can change the username and email address associated with commits\nyou make in this repository. This will override your global Git configuration\nsettings in this one repository, but will not affect any other repositories.\n"; \
	fi
	@$(newline)
	@read -p "Would you like to change the current settings? " CONFIRMATION; \
	case "$$CONFIRMATION" in \
		${IF_YES}) \
			read -p "Enter new username: " USERNAME; \
			if [ "$$USERNAME" != "" ]; then \
				git config user.name "$$USERNAME"; \
			else \
				$(txt-skipped); \
			fi; \
			read -p "Enter new email address: " EMAIL; \
			if [ "$$EMAIL" != "" ]; then \
				git config user.email "$$EMAIL"; \
			else \
				$(txt-skipped); \
			fi; \
			$(call log-complete,Configured successfully.); \
		;; \
		${IF_ANY}) \
			echo "Skipping, use the current settings."; \
		;; \
	esac
	@$(call log-step,[Step 2/5] Install dependencies required for running on the development environment)
	@$(call log-process,Checking local images...)
	@$(call helper-image-download,${BASE_NGINX})
	@$(call helper-image-download,${BASE_NODE})
	@$(call helper-image-download,${BASE_PROXY})
	@$(call log-step,[Step 3/5] Set custom host names for a self-signed SSL certificate)
	@$(call log-process,Verifying host names...)
	@$(call helper-host,${DOMAIN_LOCAL})
	@$(call helper-host,${DOMAIN_BUILD})
	@$(call log-step,[Step 4/5] Create a backup directory)
	@if [ -d ${DIR_BACKUP} ]; then \
  	echo "Skipping, the directory already exists."; \
	else \
		$(call log-process,Creating a backup directory...); \
		mkdir -p ${DIR_BACKUP}; \
		echo ${DIR_BACKUP}; \
		$(call log-complete,Created backup directory successfully.); \
	fi
	@$(call log-step,[Step 5/5] Build the development image)
	@docker-compose build ${SERVICE_APP}
	@$(call log-complete,Built successfully.)
	@$(newline)
	@$(txt-result)
	@$(call log-sum,Git user settings)
	@echo "The following information will be associated with commits you make in this repository:"
	@$(newline)
	@$(helper-git-user)
	@$(newline)
	@$(call log-sum,Images)
	@docker image ls
	@$(newline)
	@$(call log-sum,Host names)
	@cat ${HOST_DNS}
	@$(newline)
	@$(call log-sum,Backup directory)
	@if [ -d ${DIR_BACKUP} ]; then \
		echo ${DIR_BACKUP}; \
	else \
		echo "Opps! the directory did not create properly, please try again."; \
	fi
	@$(newline)
	@$(call log-sum,Summary)
	@echo "You are all set."
	@$(helper-devserver-option)

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
