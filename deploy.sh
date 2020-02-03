rm -rf .deploy
mkdir .deploy
mv dist/* .deploy/

cd .deploy

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:magpaylabs/dashboard.university.git master:gh-pages-pro

cd ..

rm -rf dist
rm -rf .deploy
