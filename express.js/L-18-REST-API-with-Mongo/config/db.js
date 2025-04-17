const mongoose=require("mongoose");
const config=require("./config");

const dbUrl=config.db.url;

const dbConnect=async()=>{
    try{
        await mongoose.connect(dbUrl);
        console.log("connected to database successfully");
    }catch(error){
        console.log("error connecting to database");
        process.exit(1);
    }
}

module.exports=dbConnect;

