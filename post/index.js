const express = require('express');
const bodyParser= require( 'body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express();
app.use(bodyParser.json())
app.use(cors());

const post = {}
app.get('/posts', (req, res) => {
    res.send(post)
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body;

    post[id] = {
        id, title
    }
    // EMIT EVENT
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })
    res.status(201).send(post[id])
});

app.post('/events', (req, res)=>{
    console.log('Received EVENT: ', req.body.type)

    res.send({})
})
app.listen(4000, () => {
    console.log(' Listening on 4000')
})

