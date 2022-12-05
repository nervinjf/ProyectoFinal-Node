const db = require("../utils/database");
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Nervinj
 *         email:
 *           type: string
 *           example: nervinjf@gmail.com
 *         password:
 *           type: string
 *           example: 123456
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Nervinjf
 *         email:
 *           type: string
 *           example: nervinjf@gmail.com
 *         password:
 *           type: string
 *           example: 123456
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const ProductInCart = db.define('productInCart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cart_id',
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id',
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "On Hold",
    },
});

module.exports = ProductInCart;