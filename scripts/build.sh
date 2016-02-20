export NODE_ENV=production

# clear our build directory
rm -rf build
mkdir build
mkdir build/public

# compile production html
vulcanize --exclude /*.js src/client/index.prod.html > build/public/index.html

# compile production client js
browserify src/client/index.js -o build/public/index.js
uglifyjs -c -m -o build/public/index.js -- build/public/index.js

# compile server files
babel src/common -d build/common
babel src/server -d build/server

# copy additional assets
cp public/socketcluster.min.js build/public/
cp package.json build/
