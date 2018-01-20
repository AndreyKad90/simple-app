const Router = require('express').Router;
const router = new Router();

router.use('/products', require('./products'));
router.use('/orders', require('./orders'));

module.exports = router;