const express = require("express");

const productControl = require("../controllers/product");

const router = express.Router();

router.delete("/products/delete", productControl.deleteDeleteProduct);

router.post("/edit-product/:productId", productControl.postEditProduct);

router.get("/edit-product/:productId", productControl.getEditProduct);

router.post("/add-product", productControl.postAddProduct);

router.get("/products", productControl.getAdminProduct);

module.exports = router;
