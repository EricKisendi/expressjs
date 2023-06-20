const express = require('express');
const app = express();
let {people} = require('./data.js')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({success:false,msg:'Please provide a name value'})
    }
    res.status(201).send({success:true, person:name})
})

app.post('/api/postman/people', (req,res) =>{
    const {name} = req.body
    if (!name){
        return res.status(400).json({success:true, msg:'please enter name value'})
    }
    res.status(201).send({success:true, data:[...people,name]})
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials')
})

app.put('/api/people/:id', (req, res) =>{
    const {id} = req.params
    const {name} = req.body
    console.log(id, name);
    res.send('hello world')
})

app.listen(5000, () =>{
    console.log('listening on port 5000 ...');
})
