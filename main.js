const express = require('express');
const socket = require('socket.io')

const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.hostname} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html')
});

app.use('/static', express.static('www/static'));

app.listen(80, console.log('Webserver listening on port 80'));