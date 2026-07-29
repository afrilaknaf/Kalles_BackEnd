const express = require("express")

const router = express.Router()

const {createproducts,getproducts,quickview} = require("../controllers/products.controllers")

router.post("/create",createproducts)

router.get("/get",getproducts)

router.get("/quick/:id",quickview)

module.exports=router


