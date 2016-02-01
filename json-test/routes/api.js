// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product.js');

// Routes (using node-resful)
Product.methods(['get', 'put', 'post', 'delete']);
// To get the products list, go to localhost
Product.register(router, '/products');


// Return router
module.exports = router;