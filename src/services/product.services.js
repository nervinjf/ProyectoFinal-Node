const { Product, Users } = require("../models");


class ProductServices{
    static async register(data){
        try {
            const result = await Product.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll(){
        try {
            const result = await Product.findAll({
                attributes:["id", "name", "price", "availableQty", "status", "img"],
                include:{
                    model: Users,
                    as: "user",
                    attributes: ["username"],
                }
            });
            const filter = result.filter(e => e.availableQty > 0)
            return filter;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductServices;