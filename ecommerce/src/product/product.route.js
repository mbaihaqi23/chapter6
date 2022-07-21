const  express = require('express');
const { getAllProducts } = require('./product.service');
const  productRouter = express.Router();

//API get all product
productRouter.get('/products', async (req, res) =>{
    const products = getAllProducts();
    res.json(products);
});

module.exports = productRouter;