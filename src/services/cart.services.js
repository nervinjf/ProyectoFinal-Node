const { Cart, Users, ProductInCart, Order, ProductInOrder, } = require("../models");


class CartServices {
    static async getAll() {
        try {
            const result = await Cart.findAll({
                attributes: ['totalPrice'],
                include: {
                    model: Users,
                    as: "users",
                    attributes: ["username"],
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAllProducts() {
        try {
            const result = await Cart.findAll({
                attributes: ["id", "totalPrice", "status"],
                include: [
                    {
                        model: Users,
                        as: "users",
                        attributes: ["username", "email"],
                    }, {
                        model: ProductInCart,
                        as: "productC",
                        attributes: ["product_id", "quantity", "price", "status"],
                    }],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async updateCart(upd, id) {
        try {
            const result = await Cart.update(upd, {
                where: {id},
            });

            const data2 = await Cart.findByPk(id)
            if(result){
                const update = await ProductInCart.update({"status": "Purchased"}, {
                    where: {cartId: id},
                })
                const data = await Cart.findByPk(id)
                const { userId, totalPrice, status} = data;
                const create = await Order.create({ userId, totalPrice, status})
                if (create) {
                    const datacart = await ProductInCart.findAll({
                        raw: true,
                        where:{
                          cartId: id,
                        status: "Purchased",
                        },
                        attributes: ["price", "product_id", "quantity", "status"],   
                    });
                    const dataProductInOrders = await ProductInOrder.findAll();
                    const resultdata = datacart.filter(e => e != dataProductInOrders);
                    for (let i = 0; i < resultdata.length; i++) {
                        resultdata[i].orderId = create.id;
                    }
                      const createorder = await ProductInOrder.bulkCreate(resultdata);
                    //   console.log(resultdata);
                }
                
            } 

            // const resultt = await Cart.findAll({
            //     where: {id},
            // });
            // console.log('primer resukltado ' + resultt)
            const resultuser = await Users.findOne({
                where: {id: data2.userId},
                raw: true});
                const {email, username} = resultuser;
                const dataUser = {email, username};
                // const emailenv = {email}
                // console.log(email)
            return dataUser;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CartServices;