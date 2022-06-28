const fetch = require("node-fetch")
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

var example = {
    example: ''
};

app.get('/api', (req, res) => {
    res.send(JSON.stringify(example))
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
