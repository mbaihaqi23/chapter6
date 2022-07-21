const  express = require('express');
const productService = require('./product.service');
const productRouter = express.Router();

//API get all product
productRouter.get('/products', async (req, res) =>{
    const products = await productService.getAllProducts;
    res.json(products);
});

module.exports = productRouter;