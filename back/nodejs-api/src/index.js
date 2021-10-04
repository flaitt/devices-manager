import devicesManagerDb from './data-access'

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log('Começou!');
    
    try {
        getDevices()
    } catch (error) {
        console.log('deu erro', error)
    }
})

async function getDevices() { 
    console.log('tentando encontrar dispositivos')
    const result = await devicesManagerDb.findAllDevices()
    console.log('result', result);
    return result;
};