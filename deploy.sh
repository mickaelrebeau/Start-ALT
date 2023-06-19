#!/usr/bin/env sh
echo > .nojekyll

set -e
yarn build
cd dist

git init
git add -A
git commit -m 'deploy: gh-pages'

git push -f https://https://github.com/mickaelrebeau/Start-ALT.git master:gh-pages

cd -