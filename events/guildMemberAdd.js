const {usernames, blacklistedUsernames} = require(`../botSettings/schemas`)

module.exports = {
    name: `guildMemberAdd`,
    execute(client, member) {
        if(usernames.exists({username: member.user.username})) {
            
        }
    }
}
