const mongoose = require(`mongoose`)

const usernamesSchema = new mongoose.Schema({
    username: String,
    count: Number,
    ids: Array,
    lastSeen: String
})

const bannedUsersSchema = new mongoose.Schema({
    id: String,
    username: String,
    tag: String,
    reason: String,
    date: String
})

const blacklistedUsernamesSchema = new mongoose.Schema({
    username: String,
    count: Number,
    lastSeen: String
})


exports.usernames = mongoose.model(`Usernames`, usernamesSchema)
exports.bannedUsers = mongoose.model(`Banned Users`, bannedUsersSchema)
exports.blacklistedUsernames = mongoose.model(`Blacklist`, blacklistedUsernamesSchema)
