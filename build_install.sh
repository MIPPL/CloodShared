#!/bin/bash

npm run format
npm run lint
npm run build

# git add all changes
git add .
# commit changes with message that takes the version from package.json
git commit -m "build: release version $(node -p -e "require('./package.json').version")"
# push changes to the repository
git push origin main
# create a new tag with the version from package.json
git tag -a $(node -p -e "require('./package.json').version") -m "release version $(node -p -e "require('./package.json').version")"
# push the tag to the repository
git push origin $(node -p -e "require('./package.json').version")

# install in frontend and backend
cd ../CloodFrontend
npm install git+https://github.com/MIPPL/CloodShared.git
cd ../CloodBackend
npm install npm install git+https://github.com/MIPPL/CloodShared.git

