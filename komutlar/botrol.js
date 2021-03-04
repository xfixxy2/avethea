const discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:white_small_square: Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`xfixxy-ardeeks_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: BOT Rolü Ayarlanmadık`)
  message.channel.send(`:white_small_square:  BOT ROLU SİLDİM TEKRAR OLUSTUR!`)
db.delete(`xfixxy-ardeeks_${message.guild.id}`)
  return;
}
//youtube.com/Ardééks
//teşekkürler xFixxy
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(` Ayarlayacağınız Bot Rolünü Belirtiriniz!`)

db.set(`xfixxy-ardeeks_${message.guild.id}`, rol.id)

message.channel.send(`:white_small_square: Bot Rolünüz ${rol} Olarak Ayarlandı!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'botekle-bot-rol'
}