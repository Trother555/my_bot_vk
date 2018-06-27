const vkbot = require('vk-chat-bot')
let mongoose = require('mongoose')


var params = {
  vk_api_key: process.env.VK_API_KEY,
  confirmation_token: process.env.CONFIRMATION_TOKEN,
  group_id: process.env.GROUP_ID,
  secret: process.env.SECRET, 
  cmd_prefix: "/"
}
 
var bot = new vkbot(params)

bot.on('message_allow', $ => {
  $.text('Кирпич на кирпич, гони, бабка, магарыч')
  // $.send() is added automatically
})

bot.on('message_typing_state', $ => {
  $.text('Чё пишешь, камыш колышешь?')
})

// No matching handler is found
bot.on('no_match', $ => {
  $.text("Лыхны")
})

// Use case-insensitive regex to find words "hi", "hello" or "hey"
bot.regex(/прив|здоров\w*|здравствуй/i, $ => {
  $.text('Дырвы')
})

var port = process.env.PORT || 5000
 
bot.start(port)