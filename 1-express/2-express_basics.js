const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Home page')
})

app.get('/about', (req, res) =>{
    res.send('About page')
})

app.all('*', (req, res) =>{
    res.send('Resource not found')
})

app.listen(5000, () =>{
    console.log('listening on port 5000....');
})
//app.get 
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen