const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(prods) {
    this.products = prods;
  }

  static delete(id) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, data) => {
      let products;

      if (!err) {
        products = JSON.parse(data);
      }

      const existIndex = products.findIndex((p) => +p.id === +id.id);

      products.splice(existIndex, 1);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, fileContent) => {
      let updatedProduct;
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }

      products.push(this.products);

      // fs.writeFileSync(p, JSON.stringify(products));
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static edit(id, editProduct) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    let products;
    let updatedProduct;
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        products = JSON.parse(fileContent);
      }

      const existIndex = products.findIndex((prod) => +prod.id === +id);

      updatedProduct = { ...editProduct, id };

      products[existIndex] = updatedProduct;

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }

  static findProductById(id, cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb([]);
      }
      const products = JSON.parse(fileContent);
      const prodId = products.find((p) => +p.id === +id);
      cb(prodId);
    });
  }
};
