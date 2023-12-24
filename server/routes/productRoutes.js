const express = require("express");

const { getAllProduct } =require("../controllers/productController");
 
const router = express.Router();

const protect=require("../config/protect")

  
router.route("/all-products").get(getAllProduct);
 

 
module.exports=  router ;