const { ProductInCartServices } = require('../services');

const registerProductCart = async (req, res, next) => {
    try {
        const newProducInCart = req.body;
        const result = await ProductInCartServices.register(newProducInCart);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos"
        })
    }
}

module.exports = {
    registerProductCart,
}