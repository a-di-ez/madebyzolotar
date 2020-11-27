#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'madebyzolotar.pp.ua' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:a-di-ez/madebyzolotar.git master:gh-pages

cd -
