const mongoose = require(`mongoose`)
const settings = require(`../botSettings/manualSettings.json`)

module.exports = {
    name: `ready`,
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.username}`)

        console.log(`Attempting to connect to database...`)
        mongooseConnection().then(() => {
            console.log(`Connection to database successful!`)
        }).catch(err => {
            if(err) {
                throw err
            }
        })
    }
}

async function mongooseConnection() {
    await mongoose.connect(settings.mongoURL)
}