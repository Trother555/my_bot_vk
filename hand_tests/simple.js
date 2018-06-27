let Player = require('../controller/player')
let mongo = require('mongoose')
mongo.connect('mongodb://localhost/test')

let db = mongo.connection;
db.once('open', ()=>{
    console.log('Succesfully connected');
    player = Player.getOrCreatePlayer(12345);
    player.then((p)=>console.log(p));
})