const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const fs = require('fs')


const server = http.createServer((req,res)=>{

    const handleReadFile= (file,status)=>{
        fs.readFile(file,(err,data)=>{
            res.writeHead(status,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }

    if(req.url==='/'){
        handleReadFile("index.html",200)
    } 
    else if(req.url==='/about'){
        handleReadFile("about.html",200)
    } 
    else if(req.url==='/contact'){
        handleReadFile("contact.html",200)
    }
     else {
        handleReadFile("error.html",404)
    }
})

server.listen(port, hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
})