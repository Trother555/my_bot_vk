let Game = require('../controller/game')

let mongo = require('mongoose')
mongo.connect('mongodb://localhost/test')

//mocking an api handler
let handler = {
    pid: 12345,
    replyText: "",
    text: (text) => console.log(text)
};

(async () => {
    console.log('Checking onRaise:\n');
    await Game.onRaise(handler);
    console.log(handler.replyText);
    handler.replyText = "";

    console.log('Checking onBablo:\n');
    await Game.onBablo(handler);
    
    console.log('Checking load request:\n');
    await Game.onLoad(handler);
    
    console.log('Checking load rubls:\n');
    await Game.onLoad(handler, 'в рублях');
    
    console.log('Repeat onRaise:\n');
    await Game.onRaise(handler);
    console.log(handler.replyText);
    handler.replyText = "";
    
    console.log('Repeat load request:\n');
    await Game.onLoad(handler);
    
    console.log('Checking load bitcoins:\n');
    await Game.onLoad(handler, 'в биткоинах');
}
)();