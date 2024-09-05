#!/bin/bash

NORMAL="\e[0m"
BLUE="\e[0;34m"
LIME="\e[1;32m"
CYAN="\e[0;36m"
RED="\e[0;31m"
BOLD="\e[1m"

prompt_func() {
    while true; do
        echo "Creating a new project will ${RED}${BOLD}erase the previous project${NORMAL}. Are you sure you want to do this?"
        read -p "" yn
        case $yn in
            [Yy]* ) new_project_func;;
            [Nn]* ) exit;;
            * ) echo "Please answer yes or no.";;
        esac
    done
}

new_project_func() {
    html_func
    js_func
    css_func
    echo "${CYAN}Done.${NORMAL}"
    exit
}

html_func() {
    echo "Creating index.html..."
    rm index.html
    echo "<!DOCTYPE html>" >> "index.html"
    echo "<html lang="en">" >> "index.html"
    echo "    <head>" >> "index.html"
    echo "        <meta charset="UTF-8" />" >> "index.html"
    echo "        <meta name="viewport" content="width=device-width, initial-scale=1.0" />" >> "index.html"
    echo "        <title>Coffee Project</title>" >> "index.html"
    echo "        <link href="style.min.css" rel="stylesheet">" >> "index.html"
    echo "        <link rel="icon", type="image/x-icon" href="favicon.png">" >> "index.html"
    echo "    </head>" >> "index.html"
    echo "    <body></body>" >> "index.html"
    echo "    <script src="build/coffeelite/index.min.js"></script>" >> "index.html"
    echo "    <script src="main.js"></script>" >> "index.html"
    echo "</html>" >> "index.html"
}

js_func() {
    echo "Creating main.js..."
    rm main.js
    echo "var game = new CoffeeBrew(256, 192);" >> "main.js"
    echo "" >> "main.js"
    echo "const FPS = 60;" >> "main.js"
    echo "" >> "main.js"
    echo "function loop() {}" >> "main.js"
    echo "" >> "main.js"
    echo "setInterval(loop, 1000/FPS);" >> "main.js"
}

css_func() {
    echo "Creating style.css..."
    rm style.css
    echo "body {" >> "style.css"
    echo "background-color: #202020;" >> "style.css"
    echo "}" >> "style.css"
}

prompt_func