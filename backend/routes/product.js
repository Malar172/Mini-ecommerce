const express=require('express');
const { getproducts, getSingleproduct } = require('../controllers/productController');
const router =express.Router();

router.route('/products').get(getproducts);
router.route('/product/:id').get(getSingleproduct);

module.exports = router;