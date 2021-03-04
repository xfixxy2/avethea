	const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (db.fetch(`dil_${message.author.id}`) == 'en') {
	   if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`you must have manage guild perm`);

if (args[0] === 'remove') {
  let isim = db.fetch(`otoisim_${message.guild.id}`)
  if (!isim) return message.channel.send(`undefined auto name`)
  message.channel.send(`succesful!`)
  db.delete(`otoisim_${message.guild.id}`)
  return;
}

let isim = args.slice(0).join(' ')
if (!isim) return message.channel.send(`Please join name!`)

db.set(`otoisim_${message.guild.id}`, isim)

message.channel.send(`succesful`)
}   else {
	   if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
  let isim = db.fetch(`otoisim_${message.guild.id}`)
  if (!isim) return message.channel.send(`Oto İsim AYarlanmadığı İçimn Sıfırlanamaz!`)
  message.channel.send(`Oto İsim Sıfırlandı!`)
  db.delete(`otoisim_${message.guild.id}`)
  return;
}

let isim = args.slice(0).join(' ')
if (!isim) return message.channel.send(`İsim Belirtiniz!`)

db.set(`otoisim_${message.guild.id}`, isim)

message.channel.send(`Oto İsim \`${isim}\` Olarak Ayarlandı!`)
}
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['oto-isim','auto-name'],
  permlevel: 0
}
exports.help = {
  name: 'otoisim'
}