const express = require('express');
const app = express();
let {people} = require('./data.js')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.listen(5000, () =>{
    console.log('listening on port 5000 ...');
})