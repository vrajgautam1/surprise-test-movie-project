const express = require("express");
const serverless = require("serverless-http"); // 👈 Required for Vercel
const db = require("../configs/dbconnection");  // 👈 Adjust path
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views")); // 👈 Correct view path
app.use(express.static(path.join(__dirname, "../public"))); // 👈 Fix static path
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads"))); // 👈 Fix path

const mainRouter = require("../routers/index");
app.use(mainRouter);

// Connect to MongoDB (with error handling)
db()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Export app for Vercel
module.exports = serverless(app);  // 👈 Use serverless-http wrapper
