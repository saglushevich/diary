const {Schema, model, ObjectId} = require("mongoose")

const Schedule = new Schema({
    owner: {type: String, required: true},
    tasks: {type: Array, required: true}
})

module.exports = model('Schedule', Schedule)