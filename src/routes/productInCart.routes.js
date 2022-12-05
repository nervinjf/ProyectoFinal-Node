const { Router } = require('express');
const { registerProductCart } = require('../controllers');


const router=Router();

router.post('/productincart', registerProductCart);


module.exports = router;