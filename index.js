const vkbot = require('vk-chat-bot')

var params = {
  vk_api_key: '5b87f549e7f17a2492a14ac06526d97888d61e761c3842dfd1e677e125460712496e510fe1e8cd9490f6d',
  confirmation_token: '6beefbd5',
  group_id: 162112527,
  secret: 'yourlateteensarehangingonthewall',
 
  cmd_prefix: "/"
}
 
var bot = new vkbot(params)

bot.on('message_allow', $ => {
  $.text('Hello, thanks for allowing us to send you messages.')
  // $.send() is added automatically
})

// No matching handler is found
bot.on('no_match', $ => {
  $.text("I don't know how to respond to your message.")
})

// Use case-insensitive regex to find words "hi", "hello" or "hey"
bot.regex(/h(i|ello|ey)/i, $ => {
  $.text('Hello, I am a test bot. You said: ' + $.msg)
})

var port = process.env.PORT || 5000
 
bot.start(port)