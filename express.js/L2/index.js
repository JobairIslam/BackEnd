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
app.get("/asif", (req, res) => {
    // Method 1: Using headers
    const id = req.header('id');
    const age = req.header('age');
    
    // OR Method 2: Using query parameters
    // const {id, age} = req.query;
    
    res.send(`
        <h1>Student id is: ${id}</h1>
        <h1>Student name is: ${age}</h1>
    `);
});
//request with header parameter

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})