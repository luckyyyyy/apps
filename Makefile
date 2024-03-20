.DEFAULT_GOAL := help
SEMVER3 := $(shell grep -o '"version": *"[^"]*"' package.json | cut -d '"' -f 4)

define ANNOUNCE_BODY
 Welcome to Apps Makefile!

     ___      .______   .______     _______.
    /   \     |   _  \  |   _  \   /       |
   /  ^  \    |  |_)  | |  |_)  | |   (----`
  /  /_\  \   |   ___/  |   ___/   \   \\
 /  _____  \  |  |      |  |   .----)   |
/__/     \__\ | _|      | _|   |_______/

Apps Makefile $(SEMVER3)
================================================================

endef
export ANNOUNCE_BODY

.PHONY: clean
clean: ## Clean the project
	@read -p "Are you sure to clean and delete? (Y/n) " ANSWER;\
	ANSWER=$${ANSWER:-yes};\
	if [ "$$ANSWER" = "yes" ] || [ "$$ANSWER" = "Y" ]; then git clean -fxd; fi

.PHONY: init
init: ## Initialize the project
	cp apps/web/.env.local.example apps/web/.env.local
	cp apps/server/.env.example apps/server/.env

.PHONY: install
install: ## Install the package
	pnpm install

.PHONY: build
build: install test ## Build the package
	pnpm build

.PHONY: help
help:
	@echo "$$ANNOUNCE_BODY"
	@echo ' ';
	@grep -E '^[0-9a-zA-Z-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}';
	@echo '  '
	@read -p "What do you want?>> " command; \
	make $$command;