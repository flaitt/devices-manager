import {
    postDevice,
    postCategory,
    getDevices,
    getCategories,
    deleteDevice,
    deleteCategory
} from './controller'

var cors = require('cors')

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.post('/device', jsonParser, (req, res) => { 
    postDevice(req.body).then(httpResponse => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
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
        res.set('Access-Control-Allow-Origin', '*')
        res.send(httpResponse.body)
    }).catch(error => {
        res.status(500).send({ error: 'An unkown error occurred.' })
    })
})

app.get('/devices', jsonParser, (req, res) => { 
    getDevices().then(httpResponse => {
        res.type('json');
        res.status(httpResponse.statusCode)
        res.set('Access-Control-Allow-Origin', '*')
        res.send(httpResponse.body)
    }).catch(error => {
        res.status(500).send({ error: 'An unkown error occurred.' })
    })
})

app.get('/categories', jsonParser, (req, res) => { 
    getCategories().then(httpResponse => {
        res.type('json');
        res.status(httpResponse.statusCode)
        res.set('Access-Control-Allow-Origin', '*')
        res.send(httpResponse.body)
    }).catch(error => {
        res.status(500).send({ error: 'An unkown error occurred.' })
    })
})

app.delete('/device', jsonParser, (req, res) => { 
    deleteDevice(req.body).then(httpResponse => {
        res.type('json');
        res.status(httpResponse.statusCode)
        res.set('Access-Control-Allow-Origin', '*')
        res.send(httpResponse.body)
    }).catch(error => {
        res.status(500).send({ error: 'An unkown error occurred.' })
    })
})

app.delete('/category', jsonParser, (req, res) => { 
    deleteCategory(req.body).then(httpResponse => {
        res.type('json');
        res.status(httpResponse.statusCode)
        res.set('Access-Control-Allow-Origin', '*')
        res.send(httpResponse.body)
    }).catch(error => {
        res.status(500).send({ error: 'An unkown error occurred.' })
    })
})

app.listen(port, () => {
    console.log('Server listing on port: ', port);
})
