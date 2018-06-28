let Player = require('../controller/player')
let formater = require('../text/formater.js');

const maxBablo = 1e19;
const maxBabloChar = 10000000000000000;

let onRaise = async (handler) => {
    player = await Player.getOrCreatePlayer(handler.pid);
    let raised = Math.round((Math.random()*10000)%10000);
    player.bablo += raised;
    if(player.bablo > maxBablo) {
        player.bablo = maxBablo;
        handler.replyText = formater.max() + "\n";
    }
    await player.save();
    handler.replyText += formater.raised(raised, player.bablo);
};

let onBablo = async (handler) => {
    player = await Player.getOrCreatePlayer(handler.pid);
    handler.text(formater.bablo(player.bablo));
};

let onLoad = async (handler, type) => {
    //player specified bablo's currency type
    player = await Player.getOrCreatePlayer(handler.pid);
    if(type != undefined) {
        if(player.load_pending != true)
        {
            handler.text(formater.what());
            return;
        }
        player.load_pending = false;
        handler.text(formater.loadBablo(type, Math.round(player.bablo*maxBabloChar/maxBablo)));
        player.bablo = 0;
        await player.save();
    }
    else {        
        player.load_pending = true;
        await player.save();
        handler.text(formater.load(player.bablo));
    }
};

module.exports = {
  onRaise,
  onBablo,
  onLoad
};