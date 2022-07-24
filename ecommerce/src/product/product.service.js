const productRepo = require("./product.repo")

//get all products
const getAllProducts = async () => {
    return await productRepo.getAllProducts()
}

//get one product
const getProduct = async (q) => {
    return await productRepo.getProduct(q)
}

//add new product
const addProduct = async (p) => {
    return await productRepo.addProduct(p)
}

//edit one product
const updateProduct = async ({id, name_product, description, stok, available}) => {
    return await productRepo.updateProduct({id, name_product, description, stok, available})
}

//delete one product
const deleteProduct = async (id) => {
    return await productRepo.deleteProduct(id)
}

const productService = {
    getAllProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}

module.exports = productService
