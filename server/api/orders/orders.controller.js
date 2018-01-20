const orders = [];

function getOrders(req, res) {
    res.json(orders);
}

function addOrder(req, res) {
    orders.push(req.body);
    res.json(true);
}

module.exports = {
    getOrders, addOrder
}