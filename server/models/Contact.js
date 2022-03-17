const {Schema, model, ObjectId} = require("mongoose")

const Contact = new Schema({
    title: {type: String, required: true},
    owner: {type: String, required: true},
    phone: {type: String, required: true}
})

module.exports = model('Contact', Contact)