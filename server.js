/*process.on('uncaughtException', function (err) {
    console.error("[ERROR WHILE RUNNING] - "+err);
    console.log("[SERVER IS STILL WORKING ...]");
});
console.clear(); */

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(Number(port));