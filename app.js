const express = require('express');
//const path = require('path');
const app = express();
const {products} = require('./data.js')

app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) =>{
    const newProduct = products.map((product) =>{
        const {id, name, image} = product;
        return {id, name, image}
    })

    res.json(newProduct)
})

app.get('/api/products/:productID', (req, res) =>{
     
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))

    res.json(singleProduct)
})

app.listen(5000, () =>{
    console.log('listening on port 5000 ...');
})