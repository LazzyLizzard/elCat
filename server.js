// https://stackoverflow.com/questions/5998694/how-to-create-an-https-server-in-node-js/5998795#5998795
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);


// app.listen(port, function (error) {
//     if (error) {
//         console.error(error)
//     } else {
//         console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
//     }
// });


const port = 3003;
const ports = 3443;


// This line is from the Node.js HTTPS documentation.
const options = {
    key: fs.readFileSync('src/__cert__/key.pem'),
    cert: fs.readFileSync('src/__cert__/cert.pem')
};

// Create a service (the app object is just a callback).
const app = express();
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});


// Create an HTTP service.
http.createServer(app).listen(port, (err) => {
    if (err) {
        console.log('----');
        console.error(err);
    } else {
        console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(ports, (err) => {
    if (err) {
        console.log('----');
        console.error(err);
    } else {
        console.info('==> 🌎  Listening on port %s. Open up https://localhost:%s/ in your browser.', ports, ports);
    }
});
