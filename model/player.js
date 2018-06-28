let mongo = require('mongoose')
let Schema = mongo.Schema

let playerSchema = new Schema({
    _id: Number,
    bablo: Number,
    load_pending: { type: Boolean, default: false }
})

module.exports = mongo.model('Player', playerSchema)