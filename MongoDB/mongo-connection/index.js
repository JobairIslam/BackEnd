const express=require("express");
const mongoose = require('mongoose');
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port=3002;

//create product schema
const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
})
//create product model
const Product= mongoose.model("Product",productSchema);



//connecting to the database
const connectDB= async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myNewDB');
        console.log("db is connected");
    } catch (error) {
        console.log("db is not connected")
        console.log(error.message)
        process.exit(1)
    }
}












app.get("/",(req,res)=>{
    res.send("wellcome to home page")
})

//creating a post request to store data in the database 
app.post("/goods", async (req, res) => {
    try {
        const product = new Product(req.body);
        const goodData = await product.save();
        res.send({ message: "Product is stored in the database", data: goodData });
    } catch (error) {
        res.status(500).send(error.message);
    }
});




app.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`)
    await connectDB();
})