require("dotenv").config()

const mongoose = require("mongoose")

const mongoUrl = process.env.MONGO_URL 

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Connected to the database successfully")
        console.log("Connection URL:", mongoUrl)
    })
    .catch((err) => {
        console.log("Database connection error:", err)
        process.exit(1)
    })

