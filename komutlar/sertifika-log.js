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
let rol = db.fetch(`sa1_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: Sertifika Log kanalı yok knkm`)
  message.channel.send(`:white_small_square: Sertifika Log Sildim reisim`)
db.delete(`sa1_${message.guild.id}`)
  return;
}

let kinal = db.fetch(`sa1_${message.guild.id}`)
if(db.has(`sa1_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**Sertifika Log kanalı <#${kinal}> kanalına ayarlı! \nKapatmak için** \`${ayarlar.prefix}sertifikalog sıfırla\``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`** Sertifika Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}sertifikalog #kanal\`**`)
return message.channel.send(embed)
}
db.set(`sa1_${message.guild.id}`, kanal.id);
 //youtube.com/Ardééks
//teşekkürler xFixxy
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`** SERTIFIKA Log kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['sertifikalogkanal','sertifikalog'],
permLevel: 0
};
exports.help = {
name: 'sertifikalog',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};