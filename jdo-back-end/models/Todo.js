const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    owner: {type: String, required: true},
    date: {type: Date, required: true},
    priority: {type: Number, required: true},
    complited: {type: Boolean, required: true},
    deleted: {type: Boolean, required: true}
})

module.exports = model('User', schema)