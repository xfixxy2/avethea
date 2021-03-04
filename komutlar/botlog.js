const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('**Log kanalını ayarlamak için `Yönetici` İznine sahip olmalısın!')
return message.channel.send(embed)
}


if (args[0] === 'sıfırla') {
let rol = db.fetch(`ardeeks_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: Bot Log Kanalı Yok!`)
  message.channel.send(`:white_small_square: Bot Log Silindi!`)
db.delete(`ardeeks_${message.guild.id}`)
  return;
}

let kinal = db.fetch(`ardeeks_${message.guild.id}`)
if(db.has(`ardeeks_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Bot Log kanalı <#${kinal}> Kanalına Ayarlı! \n Kapatmak için** \`${ayarlar.prefix}botlog sıfırla Yazınız. \``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`** Bot Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}botlog #kanal\`**`)
return message.channel.send(embed)
}
db.set(`ardeeks_${message.guild.id}`, kanal.id);
 //youtube.com/Ardééks
// Teşekkürler xFixxy
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`** Bot Log Kanalını ${kanal} Olarak Ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['botlogkanal','botlog'],
permLevel: 0
};
exports.help = {
name: 'botlog',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};