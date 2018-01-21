const orders = [];
let NEXT_ORDER_ID = 1;

function getOrders(req, res) {
    res.json(orders);
}

function addOrder(req, res) {
    const newOrder = Object.assign({}, req.body, {
        id: NEXT_ORDER_ID++     
    });

    orders.push(newOrder);

    res.json(newOrder);
}

module.exports = {
    getOrders, addOrder
}