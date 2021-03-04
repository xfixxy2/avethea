const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (db.fetch(`dil_${message.author.id}`) == 'en' ){
	let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`please mention member ! `)

member.roles.remove(kayıtçı)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - succesful `)
.setColor('BLACK')
.setDescription(`${member} is not have register  role! `)
.setThumbnail(client.user.avatarURL)
message.channel.send(ayarlandı)
 db.delete(`kayıtsayı_${member.id}`)
}  else {
	let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`Kayıtçı Rolü Alacanız Kullanıcıyı Belirtiniz ! `)

member.roles.remove(kayıtçı)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtçı Rolü Alındı `)
.setColor('BLACK')
.setDescription(`${member} Adlı Kullanıcıdan Kayıtçı Rolü Alındı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
 db.delete(`kayıtsayı_${member.id}`)
}
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçıal','take-registerer-role'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-al',
  description: 'kayıtçı rolü verir',
  usage: '!kayıtçı-ver @kullanıcı'
}