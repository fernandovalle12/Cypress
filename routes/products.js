var express = require('express');
var router = express.Router();
var productsService = require('../services/productsService');

router.get('/', function (req, res, next) {
  var products = productsService.getProducts();

  var data = {
    title: 'Produtos',
    products: products
  };

  res.render('products', data);
});

module.exports = router;
