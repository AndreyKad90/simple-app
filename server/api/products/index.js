const Router = require('express').Router;
const router = new Router();
const controller = require('./products.controller');

router.get('/', controller.getProducts);

module.exports = router;