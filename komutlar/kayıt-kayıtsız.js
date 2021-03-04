const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (db.fetch(`dil_${message.author.id}`) == 'en') {
	
	  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`you must have admin perm`);

if(args[0] === "remove") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - unregistered role `)
.setColor('BLACK')
.setDescription(`succesfuly removed !`)
.setThumbnail(client.user.avatarURL)
message.channel.send(sıfırlandı)
db.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - unregisited role `)
.setColor('BLACK')
.setDescription(`please mention unregisited role ! `)
.setThumbnail(client.user.avatarURL)
message.channel.send(ayarlanmadı)
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - unregisited role `)
.setColor('BLACK')
.setDescription(`succesful ${rol} role is unregisited role ! `)
.setThumbnail(client.user.avatarURL)
message.channel.send(ayarlandı)


}  else {
	  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtsız Rol Sıfırla `)
.setColor('BLACK')
.setDescription(`Sunucu İçin Ayarladığınız Kayıtsız Rolü Başarıyla Sıfırlandı !`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
db.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtsız Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Ayarlayacağınız Kayıtsız Rolünü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtsız Rol Ayarlandı `)
.setColor('BLACK')
.setDescription(`Kayıtsız Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)

}
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtsızrol', 'karol', 'k-rol','unregisterrole'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtsız-rol',
  description: 'kayıtsız rolünü ayarlar',
  usage: '!kayıtsız-rol @rol'
}