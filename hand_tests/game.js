let Game = require('../controller/game')

let mongo = require('mongoose')
mongo.connect('mongodb://localhost/test')

//mocking an api handler
let handler = {
    pid: 12345,
    text: (text) => console.log(text)
}

Game.onRaise(handler)