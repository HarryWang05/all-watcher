const fetch = require("node-fetch")
const https = require('https')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const Discord = require("discord.js");
const apiPort = 5000

const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Discord.Collection();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

var example = {
    example: 'Button Clicked'
};

app.get('/api', (req, res) => {
    res.send(JSON.stringify(example))
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
