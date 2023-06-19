const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./logger.js')
const authorize = require('./authorize')
// req => middlware => res

//app.use([logger,authorize])

app.use(morgan('tiny'))

app.get('/',(req, res) => {
    res.send('Home');
})

app.get('/api/products',(req, res) => {
    res.send('Products');
})

app.get('/api/items', (req, res) => {
    res.send('Items');
})

app.get('/about',(req, res) => {
    res.send('About');
})

app.listen(5000, () =>{
    console.log('listening on port 5000 ...');
})