function getProducts(req, res) {
    const products = [
        {
            name: 'margarita', 
            ingredients: ['basil', 'tomato', 'mozzarella'], 
            price: 5.75
        },
        {
            name: 'peperoni', 
            ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'],
            price: 7.00
        },
        {
            name: 'meat', 
            ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], 
            price: 12.00
        },
        {
            name: 'marina', 
            ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'], 
            price: 15.75
        }
    ];

    res.json(products);
}

module.exports = {
    getProducts
}