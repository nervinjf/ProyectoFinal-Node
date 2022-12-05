const { ProductInCart, Product } = require('../models');

class ProductInCartServices{
    static async register(data){
        try {
            const {productId, quantity} = data;
            const product = await Product.findByPk(productId);
            const { price, availableQty } = product;
            const newdata = {...data,  "price": price};
            const result = await ProductInCart.create(newdata);
            if(result){
                const restante = availableQty - quantity;
                const updates = {"availableQty": restante};
                const update = Product.update(updates, {
                    where: {id: productId},
                })
                
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductInCartServices;