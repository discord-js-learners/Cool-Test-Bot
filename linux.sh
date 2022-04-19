#!bin/bash

echo "installing git to clone the repo"
sudo apt-get install git


git clone  https://github.com/discord-js-learners/Cool-Test-Bot
echo "installing discord.js"
npm install discord.js
echo "Done or if any thing failed that means you don't have node.js installed please install it"