# React + Vite

This template provides a minimal setup to get React working in Vite with some ESLint rules.


## Commands

Command  | Script | Output
------------- | ------------- | -------------
Content Cell  | Content Cell  | asd
Content Cell  | Content Cell  | asd

"dev": "concurrently \"npm run server:dev\" \"npm run client:dev\"",
"client:dev": "vite",
"server:dev": "nodemon src/server.cjs",
"server:build": "babel --verbose --out-dir dist --only 'src/server.js,src/lib/' src",
"client:build": "vite build",
"build": "npm run server:build && npm run client:build",
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview",
"test": "prettier --check . && eslint .",
"clean": "prettier --write ."



