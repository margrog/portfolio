echo "deploying..."
set -e
GITURL=`git config remote.origin.url`
npm install

ENV_PROD=true metalsmith
cd build
# temporarily unignore /build? seems not needed
# to ignore at it all with this script :)
#sed -i '' 's/#\/build/\/build/g' .gitignore
rm -rf .git/
git init
git remote add origin $GITURL
git add .
git commit -am "deploy"
git push origin master:gh-pages --force
echo "done"
