const { Router } = require('express');
const { getAllCart, registerCart, getAllProductsCart, updateCart } = require('../controllers');
const authenticate = require("../middlewares/auth.middleware");

const router = Router();


/**
 * @openapi
 * /api/v1/cart/{id}:
 *   put:
 *     summary: update status
 *     tags: [Cart]
 *     requestBody:
 *       description: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/put"
 *     responses:
 *       201:
 *         description: update cart status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/cart"
 */

router.get("/cart", getAllCart);
router.post('/cart', registerCart);
router.get("/cart/produts", getAllProductsCart);
router.put('/cart/:id', updateCart);

module.exports = router;