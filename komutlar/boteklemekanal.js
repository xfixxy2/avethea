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
let rol = db.fetch(`anan12_${message.guild.id}`)  
  if (!rol) return message.channel.send(` Bot Ekleme Log Kanalı Yok!`)
  message.channel.send(` BOT Ekleme Log Sildim reisim`)
db.delete(`anan12_${message.guild.id}`)
  return;
}

let kinal = db.fetch(`anan12_${message.guild.id}`)
if(db.has(`anan12_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(` **Bot Ekleme Log kanalı <#${kinal}> Kanalına Ayarlı! \n Kapatmak için Lütfen ** \`${ayarlar.prefix}bot-ekleme-log sıfırla Yazınız. \``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`** Bot Ekleme Log Kanalın Etiketle Lütfen! \`Doğru kullanım: ${ayarlar.prefix}bot-ekleme-log #kanal\`**`)
return message.channel.send(embed)
}
db.set(`anan12_${message.guild.id}`, kanal.id);
 
const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`** Bot Ekleme Log Kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['boteklemelogkanal','boteklemelog'],
permLevel: 0
};
exports.help = {
name: 'bot-ekleme-log',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};