const express = require('express');
const path = require('path');
const router = require('./lib/router.cjs');

const { PORT = 3002 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve app production bundle
app.use(express.static(path.join(__dirname, '../dist'))).listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`),
);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});


// Handles general requests by redirecting to start of app
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});


