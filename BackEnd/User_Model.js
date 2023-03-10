const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('User', userScheme)

