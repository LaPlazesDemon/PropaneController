const express = require('express');
const { createServer } = require("node:http")
const { Server } = require('socket.io');
const { spawn } = require('child_process');

const app = express();
const server = createServer(app);
const io = new Server(server)


// Setup static page distribution (CSS, JS)
app.use('/static', express.static('www/static'));

// Log access requests
app.use((req, res, next) => {console.log(`${req.method} ${req.hostname} ${req.url}`);next();});

// Landing Page
app.get('/', (req, res) => {res.sendFile(__dirname + '/www/index.html')});

// REST APIs to handle communication from the python server
// Fuel Valve Status Reciever [1 is open, 0 is closed]
app.get('/rest/fuelValveStatus', (req, res) => {
    const state = req.query.state;
    io.emit('fuelValveStatus', state)
    res.status(200).send();
});

// Start Web Server
server.listen(80, console.log('Webserver listening on port 80'));

//////////////////////
// PYTHON PROCESSES //
//////////////////////

// Spawn the Python child process
const PyWatchdog = spawn('python', ["GPIOWatchdog.py"], {
    detached: true,
    stdio: 'ignore'
});

const PyRestServer = spawn('uvicorn', ['RESTServer:app --host=0.0.0.0'], {
    detached: true,
    stdio: 'ignore'
});

// Detach the child process
PyWatchdog.unref();
PyRestServer.unref();
console.log('Py REST Server Started');
console.log('GPIO Watchdog Started.');

// Listen for process exit
process.on('exit', () => {
    console.log('Exiting Node.js process. Terminating Python child processes.');
    PyWatchdog.kill();
    PyRestServer.kill();
});
