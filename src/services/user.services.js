const { Users, Cart, ProductInCart } = require('../models');

class UserServices {
    static async create(user) {
        try {
            const result = await Users.create(user);
            const { id } = result;
            const cart = { "userId": id, "totalPrice": 0 }
            console.log(cart)
            const createcart = await Cart.create(cart)
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: ["username", 'email'],
                include: {
                    model: Cart,
                    as: "cart",
                    attributes: ["userId", 'totalPrice'],

                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    

}

module.exports = UserServices;