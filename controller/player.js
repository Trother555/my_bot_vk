Player = require('../model/player')

const getOrCreatePlayer = async (playerId) => {
    let player = await Player.findById(playerId);
    if(player)
       return player;
    player = new Player({_id: playerId, bablo: 0});
    return player.save();
}

module.exports = {
  getOrCreatePlayer
};