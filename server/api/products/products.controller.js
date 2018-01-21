const products = [
    {
        name: 'margarita', 
        ingredients: ['basil', 'tomato', 'mozzarella'], 
        price: 5.75,
        id: 123
    },
    {
        name: 'peperoni', 
        ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'],
        price: 7.00,
        id: 4323
    },
    {
        name: 'meat', 
        ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], 
        price: 12.00,
        id: 321
    },
    {
        name: 'marina', 
        ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'], 
        price: 15.75,
        id: 4132
    }
];

function getProducts(req, res) {
    res.json(products);
}

module.exports = {
    getProducts
}