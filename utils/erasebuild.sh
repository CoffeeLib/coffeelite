#!/bin/bash

NORMAL="\e[0m"
BLUE="\e[0;34m"
LIME="\e[1;32m"
CYAN="\e[0;36m"
RED="\e[0;31m"
BOLD="\e[1m"

erase_func() {
    echo "${RED}${BOLD}Erasing Library Builds...${NORMAL}"
    if rm build/coffeelite/*; then
        echo "Builds Erased.${NORMAL}"
    else
        echo "${RED}${BOLD}Error Erasing Builds."
    fi
}

erase_func