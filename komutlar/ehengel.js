const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (!args[0]) return message.channel.send(` Everyone Here Korumasını Açmak İçin \`a!ehengel aç\`Kapatmak için \`a!ehengel kapat\` `)

if (args[0] === 'aç') {
  message.channel.send(`Everyone Here Koruması Açıldı`)
db.set(`everyone_${message.guild.id}`, 'açık')
  return;
}

if (args[0] === 'kapat') {
  message.channel.send(`Everyone Here Koruması Kapatıldı`)
db.set(`everyone_${message.guild.id}`, 'kapat')
  return;
}
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'ehengel'
}