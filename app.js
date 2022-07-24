const {Client, GatewayIntentBits} = require(`discord.js`)
const client = new Client({intents: [GatewayIntentBits.GuildMembers]})
const fs = require(`fs`)

const {
    botToken
} = require(`./botSettings/manualSettings.json`)

client.on(`ready`, () => {
    console.log(`Logged in as ${client.user.username}`)
})

client.login(botToken)