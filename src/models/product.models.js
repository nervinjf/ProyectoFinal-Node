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

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Product;