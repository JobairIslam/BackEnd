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

//Creating a post request to store data in the database 
app.post("/goods", async (req, res) => {
    try {
        const product = new Product(req.body);
        const goodData = await product.save();
        res.send({ message: "Product is stored in the database", data: goodData });
    } catch (error) {
        res.status(500).send(error.message);
    }
});



// //GET: /products -> Return all products
// app.get("/products",async(req,res)=>{
//     try {
//         const products=await Product.find();
//         if(!products){  
//             return res.status(404).send({message:"No products found"})
//         }
//         res.status(200).send(products);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// })

//use of Comparison Query Operators
//GET: running a query to get the product by price <1000
app.get("/products", async (req, res) => {
    try {
        const price = req.query.price ? Number(req.query.price) : null;
        let products;
        
        if (price) {
            products = await Product.find({ price: { $eq: price } });
        } else {
            products = await Product.find();
        }

        if (!products || products.length === 0) {
            return res.status(404).send({ message: "No products found" });
        }

        return res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error.message); 
    }
});


//Logical Query Operators
//GET: /products/logical -> Return all products
app.get("/products/logical",async(req,res)=>{
    try {
        const price=req.query.price ? Number(req.query.price) : null;
        let products;
        if(price){
            products=await Product.find({
                $nor:[
                    {price:{$lt:price}}, //price less than 700
                    {inStock:true} //inStock is true
                ]
            });
        }else{
            products=await Product.find();
        }
        
        if(!products){
            return res.status(404).send({message:"No products found"})
        }
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error.message);
    }   
});     


//GET: /products/:id -> Return product by id
app.get("/products/:id",async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id).select({
            name:1,
            price:1,
            inStock:1,
            _id:0
        });
        if(!product){
            return res.status(404).send({message:"Product not found"})
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
})  

app.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`)
    await connectDB();
})