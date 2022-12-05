const { CartServices } = require('../services');
const Thank = require("../templates/welcome");
const transporter = require("../utils/mailer");

const getAllCart = async (req, res, next) => {
    try {
        const result = await CartServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const registerCart = async (req, res, next) => {
    try {
        const newCart = req.body;
        const result = await CartServices.register(newCart);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan Datos"
        })
    }
}

const getAllProductsCart = async (req, res, next) => {
    try {
        const result = await CartServices.getAllProducts();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

const updateCart = async (req, res, next) => {
    try {
        const {id} = req.params;
        const upd = req.body;
        const result = await CartServices.updateCart(upd, id);
        res.status(201).json(result);

        
        transporter.sendMail({
            from: "<nervinjflores@gmail.com>",
            to: result.email,
            subject: `Gracias por Comprar ${result.username}`,
            text: `Hola ${result.username}  bienvenido a la mejor Tienda `,
            html: Thank(),
          });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Dato Invalido"
        })
    }
}

module.exports = {
    getAllCart,
    registerCart,
    getAllProductsCart,
    updateCart,
}