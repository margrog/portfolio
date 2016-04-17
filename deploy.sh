# IMPORTANT before running this deploy script
# Disable the serve and watch plugins. They’ll
# prevent this script from continuing past
# the metalsmith command. TODO
echo "deploying..."
set -e
GITURL=`git config remote.origin.url`
# Ensure we have all required packeges.
npm install

# Temp disable watcher (KEEP metalsmith-serve and watch at bottom of metalsmith.json!!)
perl -i -0pe 's/,
    "metalsmith-serve": {
      "port": 8888
    },
    "metalsmith-watch": {
      "livereload": true
    }//' metalsmith.json

# Build project with production flag set to true (mainly to skip livereload script)
ENV_PROD=true metalsmith

# Re-enable watcher
perl -i -0pe 's/}
  }
}/},
    "metalsmith-serve": {
      "port": 8888
    },
    "metalsmith-watch": {
      "livereload": true
    }
  }
}/' metalsmith.json

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
