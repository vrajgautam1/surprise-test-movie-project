const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const upload = require("../middlewares/multerMiddleWare.js");

//-1 dashboard routes
router.get("/dashboard", adminController.openDashboardPage);

//-2 addmovie routes
router.get("/addMovie", adminController.addMoviePage);
router.post("/addMovie", upload, adminController.submitMoviePage);

//-3 editmovie routes
router.get("/editMovie", upload, adminController.editMoviePage);

module.exports = router;