const express = require("express");

const path = require('path');

//const rootDir= require('../util/path');

const router = express.Router();

const products=[];

router.get("/add-product", (req, res, next) => { //---->/admin/add-product     then we omit the /admin
    // res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
    res.sendFile(path.join(__dirname,'..', 'views', 'add-product.html'));
    // res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  // use--->it executes for both POST & GET request or method.
  products.push({title: req.body.title});
  res.redirect("/");
});

//module.exports = router;
exports.routes=router;
exports.products= products;