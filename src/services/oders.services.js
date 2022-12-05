const { Order, Users, ProductInOrder } = require("../models");


class OrderServices {
    static async getAll() {
        try {
            const result = await Order.findAll({
                attributes: ["id", "totalPrice", "status"],
                include:
                    [
                    {
                        model: Users,
                        as: "User",
                        attributes: ["username", "email"],
                    },
                    {
                        model: ProductInOrder,
                        as: "orders",
                        attributes: ["id", "productId", "quantity", "price", "status"],
                    }


                    ],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderServices;