var express = require('express');
var router = express.Router();
var uploader = require('../../middlewares/uploaderMiddleware');

var productsService = require('../../services/productsService');

router.get('/', function (req, res, next) {
  var products = productsService.getProducts();

  var data = {
    products: products
  };

  res.render('admin/products/index', data);
});

router.get('/create', function (req, res, next) {

  res.render('admin/products/create');
});

router.post('/create', uploader.single('image'), function (req, res, next) {
  var products = productsService.getProducts();

  var newId = products.length + 1;

  var newProduct = {};
  newProduct.id = newId;
  newProduct.name = req.body.name;
  newProduct.description = req.body.description;
  newProduct.price = req.body.price;
  newProduct.image = req.file.filename;

  productsService.saveProduct(newProduct);

  res.redirect('/admin/products');
});

module.exports = router;