let Player = require('../controller/player')
let text = require('../text/text.json');

let onRaise = async (handler) => {
    player = await Player.getOrCreatePlayer(handler.pid);
    let raised = Math.round((Math.random()*10000)%10000);
    player.bablo += raised;
    player
    .save()
    .then(()=>handler.text(`${text.raised[0]} ${raised} ${text.raised[1]}  ${player.bablo}`))
    .catch((err)=>console.log(text.error, err));
};

module.exports = {
  onRaise
};