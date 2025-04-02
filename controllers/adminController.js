const movieModel = require("../models/movieModel");

module.exports.openDashboardPage = async(req, res)=>{
    try{
        const movie = await movieModel.find({});
        console.log(movie);
        return res.render("admin/dashboard.ejs", {movie});
    }catch(err){
        console.log(err.message);
    }
}

module.exports.addMoviePage = (req, res)=>{
    return res.render("admin/addMovie.ejs");
}

module.exports.submitMoviePage = async(req, res)=>{
    try{
        await movieModel.create({...req.body, image: req.file.filename});
        console.log("Movie added successfully");
        return res.redirect("/admin/dashboard");
    }catch(err){
        console.log(err.message);
    }
}

module.exports.editMoviePage = (req, res)=>{
    return res.render("admin/editMovie.ejs");
}

