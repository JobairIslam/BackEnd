const http = require ('http');
const fs = require ('fs');
const port = 3000;
const hostname = '127.0.0.1';



const server = http.createServer((req,res)=>{

    const handleReadFile = (stutas,file)=>{
        fs.readFile(file,(err,data)=>{
            res.writeHead(stutas,{"content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }


    if(req.url==="/"){
        // fs.readFile("index.html",(err,data)=>{
        //     res.writeHead(200,{"content-Type":"text/html"});
        //     res.write(data);
        //     res.end();
        // })
        handleReadFile(200,"index.html")
    }
    else if(req.url==="/about"){
        handleReadFile(200,"about.html")
    }
    else if(req.url==="/contact"){
        handleReadFile(200,"contact.html")
    }
    else{
        handleReadFile(404,"error.html")
    }
});

server.listen(port,hostname,()=>{
    console.log(`server is unning at http://${hostname}:${port}`)
})

 