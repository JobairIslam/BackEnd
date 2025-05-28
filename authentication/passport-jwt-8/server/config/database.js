const  mongoose = require("mongoose")

require("dotenv").config()



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB is connected");
    
})
.catch((err)=>{
    console.log(err.message)
    process.exit(1)
})
