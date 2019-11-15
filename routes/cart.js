var express = require('express');
var router = express.Router();

var productsService = require('../services/productsService');

router.get('/', function (req, res, next) {
  var products = productsService.getProducts();

  var cartProducts = [];

  var cartProductsIds = req.cookies['cartProductsIds'];

  console.log(cartProductsIds);

  if(cartProductsIds) {
    for(var i = 0;i < cartProductsIds.length; i++) {
      var cartProductId = cartProductsIds[i];
      var cartProduct = products.find((product) => product.id == cartProductId);
      cartProducts.push(cartProduct);
    }
  }

  var totalSum = 0;

  for(var i = 0; i < cartProducts.length; i++) {
    var product = cartProducts[i];
    totalSum += Number(product.price);
  }

  var data = {
    title: 'Carrinho de Compras',
    products: cartProducts,
    totalSum: totalSum
  };

  res.render('cart', data);
});

router.get('/clear', function (req, res, next) {
  res.cookie('cartProductsIds', [], { maxAge: 900000, httpOnly: true });
  res.redirect('/cart');
});

router.get('/:productId', function (req, res, next) {
  var cartProductsIds = req.cookies['cartProductsIds'];

  if(!cartProductsIds) {
    cartProductsIds = [];
  }

  var newCartProductId = req.params.productId;
  cartProductsIds.push(newCartProductId);
  res.cookie('cartProductsIds', cartProductsIds, { maxAge: 900000, httpOnly: true });
  res.redirect('/products');
});

module.exports = router;
