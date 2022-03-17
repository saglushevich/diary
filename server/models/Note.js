const {Schema, model, ObjectId} = require("mongoose")

const Note = new Schema({
    title: {type: String, required: true},
    owner: {type: String, required: true},
    description: {type: String},
    date: {type: String},
    important: {type: Boolean}
})

module.exports = model('Note', Note)