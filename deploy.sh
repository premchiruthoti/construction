#!/bin/bash

export NVM_DIR=$HOME/.nvm;
. $NVM_DIR/nvm.sh;

cd /home/ubuntu/construction
git pull origin main
nvm use v20
npm install &&
npm run build &&
pm2 restart construction
