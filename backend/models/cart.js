const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addToCart(id, productPrice, productTitle) {
    fs.readFile(p, (err, data) => {
      // step 1
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(data);
      }
      // step 2 ->kiem tra trong mang co trung id ko?
      const existIndex = cart.products.findIndex((prod) => +prod.id === +id);
      const productExist = cart.products[existIndex];

      let updatedProduct;

      if (productExist) {
        // Neu trong gio hang CO san pham trung id
        productExist.qty = productExist.qty + 1;
        updatedProduct = {
          ...cart.products[existIndex],
          qty: productExist.qty,
        };
        cart.products[existIndex] = updatedProduct;

        cart.totalPrice = cart.totalPrice + +productPrice;
      } else {
        // Neu trong gio hang KHONG co san pham trung id
        cart.products = [
          ...cart.products,
          { id, qty: 1, title: productTitle, price: productPrice },
        ];
        cart.totalPrice = cart.totalPrice + +productPrice;
      }

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static delete(id, productPrice) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "cart.json"
    );

    fs.readFile(p, (err, data) => {
      let cart;
      if (!err) {
        cart = JSON.parse(data);
      }

      const existIndex = cart.products.findIndex((p) => +p.id === +id);

      cart.products.splice(existIndex, 1);
      cart.totalPrice = cart.totalPrice - productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static fetchCart(cb) {
    fs.readFile(p, (err, data) => {
      if (err) {
        return cb([]);
      }
      cb(JSON.parse(data));
    });
  }
};
