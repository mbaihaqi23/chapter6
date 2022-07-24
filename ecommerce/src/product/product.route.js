const express = require('express');
const productController = require('./product.controller');
const productRouter = express.Router();

//GET all products
productRouter.get("/product", productController.getAllProducts)

//GET product
productRouter.get("/product", productController.getProduct)

//POST (add new product)
productRouter.post("/product", productController.addProduct)

//POST (update one product)
productRouter.post("/product/:id", productController.updateProduct)

//DELETE (delete one product)
productRouter.delete("/product/:id", productController.deleteProduct)

module.exports = productRouter
