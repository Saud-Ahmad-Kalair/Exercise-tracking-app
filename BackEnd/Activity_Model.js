const mongoose = require('mongoose')

const activityScheme = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String
    },
    duration: {
        type: String
    },
    date: {
        type: Date
    },
    user: {type: mongoose.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model('Activity', activityScheme)
