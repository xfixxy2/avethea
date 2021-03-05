const Discord = require('discord.js')//Modülümüzü tanımladık
const db = require('quick.db')//Datebase modülümüzü tanımladık
//Moülümüzü yüklüyoruz
exports.run = async(client, message, args) => {//Komutu çalıştıracak olan yer
//Komutuyazmaya başlıyoruz
const dil = db.fetch(`dil_${message.author.id}`)
if (dil == 'en') {
	
	let log = await db.fetch(`UyarıLogFrenzy_${message.guild.id}`)
if(!log) return message.reply(`please set log channel`)
let user = message.mentions.users.first() //Uyarılacak Kullanıcı
if(message.guild.member(user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("i cant warn authorized members")
let sebep = args.slice(1).join(' ')//neden uyarılacak
if(!(user||sebep)) return message.reply('false use! please mentions members or join reason')//bunları yazmasa uyarı mesajı atacak
let uyarısayı = await db.fetch(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`)
if(!uyarısayı) {//kullanıcın daha önceden uyarılmamışsa
db.add(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`,1)///veriye kaydettik 1
message.reply(`**succesful!** ${user.username} **members** warned ${sebep} reason **members have 1 warn!**`)
message.guild.channels.cache.get(log).send(`${user.username} warned by ${message.author}. Reason **${sebep}** members have 1 wanr!`)
user.send(`you warnetd at ${message.guild.name}. reason: ${sebep} . this yours first warn`).catch(err=> {})//kullanıcıya da mesaj gönderdik!
} else {//kullanıcı daha önceden uyarılmışsa
db.add(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`,1)//guild kısmı sunucu içerisinde uyarılacağı için user de kullanıcı için
message.reply(`member warned! **${user.username}** warned. reason: **${sebep}**! members have ${uyarısayı} warn count!`)
message.guild.channels.cache.get(log).send(`${message.author} tarafından **${user.username}** Kullanıcısı **${sebep}** sebebinden uyarıldı! Bu kullanıcının toplamda ${uyarısayı} uyarısı oldu!`)
user.send(`you warnetd at ${message.guild.name}. reason: ${sebep} .You have ${uyarısayı} warn count`).catch(err=> {})//kullanıcıya da mesaj gönderdik!
}
if(uyarısayı >= 5) {//uyarı sınırı 5 i geçince olacaklar
user.kick(sebep).catch(err=> {console.log(err)})//sunucudan atılacak Alla alla geliyom 1 snny geldim baktım doğru yaıyoruz ben sunucu sahibi olduğumum için hata aldım
message.reply(`member kicked! reason: member warn count biger then 5`)//mesaj gönderilecek
db.delete(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`)//veri temizlenecek
message.guild.channels.cache.get(log).send(`${user.tag} kicked by ${message.author} reason: member warn count bigger then 5`)
user.send(`you kicked ${message.guild.name} reason: yours' warn count bigger then 5`)//kullanıcı dm gönderilecek
   .setFooter(`${message.author.username} used`, message.author.avatarURL())
}
	
} else {
	let log = await db.fetch(`UyarıLogFrenzy_${message.guild.id}`)
if(!log) return message.reply(`Lütfen bir uyarı log kanalı ayarlayın Yoksa bu sistem çalışmaz`)
let user = message.mentions.users.first() //Uyarılacak Kullanıcı
if(message.guild.member(user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Yetkilileri uyaramam")
let sebep = args.slice(1).join(' ')//neden uyarılacak
if(!(user||sebep)) return message.reply('Yanlış kullanım! **Kullanıcı veya Sebep Belirt**')//bunları yazmasa uyarı mesajı atacak
let uyarısayı = await db.fetch(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`)
if(!uyarısayı) {//kullanıcın daha önceden uyarılmamışsa
db.add(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`,1)///veriye kaydettik 1
message.reply(`**Uyarı başarılı!** ${user.username} **Kullanıcısı** ${sebep} **sebebinden uyarıldı! Bu kullanıcın ilk uyarısı!**`)
message.guild.channels.cache.get(log).send(`${message.author} tarafından ${user.username} Kullanıcısı **${sebep}** sebebinden uyarıldı! Bu kullanıcın ilk uyarısı!`)
user.send(`${message.guild.name} sunucusunda ${sebep} sebeyile uyarıldın! Bu ilk uyarın`).catch(err=> {})//kullanıcıya da mesaj gönderdik!
} else {//kullanıcı daha önceden uyarılmışsa
db.add(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`,1)//guild kısmı sunucu içerisinde uyarılacağı için user de kullanıcı için
message.reply(`Kullanıcı Uyarıldı! **${user.username}** Kullanıcısı **${sebep}** sebebinden uyarıldı! Bu kullanıcının toplamda ${uyarısayı} uyarısı oldu!`)
message.guild.channels.cache.get(log).send(`${message.author} tarafından **${user.username}** Kullanıcısı **${sebep}** sebebinden uyarıldı! Bu kullanıcının toplamda ${uyarısayı} uyarısı oldu!`)
user.send(`${message.guild.name} sunucusunda ${sebep} sebeyile uyarıldın! Toplam uyarı sayın ${uyarısayı}`).catch(err=> {})//kullanıcıya da mesaj gönderdik!
}
if(uyarısayı >= 5) {//uyarı sınırı 5 i geçince olacaklar
user.kick(sebep).catch(err=> {console.log(err)})//sunucudan atılacak Alla alla geliyom 1 snny geldim baktım doğru yaıyoruz ben sunucu sahibi olduğumum için hata aldım
message.reply(`Kullanıcı sunucudan atıldı! Çünkü 5 uyarısı Oldu!`)//mesaj gönderilecek
db.delete(`UyarıKullanıcıFrenzy_${message.guild.id}_${user.id}`)//veri temizlenecek
message.guild.channels.cache.get(log).send(`${message.author} tarafından **${user.username}** Kullanıcısı **${sebep}** sebebinden uyarıldı ve 5 uyarıyı geçtiği için sunucudan atıldı!`)
user.send(`Sunucudan atıldın 5 Uyarı sınırını geçtin`)//kullanıcı dm gönderilecek
   .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
}
}
};
exports.conf = {
enabled: false,//kapalı?
guildOnly: false, //sunucu özel?
aliases: ['warn'], //diğer adlar
permLevel: 3 //yetki
};
exports.help = {
name: 'uyar',//help komutu
description: 'Kullanıcıyı Uyarır.',//açıklaması
usage: ''//kullanımı
};
