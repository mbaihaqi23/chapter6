const productRepo = require('./product.repo');

const getAllProducts = async() => {
    return await productRepo.getAllProducts();
};

const productService = {
    getAllProducts
};

module.exports = productService;