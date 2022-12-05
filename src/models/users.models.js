const db = require("../utils/database");
const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");

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

const Users  = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    hooks: {
        beforeCreate: (user, options) => {
          const { password } = user;
          const hash = bcrypt.hashSync(password, 8);
          user.password = hash;
        },
      },
});

module.exports = Users;