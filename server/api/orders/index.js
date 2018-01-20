const Router = require('express').Router;
const router = new Router();
const controller = require('./orders.controller');

router.get('/', controller.getOrders);
router.post('/', controller.addOrder);

module.exports = router;