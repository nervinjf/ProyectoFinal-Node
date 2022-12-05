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

const ProductInOrder = db.define('productInOrder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id',
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = ProductInOrder;