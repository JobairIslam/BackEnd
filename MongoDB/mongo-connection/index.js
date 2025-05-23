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
        required: [true,"name is required"],
        // minlength:[3,"name must be at least 3 characters long"],
        // maxlength:[30,"name must be less than 30 characters long"],
         trim:true,   
        //custom validation
        validate:{
            validator: function(v) {
                return v.length > 3 && v.length < 30;
            },
            message: (props) => `${props.value} must be between 3 and 30 characters long`,
        }  
    },
    phoneNumber:{
        type:String,
        required:[true,"phone number is required"],
        validate:{
            validator:function(v){
                //use 0-9 and + and - and space and it will be 15 digits maximum               
                return /^[0-9+-\s]{17}$/.test(v);
            },
            message:"invalid phone number", 
        }
    },
    price: {
        type: Number,
        required: [true,"price is required"],
        min:[0,"price must be at least 0"],
        max:[10000,"price must be less than 1000"],
        validate:{
            validator:Number.isInteger,
            message:"price must be an integer",
        },      
        trim:true, 
    },
    inStock: {
        type: Boolean,
        required: [true,"inStock is required"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    // email:{
    //     type:String,
    //     required:[true,"email is required"],
    //     validate:{
    //         validator:function(v){
    //             return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
    //         },
    //         message:"invalid email address",
    //     },
    //     trim:true, 
    //     unique:true,    
    //     lowercase:true,
    //     match:[/^\S+@\S+\.\S+$/,"invalid email address"],   
    //     index:true,
    //     sparse:true,
    //     select:false,
    //     alias:"email",
    //     aliasField:"email",
    //     aliasQuery:"email",
    //     aliasProjection:"email",
    //     aliasSort:"email",
    //     aliasAggregate:"email",
    //     aliasPopulate:"email",
    // }
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
app.get("/products",async(req,res)=>{
    try {
        const products=await Product.find();
        if(!products){  
            return res.status(404).send({message:"No products found"})
        }
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


//count the number of products      
app.get("/products/count",async(req,res)=>{
    try{
        const products=await Product.find().countDocuments();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error.message);
    }

})

//sorting the products on the basis of price
app.get("/products/sort", async(req,res)=>{
    try{
        const products = await Product.find().sort({ price: 1 }).select({
            name: 1,
            price: 1,
            inStock: 1,
            _id: 0
        });
        if(!products){
            return res.status(404).send({message:"No products found"})
        }
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

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

//use of Comparison Query Operators
//GET: running a query to get the product by price <1000
app.get("/products/query", async (req, res) => {
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

//how to delete the data from the database
app.delete("/products/:id",async(req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id);
        const remaingProducts=await Product.find();
        if(!product){
            return res.status(404).send("product not found");
        }
        res.status(200).send({
            message:"product deleted successfully",product,
            remainingProducts:remaingProducts
        });
        
    }catch(error){
        res.status(500).send(error.message); 
    }
})

//how to update a document in the database
app.put("/products/:id",async(req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!product){
            return res.status(404).send("product not found");
        }
        const products=await Product.find();     
        res.status(200).send({
            message:"product updated successfully",product,
            products:products
        })          
    }catch(error){
        res.status(500).send(error.message);  
    }
})
 

app.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`)
    await connectDB();
})