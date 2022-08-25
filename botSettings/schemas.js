const mongoose = require(`mongoose`)
mongoose.pluralize(null)
const usernamesSchema = new mongoose.Schema({
    username: String,
    count: Number,
    ids: Array,
    lastSeen: String
})

const detectedUsernamesSchema = new mongoose.Schema({
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
    lastSeen: String
})

const blacklistedUsernamesSchema = new mongoose.Schema({
    username: String,
    count: Number,
    lastSeen: String
})


exports.usernames = mongoose.model(`Usernames`, usernamesSchema)
exports.detectedUsernames = mongoose.model(`Detected Usernames`, detectedUsernamesSchema)
exports.bannedUsers = mongoose.model(`Banned Users`, bannedUsersSchema)
exports.blacklistedUsernames = mongoose.model(`Blacklist`, blacklistedUsernamesSchema)
