const productService = require("./product.service")

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts()
    res.json(products)
}

const getProduct = async (req, res) => {
    const {q} = req.query
    const product = await productService.getProduct(q)
    console.log(req.query.q)
    res.json(product)
}

const addProduct = async (req, res) =>  {
    const productAttributes = {
        name_product: req.body.name_product,
        description: req.body.description,
        stok: req.body.stok,
        available: req.body.available,
    }
    const isExist = await productService.getProduct(productAttributes.name_product)
    if(!isExist) {
        const newProduct = await productService.addProduct(productAttributes)
        console.log(newProduct.name_product)
        res.json(newProduct)
    } else {
        res.json('product is already exist')
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name_product, description, stok, available } = req.body
    const updateProduct = await productService.updateProduct({id, name_product, description, stok, available})
    console.log(id, name_product)
    res.json(updateProduct)
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    const deleteProduct = await productService.deleteProduct(id)
    res.json({
        id: id,
        status: "deleted"
    })
}

const productController = {
    getAllProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}

module.exports = productController
