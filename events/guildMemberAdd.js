const {usernames, detectedUsernames, blacklistedUsernames} = require(`../botSettings/schemas`)
const date = new Date()
const {threshold} = require(`../botSettings/manualSettings.json`)

module.exports = {
    name: `guildMemberAdd`,
    execute(client, member) {
        if(!usernames.exists({username: member.user.username})) {
            const newUsername = new usernames({
                username: member.user.username,
                count: 1,
                ids: [member.id],
                lastSeen: date.now()
            })

            newUsername.save().then(() => {
                console.log(`New username saved: ${member.user.username}`)
            })
        } else {
            usernames.findOne({username: member.user.username}, (err, response) => {
                if(err) {
                    console.log(err)
                } else {
                    if(response.count + 1 >= threshold) {

                    }
                }
            })
        }
    }
}
