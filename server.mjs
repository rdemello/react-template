// const express = require("express");
// const path = require("path");
// const router = require("./lib/router.mjs");
// const cors = require('cors')

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import { router } from './lib/router.mjs'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


const { PORT = 3002 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());
app.use(cors({ 
  origin: "http://localhost:5173", 
  credentials: true 
}));

// Serve API requests from the router
app.use("/api", router);

// Serve app production bundle
app.use(express.static(path.join(__dirname, '/dist'))).listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`),
);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Handles general requests by redirecting to start of app
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});