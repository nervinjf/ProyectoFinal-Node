// importar los modelos
// exportarlos

// Agrupar todos los modelos para encontrarlos en una
// sola direccion
const Users = require("./users.models");
const Cart = require('./cart.models');
const Order = require('./order.models');
const Product = require('./product.models');
const ProductInCart = require('./productInCart.models');
const ProductInOrder = require('./productInOrder.models');

module.exports = {
  Users,
  Cart,
  Order,
  Product,
  ProductInCart,
  ProductInOrder,
};
