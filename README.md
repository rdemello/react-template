# React + Vite

This template provides a minimal setup to get React working in Vite with some ESLint rules and a Prettier config. To start, copy template and run `npm install` to setup included packages.

## Included Packages
+ Express - to handle the server
+ nodemon - to run the server file with live changes
+ prettier - used to format and clean up code for consistency and legibility
+ react - as it's react
+ react-router-dom - to handle nagivation
+ zustand - to handle state around the app
+ vite - for speed over webpack

## Commands

Command  | Script | Output
------------- | ------------- | -------------
dev  | concurrently \"npm run server:dev\" \"npm run client:dev\"  | Runs a dev environment with live changes when saves are detected
client:dev  | vite  | Runs the client react app
server:dev  |  nodemon src/server.cjs  | Runs the server file to handle requests
server:build  | babel --verbose --out-dir dist --only 'src/server.js,src/lib/' src  | Builds the server files
client:build  | vite build | Builds the react app
build  |  npm run server:build && npm run client:build  | Builds the combined package
preview  |  vite preview  | Runs the built app from the dist folder
test  |  prettier --check . && eslint .  | Runs a check for prettier and eslint
clean  |  prettier --write .   | Runs prettier across files based on selected formatting



