#!/bin/bash

NORMAL="\e[0m"
BLUE="\e[0;34m"
LIME="\e[1;32m"
CYAN="\e[0;36m"
RED="\e[0;31m"
BOLD="\e[1m"

echo "${BLUE}${BOLD}Building Library...${NORMAL}"

fail_func() {
    echo "${RED}${BOLD}Build Unsuccessful.${NORMAL} Read output log for more info."
    exit
}

success_func() {
    echo "${LIME}${BOLD}Build Succeeded!${NORMAL} Output located in ${CYAN}build/coffeelite${NORMAL}."
    exit
}

sign_func() {
    echo "${CYAN}Signing...${NORMAL}"
    if echo "\n//Devpz :)" >> ./build/coffeelite/index.js; then
        echo "${CYAN}Build Signed.${NORMAL}"
        success_func
    else
        echo "${RED}${BOLD}Signing Failed!${NORMAL}"
        fail_func
    fi
}

compile_func() {
    if ! tsc ./src/coffeelite/*.ts -outFile ./build/coffeelite/index.js; then
        echo "Build Failed!${NORMAL}"
        fail_func
    else
        echo "${CYAN}Library Compiled.${NORMAL}"
        sign_func
    fi
}

compile_func