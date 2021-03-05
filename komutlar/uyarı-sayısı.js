const Discord = require('discord.js')//Modülümüzü tanımladık
const db = require('quick.db')//Datebase modülümüzü tanımladık
exports.run = async(client, message) => {//Komutu çalıştıracak olan yer
const dil = db.fetch(`dil_${messagea.author.id}`)
if (dil == 'en') {
	let user = message.mentions.users.first() || message.author//video uzamasın diye kopyala yapıştır yapıyom
let uyarısayı = await db.fetch(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`)||0
message.channel.send(`${user} users have ${uyarısayı} warn count!`)
} else {
	let user = message.mentions.users.first() || message.author//video uzamasın diye kopyala yapıştır yapıyom
let uyarısayı = await db.fetch(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`)||0
message.channel.send(`${user} kullanıcısının ${uyarısayı} uyarısı var!`)
}
};
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: ['warn-number'], //diğer adlar
permLevel: 0 //yetki
};
exports.help = {
name: 'uyarı-sayı',//help komutu
description: 'Kaç Uyarın Var Gösterir',//açıklaması
usage: ''//kullanımı
};

