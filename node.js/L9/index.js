const http=require('http');
const { hostname } = require('os');
const port=3000;
const hostName='127.0.0.1';
const server=http.createServer((req,res)=>{
    res.end("wellcome")
})
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})