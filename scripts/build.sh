export NODE_ENV=production

rm -rf build
mkdir build
mkdir build/public

vulcanize --exclude /*.js client/index.prod.html > build/public/index.html

browserify client/index.js -o build/public/index.js

cp public/socketcluster.min.js build/public/
cp package.json .babelrc build/
cp -r common/ server/ build/
