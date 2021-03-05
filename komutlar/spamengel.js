const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('> you must have administrator permission').then(x => x.delete({timeout:15000}))
if (args[0] == 'open') {
const Kanal = message.mentions.channels.first()
if (!Kanal) return message.channel.send('mentions channel!').then(x => x.delete({timeout:15000}))
message.channel.send('succesful opened!')
db.set(`SpamKoruma_${message.channel.id}`,'Aktif')
db.set(`SpamKanal_${message.guild.id}`,Kanal.id)
} else {
if (args[0] == 'close') {
if (!db.has(`SpamKoruma_${message.channel.id}`)) return message.channel.send('Spam Guard is not enabled!')
db.delete(`SpamKoruma_${message.channel.id}`)
db.delete(`SpamKanal_${message.guild.id}`)
message.channel.send('succesful!')
} else message.channel.send('please select open or close')
}
} else {
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('> Bu Komutu Kullanabilmek İçin `YONETICI` Yetkisine Sahip Olmanız Gerekli!').then(x => x.delete({timeout:15000}))
if (args[0] == 'aç') {
const Kanal = message.mentions.channels.first()
if (!Kanal) return message.channel.send('Kanal Etiketlemeyi Unuttun!').then(x => x.delete({timeout:15000}))
message.channel.send('Spam Koruma Başarıyla Açıldı! Yönetici Yetkisi Olmayanları Engelleyeceğim Ve <#'+Kanal.id+'> Kanalına Atacağım!')
db.set(`SpamKoruma_${message.channel.id}`,'Aktif')
db.set(`SpamKanal_${message.guild.id}`,Kanal.id)
} else {
if (args[0] == 'kapat') {
if (!db.has(`SpamKoruma_${message.channel.id}`)) return message.channel.send('Zaten Spam Koruma Aktif Değil!')
db.delete(`SpamKoruma_${message.channel.id}`)
db.delete(`SpamKanal_${message.guild.id}`)
message.channel.send('Spam Koruma Kapatıldı!')
} else message.channel.send('Lütfen Bir Seçenek Belirt! `aç` Veya `kapat`')
}
}
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['spam-koruma','spam-protection'],
 permLevel: 0
}

exports.help = {
 name: 'Spam Koruma',
 description: 'Sunucuya Zarar Veremezsiniz!',
 usage: 'spam-koruma'
}