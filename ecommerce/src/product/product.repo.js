const { product } = require('../database/models');

const getAllProducts = async (q) => {
    return await product.findAll();
};

const productRepo = {
    getAllProducts
}

module.exports = productRepo;