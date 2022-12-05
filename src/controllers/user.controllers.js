const { UserServices } = require('../services');
const welcomeTemplate = require('../templates/welcome');
const transporter = require("../utils/mailer");

const userRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);

        transporter.sendMail({
            from: "<nervinjflores@gmail.com>",
            to: result.email,
            subject: `Gracias por Registrarte ${result.username}`,
            text: `Hola ${result.username}  bienvenido a la mejor Tienda `,
            html: welcomeTemplate(result.username),
          });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "faltan datos",
        })
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const result = await UserServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

module.exports = {
    userRegister,
    getAllUsers
}