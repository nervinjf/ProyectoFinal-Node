const { ProductServices } = require('../services');

const productRegister = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductServices.register(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Fantan Datos"
        })
    }
}

const getAllproducts = async (req, res, next) => {
    try {
        const result = await ProductServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo Salio mal"
        })
    }
}

module.exports = {
    productRegister,
    getAllproducts
}