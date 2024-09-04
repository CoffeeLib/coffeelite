#!/bin/bash

NORMAL="\e[0m"
BLUE="\e[0;34m"
LIME="\e[1;32m"
CYAN="\e[0;36m"
RED="\e[0;31m"
BOLD="\e[1m"

minify_func() {
    echo "${CYAN}Minifying Build...${NORMAL}"
    if uglifyjs build/coffeelite/index.js > build/coffeelite/index.min.js; then
        echo "${CYAN}Build Minified.${NORMAL}"
    else
        echo "${RED}${BOLD}Failed to Minify Build.${NORMAL}"
    fi
}

minify_func