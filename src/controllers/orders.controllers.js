const { OrderServices } = require('../services');

const getAllOrders = async (req, res, next) => {
    try {
        const result = await OrderServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo salio mal'
        })
    }
}

module.exports = {
    getAllOrders
};