const { product } = require('../database/models');

const repoGetAllProducts = async() => {
    return await product.findAll();
};

module.exports = {
    repoGetAllproducts,
};