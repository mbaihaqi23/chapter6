const { Product } = require("../database/models")

//get all product
const getAllProducts = async () => {
    return await Product.findAll()
}

//get one product
const getProduct = async (q) => {
    return await Product.findAll({
        where: {
            name_product: q
        }
    })
}

//add new product
const addProduct = async (p) => {
    return await Product.create({
        name_product: p.name_product,
        description: p.description,
        stok: p.stok,
        available: p.available
    })
}

//edit one product
const updateProduct = async ({id, name_product, description, stok, available}) => {
    return await Product.update(
    {
        name_product,
        description,
        stok,
        available
    },
    {
        where: {
            id: id
        },
        returning: true,
    }
    )
}

//delete one product
const deleteProduct = async (id) => {
    return await Product.destroy({
        where: {
            id: id
        }
    })
}



const productRepo = {
    getAllProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}

module.exports = productRepo
