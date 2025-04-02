const express = require("express");
const app = express()
const db = require("./configs/dbconnection")
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const multer  = require('multer')

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const mainRouter = require("./routers/index")
app.use(mainRouter)

app.listen(3000 || process.env.PORT, (err)=>{
    if(!err){
        db()
        console.log("server is live");
        console.log("http://localhost:"+3000)
    }
})