const express=require('express')
const app=express()
const port=3001
//request with query parameter
app.get("/",(req,res)=>{
    const {id, name} = req.query;
    res.send(`
        <h1>Student id is: ${id}</h1>
        <h1>Student name is: ${name}</h1>
    `);
})
//request with query parameter


//request with route parameter
app.get("/jubair/:id/:age",(req,res)=>{
    const {id,age}=req.params;
    res.send(`
        <h1>Student id is: ${id}</h1>
        <h1>Student name is: ${age}</h1>
    `);
})
//request with route parameter


//request with header parameter
app.get("/asif",(req,res)=>{
    const {id,age}=req.header;
    res.send(`
        <h1>Student id is: ${id}</h1>
        <h1>Student name is: ${age}</h1>
    `);
})
//request with header parameter

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})