const mongoose = require("mongoose");

require("dotenv").config()
const dbUrl = process.env.DB_URL;

const db = async()=>{
    try{
        await mongoose.connect(dbUrl)
        console.log("database connected successfully");
    }catch(err){
        console.log("database connection failed");
    }
}

module.exports = db