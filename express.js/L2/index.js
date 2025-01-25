const express=require('express')
const app=express()
const port=3001
//request with route parameter
app.get("/",(req,res)=>{
    const {id, name} = req.query;
    res.send(`
        <h1>Student id is: ${id}</h1>
        <h1>Student name is: ${name}</h1>
    `);
})
//request with route parameter
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})