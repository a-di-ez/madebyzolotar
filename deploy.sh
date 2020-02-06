rm -rf .deploy
mkdir .deploy
cp CNAME .deploy/
cp -r docs/.vuepress/dist/. .deploy/

cd .deploy

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:a-di-ez/madebyzolotar.git master:gh-pages

cd ..

rm -rf .deploy
rm -rf docs/.vuepress/dist
