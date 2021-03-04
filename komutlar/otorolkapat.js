const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: you must have administrator command')

  if(!db.fetch(`judgekanal_${message.guild.id}`)) return message.channel.send('is not opened')
   

   message.reply('succesful')
db.delete(`judgekanal_${message.guild.id}`)   
  db.delete(`judgerol_${message.guild.id}`)
db.delete(`judgemesaj_${message.guild.id}`)
} else {
	
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`judgekanal_${message.guild.id}`)) return message.channel.send('Sanırım bu özellik zaten kapalıymış')
   

   message.reply('Bu özellik **başarıyla kapatıldı.**')
db.delete(`judgekanal_${message.guild.id}`)   
  db.delete(`judgerol_${message.guild.id}`)
db.delete(`judgemesaj_${message.guild.id}`)
}

}; 

exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'otorolkapat', 
description: 'taslak',
 usage: 'otorolkapat' 
};