const Product = require("../models/product");
const Cart = require("../models/cart.js");

exports.postDeleteCart = (req, res) => {
  const id = req.body.id;
  Product.findProductById(id, (product) => {
    console.log(product);
    Cart.delete(id, product.price);
    res.send("deleted cart");
  });
};

exports.deleteDeleteProduct = (req, res) => {
  const id = req.body;
  Product.delete(id);
  res.send("deleted product");
};

exports.getEditProduct = (req, res) => {
  const id = req.params.productId;
  Product.findProductById(id, (product) => {
    res.send(product);
  });
};

exports.postEditProduct = (req, res) => {
  const id = req.params.productId;
  Product.edit(id, req.body);
  res.send("edited");
};

exports.getAdminProduct = (req, res) => {
  Product.fetchAll((products) => {
    res.send(products);
  });
};

exports.postAddProduct = (req, res) => {
  const products = new Product(req.body);
  products.save();

  res.send("connected");
};

exports.getShopProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.send({ products: products });
  });
};

exports.getDetailProduct = (req, res) => {
  const id = req.params.productId;
  Product.findProductById(id, (product) => {
    res.send({ product: product });
  });
};

exports.postCartProduct = (req, res) => {
  const productId = req.body.productId;
  Product.findProductById(productId, (product) => {
    Cart.addToCart(productId, product.price, product.title);
  });
  res.send("add to cart");
};

exports.getCartProduct = (req, res) => {
  Cart.fetchCart((cart) => {
    res.send([cart]);
  });
};
