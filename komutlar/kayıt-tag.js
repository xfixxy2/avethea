const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	
    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`you must have admin perm`);
let tag = args.slice(0).join(' ')

if(args[0] === "reset") {
  const sıfırlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - register tag reset `)
.setColor('BLACK')
.setDescription(`succesful ! `)
.setThumbnail(client.user.avatarURL())
message.channel.send(sıfırlandı)
db.delete(`kayıttag_${message.guild.id}`)
  return;
}
  db.set(`kayıttag_${message.guild.id}`, tag)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - succesful `)
.setColor('BLACK')
.setDescription(`succesful set ! `)
.setThumbnail(client.user.avatarURL())
message.channel.send(ayarlandı)
} else {
	
    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);
let tag = args.slice(0).join(' ')

if(args[0] === "sıfırla") {
  const sıfırlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kayıt Tagı Sıfırla `)
.setColor('BLACK')
.setDescription(`Kayıt Olunca İsmin Başına Koyulacak Tag Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
db.delete(`kayıttag_${message.guild.id}`)
  return;
}
  db.set(`kayıttag_${message.guild.id}`, tag)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kayıt Tag Ayarlandı `)
.setColor('BLACK')
.setDescription(`Kayıt Olunca İsmin Başına Koyulacak Tag  ${tag} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
}
  
  }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıttag', 'ktag', 'k-tag'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-tag',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: '!kayıt-kanal #kanal'
}