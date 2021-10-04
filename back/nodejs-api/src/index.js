import {
    postDevice,
    postCategory
} from './controller'

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

const express = require('express')
const app = express()
const port = 3000


app.post('/device', jsonParser, (req, res) => { 
    postDevice(req.body).then(httpResponse => {
        res.type('json');
        res.status(httpResponse.statusCode)
        res.send(httpResponse.body)
    }).catch(error => {
        res.status(500).send({ error: 'An unkown error occurred.' })
    })
})

app.post('/category', jsonParser, (req, res) => { 
    postCategory(req.body).then(httpResponse => {
        res.type('json');
        res.status(httpResponse.statusCode)
        res.send(httpResponse.body)
    }).catch(error => {
        res.status(500).send({ error: 'An unkown error occurred.' })
    })
})

app.listen(port, () => {
    console.log('Server listing on port: ', port);
})
