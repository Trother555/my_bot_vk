let mongo = require('mongoose')
let Schema = mongo.Schema

let playerSchema = new Schema({
    _id: Number,
    bablo: Number
})

module.exports = mongo.model('Player', playerSchema)