import express from 'express'

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            "id": 1,
            "name": "Burger",
            "price": 120,
            "image": "https://example.com/images/burger.jpg"
        },
        {
            "id": 2,
            "name": "Pizza",
            "price": 250,
            "image": "https://example.com/images/pizza.jpg"
        },
        {
            "id": 3,
            "name": "Pasta",
            "price": 180,
            "image": "https://example.com/images/pasta.jpg"
        },
        {
            "id": 4,
            "name": "Sandwich",
            "price": 100,
            "image": "https://example.com/images/sandwich.jpg"
        },
        {
            "id": 5,
            "name": "Cold Coffee",
            "price": 90,
            "image": "https://example.com/images/coffee.jpg"
        }
    ]

    if(req.query.search){
       const filterProducts = products.filter(product => product.name.includes(req.query.search))
       res.send(filterProducts)
       return;
    }
    setTimeout(() => {
        res.send(products);
    }, 3000)

})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})