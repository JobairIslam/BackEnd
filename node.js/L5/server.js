//server creat
const http = require("http");
const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => { // Corrected 'rep' to 'req'
    res.end("<h1>hello, I am your first server</h1>");
});

myServer.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
