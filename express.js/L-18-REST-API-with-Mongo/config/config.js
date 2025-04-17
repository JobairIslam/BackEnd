require("dotenv").config();

const config={
    app:{
        port:process.env.PORT || 8080,

    },
    db:{
        url:process.env.DB_URL || "mongodb://localhost:27017/userDemoDB",
    }
}

module.exports=config;
