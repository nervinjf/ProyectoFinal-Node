const db = require("../utils/database");
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     cart:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: On Hold
 *     put:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: On Hold
 */

const Cart = db.define('cart', {
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
    totalPrice: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'In Process',
    },
});

module.exports = Cart;