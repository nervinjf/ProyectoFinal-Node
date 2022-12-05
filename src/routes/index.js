const authRoutes = require("./auth.routes");
const usersRoutes = require("./users.routes");
const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes"); 
const productsInCartRoutes = require("./productInCart.routes");
const ordersRoutes = require("./orders.routes");

module.exports = {
  authRoutes,
  usersRoutes,
  productRoutes,
  cartRoutes,
  productsInCartRoutes,
  ordersRoutes,
};
