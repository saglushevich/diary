const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    notes: {type: Array},
    contacts: {type: Array}
})

module.exports = model('User', User)