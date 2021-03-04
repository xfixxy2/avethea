const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message,args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**You Must Have Admin Perm!**')
let Prefix = args[0]
if (!Prefix) return message.channel.send("**Please select prefix**")
message.channel.send(`Server prefix changed **\`${db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix}\` to \`${Prefix}\`is set to**`)
db.set(`prefix_${message.guild.id}`,Prefix)
} else {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Bu Komutu Kullanabilmek Icin `Yonetici` Yetkisine Ihtiyaciniz Var!**')
let Prefix = args[0]
if (!Prefix) return message.channel.send("**Lutfen Prefix Belirleyiniz**")
message.channel.send(`**\`${db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix}\` Olan Prefix Artik \`${Prefix}\` Olarak Ayarlanmistir.**`)
db.set(`prefix_${message.guild.id}`,Prefix)
}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix"],
  permLevel:0
}

exports.help = {
  name: "Prefix",
  description: "Prefix Ayarlar",
  usage: "prefix"
}