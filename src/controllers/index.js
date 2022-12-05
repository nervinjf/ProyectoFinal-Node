const { userLogin } = require("./auth.controllers");
const { userRegister, getAllUsers } = require("./user.controllers");
const { productRegister, getAllproducts } = require('./product.controllers');
const { getAllCart, registerCart, getAllProductsCart, updateCart } = require('./cart.controllers');
const { registerProductCart } = require('./productInCart.controllers');
const { getAllOrders } = require('./orders.controllers');



module.exports = {
  userLogin,
  userRegister,
  getAllUsers,
  productRegister,
  getAllproducts,
  getAllCart,
  registerCart,
  registerProductCart,
  getAllProductsCart,
  updateCart,
  getAllOrders
};

// registrar a un usuario
// login de un usuario
// obtener las conversaciones
// obtener detalles de conversación (mesnajes y participantes)
// Crear conversaciones
// Crear mensajes
// *********** Ustedes ************
// actualizar una conversacion (titulo, imagen, participantes)
// actualizar un usuario ( cmabiar la imagen, nombre )
// eliminar conversaciones ---> agregar una columna con una bandera booleana / es para el usuario y no para todos los participantes
