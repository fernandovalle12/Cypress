var fs = require('fs');

var filePath = 'db/products.json';

var loadFileProducts = function() {
  var fileData = fs.readFileSync(filePath, 'utf8');
  var products = JSON.parse(fileData);

  return products;
}

var saveFileProducts = function(products) {
  var data = JSON.stringify(products);
  fs.writeFileSync(filePath, data, 'utf8');
}

var getProducts = function() {
  var products = loadFileProducts();
  return products;
}

var saveProduct = function(newProduct) {
  var products = loadFileProducts();
  products.push(newProduct);
  saveFileProducts(products);
}

module.exports = {
  getProducts: getProducts,
  saveProduct: saveProduct
}