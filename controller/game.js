let Player = require('../controller/player')
let text = require('../text/text.json');

let onRaise = async (handler) => {
    player = await Player.getOrCreatePlayer(handler.pid);
    let raised = Math.round((Math.random()*10000)%10000);
    player.bablo += raised;
    await player.save();
    handler.text(`${text.raised[0]} ${raised} ${text.raised[1]}  ${player.bablo}`))
};

module.exports = {
  onRaise
};