const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('**Yetkili Log kanalını ayarlamak için `Yönetici` İznine sahip olmalısın!')
return message.channel.send(embed)
}

if (args[0] === 'sıfırla') {
let rol = db.fetch(`Ardééks_${message.guild.id}`)  
  if (!rol) return message.channel.send(` Bot Log Kanalı Yok!`)
  message.channel.send(`:white_small_square: Bot Log Odası Sıfırlandı!`)
db.delete(`Ardééks_${message.guild.id}`)
  return;
}


let kinal = db.fetch(`Ardééks_${message.guild.id}`)
if(db.has(`Ardééks_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Yetkili Log kanalı <#${kinal}> kanalına ayarlı! \nKapatmak için** \`${ayarlar.prefix}yetkili-log sıfırla\``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**Yetkili Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}yetkili-log-kanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`Ardééks_${message.guild.id}`, kanal.id);
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**Yetkili Log kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
}; // xFixxy and Ardééks :)///
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['yetkililogkanal','yetkili-log'],
permLevel: 0
};
exports.help = {
name: 'yetkili-log-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};// Bu altyapı xFixxy ve Ardeeks'e aittir.