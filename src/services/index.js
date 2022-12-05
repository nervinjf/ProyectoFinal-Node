const AuthServices = require("./auth.services");
const UserServices = require("./user.services");
const ProductServices = require('./product.services');
const CartServices = require('./cart.services');
const ProductInCartServices = require('./productInCart.services')
const OrderServices = require('./oders.services');

module.exports = {
  AuthServices,
  UserServices,
  ProductServices,
  CartServices,
  ProductInCartServices,
  OrderServices
};
