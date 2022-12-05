const { Users, Product, Cart, Order, ProductInCart, ProductInOrder } = require('./index');


const initModels = () => {
  // muchos a muchos --> usuarios y conversaciones
  Users.hasMany(Product, { as: "product", foreignKey: "user_id" });
  Product.belongsTo(Users, { as: "user", foreignKey: "user_id" });

//   // 1 a muchos --> usuarios mensajes
  Users.hasOne(Cart, { as: "cart", foreignKey: "user_id" });
  Cart.belongsTo(Users, { as: "users", foreignKey: "user_id" });

  Order.belongsTo(Users, {as: "User", foreignKey: "user_id"});
  Users.hasMany(Order, {as: "order", foreignKey: "user_id"});
 
  Product.hasOne(ProductInCart, { as: "products"});
  ProductInCart.belongsTo(Cart, { as: "cart", foreignKey: "cart_id"});

  Cart.hasMany(ProductInCart, { as: "productC"});

  Order.hasMany(ProductInOrder, { as: "orders"});

  Product.hasOne(ProductInOrder, { as: "s", foreignKey: "product_id"});

  ProductInOrder.belongsTo(Order, { as: "order", foreignKey: "order_id"});

  // ProductInOrder.belongsTo(Product, { as: "products", foreignKey: "product_id"});

//   // 1 a muchos --> usuarios y conversaciones
//   Conversations.belongsTo(Users, { as: "owner", foreignKey: "created_by" });
//   Users.hasMany(Conversations, { as: "chats", foreignKey: "created_by" });
};

module.exports = initModels;

// hicimos el boiler template
// creamos los modelos
// las relaciones
