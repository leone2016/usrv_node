const express = require('express');
const bodyParser = require('body-parser')

const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res)=>{

    const event = req.body;

    axios.post('http://localhost:4000/events', event); // post
    axios.post('http://localhost:4001/events', event); // comment
    axios.post('http://localhost:4002/events', event); //queryService
    axios.post('http://localhost:4003/events', event); // Moderation

    res.send({status: 'ok'});
});

app.listen('4005', ()=>{
    console.log(' Listening on 4005')
});
