const { Router } = require('express');
const { getAllOrders } = require('../controllers');


const router = Router();


router.get('/orders', getAllOrders);


module.exports = router;