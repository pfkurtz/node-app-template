#!/usr/bin/env bash

export NODE_ENV=production

# clear our build directory
rm -rf build
mkdir build
mkdir build/public

# compile production html
vulcanize --exclude /*.js src/client/index.prod.html > build/public/index.html

# compile production client js
node node_modules/browserify/bin/cmd src/client/index.js -o build/public/index.js
node node_modules/uglify-js/bin/uglifyjs -cm -o build/public/index.js -- build/public/index.js

# compile server files
node node_modules/babel-cli/bin/babel src/actions -d build/actions
node node_modules/babel-cli/bin/babel src/constants -d build/constants
node node_modules/babel-cli/bin/babel src/data -d build/data
node node_modules/babel-cli/bin/babel src/expectations -d build/expectations
node node_modules/babel-cli/bin/babel src/rethink -d build/rethink
node node_modules/babel-cli/bin/babel src/server -d build/server
node node_modules/babel-cli/bin/babel src/utils -d build/utils

# copy additional assets
cp src/public/socketcluster.min.js build/public/
cp package.json build/
