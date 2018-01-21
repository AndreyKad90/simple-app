const orders = {};
let NEXT_ORDER_ID = 1;

function getOrders(req, res) {
    res.json(orders[req.ip] || []);
}

function addOrder(req, res) {
    const newOrder = Object.assign({}, req.body, {
        id: NEXT_ORDER_ID++     
    });
    const userId = req.ip;

    if (!orders[userId]) {
        orders[userId] = [];
    }
    orders[userId].push(newOrder);

    res.json(newOrder);
}

module.exports = {
    getOrders, addOrder
}