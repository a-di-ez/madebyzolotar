rm -rf .deploy
mkdir .deploy
cp public/index.html .deploy/404.html
cp CNAME .deploy/
cp -r public/. .deploy/

cd .deploy

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:a-di-ez/madebyzolotar.git master:gh-pages

cd ..

rm -rf .deploy
