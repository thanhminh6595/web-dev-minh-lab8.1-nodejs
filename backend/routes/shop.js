const express = require("express");

const dataShop = require("../controllers/product");

const router = express.Router();

router.get("/", dataShop.getShopProducts);

router.get("/products/:productId", dataShop.getDetailProduct);

router.get("/cart", dataShop.getCartProduct);

router.post("/cart", dataShop.postCartProduct);

router.post("/cart-delete", dataShop.postDeleteCart);

module.exports = router;
