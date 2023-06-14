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
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if (!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    //console.log(req.query);
    const {search , limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts < 1){
        //res.status(200).send('no products found starting with b')
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () =>{
    console.log('listening on port 5000 ...');
})