const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(args[0] === `aç`) {
message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: null })
message.channel.send(`Kanalın kilidi başarıyla açıldı.`)
return;
}

let süre = args[0]
if(!süre || isNaN(süre)) return message.channel.send(`:x: Kanalı kilitleyeceğin süreyi dakika cinsinden belirtmelisin.`)
if(süre < 1) return message.channel.send(`:x: Kanalı kilitleyeceğin süre en az **1** dakika olmalıdır.`)
message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: false })
message.channel.send(`Kanal başarıyla **${süre}** dakikalığına kilitlendi.`)
setTimeout(() => {
message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: null })
message.channel.send(`Kanalın kiliti başarıyla açıldı.`)
}, süre * 60 * 1000)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalkilit','channel-lock'],
  permLevel: 0
};

exports.help = {
  name: 'kanal-kilit',
  description: 'Bulunulan kanalı belirtilen süreyle kilitler.',
  usage: 'kanal-kilit'
};