const Discord = require('discord.js')//Modülümüzü tanımladık
const db = require('quick.db')
exports.run = async(client, message) => {//Komutu çalıştıracak olan yer
const dil = db.fetch(`dil_${message.author.id}`)
if (dil == 'en'){
	let kanal = message.mentions.channels.first()
if(!kanal) return message.reply(`Kanal etiketlemeyi unuttun!`)
   .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
db.set(`UyarıLogFrenzy_${message.guild.id}`,kanal.id)
message.channel.send(`${kanal} setted warn log channel`)//<a:tik:727414557508632577>

} else {
	let kanal = message.mentions.channels.first()
if(!kanal) return message.reply(`You forgot to tag a channel!`)
   .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
db.set(`UyarıLogFrenzy_${message.guild.id}`,kanal.id)
message.channel.send(`Uyarı log ${kanal} olarak ayarlandım`)//<a:tik:727414557508632577>

	
}
}; 
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: ['uyarı-lıg','warn-log'], //diğer adlar
permLevel: 3 //yetki
};
exports.help = {
name: 'uyarı-log',//help komutu
description: 'Uyarı Log Kanalını Ayarlar.',//açıklaması
usage: ''//kullanımı
};
