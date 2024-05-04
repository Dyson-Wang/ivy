#!/bin/bash
npm i
hugo
sudo rm -rf /usr/share/nginx/html
sudo mv public /usr/share/nginx/html
sudo rm -rf resources