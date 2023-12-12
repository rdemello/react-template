# React + Vite

This template provides a minimal setup to get React working in Vite with some ESLint rules and a Prettier config. To start, copy template and run `npm install` to setup included packages.

## Included Packages

## Commands

Command  | Script | Output
------------- | ------------- | -------------
dev  | concurrently \"npm run server:dev\" \"npm run client:dev\"  | Runs a dev environment with live changes when saves are detected
client:dev  | vite  | Runs the client react app
server:dev  |  nodemon src/server.cjs  | Runs the server file to handle requests
server:build  | babel --verbose --out-dir dist --only 'src/server.js,src/lib/' src  | Builds the server files
client:build  | vite build | Builds the react app
build  |  npm run server:build && npm run client:build  | Builds the combined package
lint  |  eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0   | 
preview  |  vite preview",   | 
test  |  prettier --check . && eslint .  | Runs a check for prettier and eslint
clean  |  prettier --write .   | Runs prettier across files based on selected formatting



