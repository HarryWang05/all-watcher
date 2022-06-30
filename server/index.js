const fetch = require("node-fetch")
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const { Client, Intents } = require('discord.js');
const apiPort = 5000

const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

var example = {
    example: ''
};

client.on('messageCreate', message => {
    if (message.author.bot) return;
    console.log(message.content)
    example.example += message.content
});

client.login(token);

app.get('/api', (req, res) => {
    res.send(JSON.stringify(example))
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
