//const productRouter = require("./product.route")
const { repoGetAllProducts } = require('./product.repo');

const getAllProducts = async() => {
    return await repoGetAllProducts();
};

module.exports = {
    getAllProducts,
};