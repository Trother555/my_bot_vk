let vkbot = require('vk-chat-bot');
let text = require('../text/text.json');
let game = require('../controller/game');

//starting bot
let params = {
    vk_api_key: process.env.VK_API_KEY,
    confirmation_token: process.env.CONFIRMATION_TOKEN,
    group_id: process.env.GROUP_ID,
    secret: process.env.SECRET,
    cmd_prefix: "/"
}
 
let bot = new vkbot(params);

bot.on('message_allow', $ => {
    $.text(text.allow)
});

bot.cmd('raise', text.allowHelp, async $ => {
    await game.onRaise($);    
});

bot.on('no_match', $ => {
    $.text("Лыхны")
    $.attach('photo',-162112527,456239017)
});

let startBot = () => bot.start(process.env.PORT || 5000);

module.exports = {
    startBot
};