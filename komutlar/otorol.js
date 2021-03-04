const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`you must have administrator perm`);
 
 if(!rol) return message.channel.send(`
${client.emojis.cache.get("")} please mention role
example use : a!otorol @rol #kanal 

STRONGLY READ HERE !!: For My Auto Role, I Must Have a Role Over The Role Or I Can't Give It

`)
 
 if(!kanal) return message.channel.send(`
${client.emojis.cache.get("")} Ayarlamam İçin Bir Kanal Etiketlemeilisin.
`)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬
║► ${client.emojis.cache.get("")} Otorol Aktif Hale Getirildi.
║► ${client.emojis.cache.get("")} **${rol}** Olarak Ayarladım
║► ${client.emojis.cache.get("")} Kayıt Kanalını **${kanal}** Olarak Ayarladım
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
} else {
	  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 
 if(!rol) return message.channel.send(`
${client.emojis.cache.get("")} Ayarlamam İçin Bir Rol Etiketlemeilisin. 
Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
Örnek Kullanım : a!otorol @rol #kanal 

 BURAYI KESİNLİKLE OKU!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem

`)
 
 if(!kanal) return message.channel.send(`
${client.emojis.cache.get("")} Ayarlamam İçin Bir Kanal Etiketlemeilisin.
`)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬
║► ${client.emojis.cache.get("")} Otorol Aktif Hale Getirildi.
║► ${client.emojis.cache.get("")} **${rol}** Olarak Ayarladım
║► ${client.emojis.cache.get("")} Kayıt Kanalını **${kanal}** Olarak Ayarladım
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
}
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Sunucuya Gelenlere Otomatik Rol Verir #DarkCode', 
  usage: 'Otorol-ayarla'
};