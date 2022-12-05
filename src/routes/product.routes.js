const { Router } = require('express');
const { productRegister, getAllproducts } = require('../controllers');
const authenticate = require("../middlewares/auth.middleware");

const router = Router();


router.post("/product", productRegister);
router.get("/product", getAllproducts);

module.exports = router;