let bot = require('service/bot')
let mongoose = require('mongoose')

let connectionString = process.env.CON_STRING||'mongodb://localhost/test';
mongoose.connect(connectionString);

bot.startBot();