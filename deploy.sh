echo "deploying..."
set -e
GITURL=`git config remote.origin.url`
npm install
ENV_PROD=true metalsmith
cd build
rm -rf .git/
git init
git remote add origin $GITURL
echo $GITURL
git add .
git commit -am "deploy"
git push origin master:gh-pages --force
echo "deployed"
