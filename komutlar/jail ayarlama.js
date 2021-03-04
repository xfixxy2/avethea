const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')        
exports.run = async (client, message, args) => {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('you must have admin perm')
if (require('quick.db').fetch(`dil_${message.author.id}`) == 'en') {
if (args[0] == 'channel') {
const Kanal = message.mentions.channels.first()
if (!Kanal) return message.channel.send('Please Mention a Channel!')
message.channel.send(`**Jail Channel Successfully Set to <#${Kanal.id}>.**`)
db.set(`JailLog_${message.guild.id}`,Kanal.id)
} else {
if (args[0] == 'jail-role') {
const Rol = message.mentions.roles.first()
if (!Rol) return message.channel.send('Please Mention a Role!')
message.channel.send(`**Jail Role Successfully Set to \`${message.guild.roles.cache.find(Roller => Roller.id === Rol.id).name}.\`**`)
db.set(`JailRol_${message.guild.id}`,Rol.id)
} else {
if (args[0] == 'auth-role') {
const Rol = message.mentions.roles.first()
if (!Rol) return message.channel.send('Please Mention a Role!')
message.channel.send(`**Jail Authorized Role Successfully Set to \`${message.guild.roles.cache.find(Roller => Roller.id === Rol.id).name}.\`**`)
db.set(`JailYetkiliRol_${message.guild.id}`,Rol.id)
} else {
if (args[0] == 'reset') {
message.channel.send('All Jail Settings Reseted.')
db.delete(`JailLog_${message.guild.id}`)
db.delete(`JailRol_${message.guild.id}`)
db.delete(`JailYetkiliRol_${message.guild.id}`)
} else message.channel.send('Please Select An Option! `channel | jail-role | auth-role | reset`')
}
}
}
} else {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(ayarlar.yönetici)
if (args[0] == 'kanal') {
const Kanal = message.mentions.channels.first()
if (!Kanal) return message.channel.send('Lütfen Kanal Etiketle!')
message.channel.send(`**Jail Kanali <#${Kanal.id}> Olarak Ayarlandi .**`)
db.set(`JailLog_${message.guild.id}`,Kanal.id)
} else {
if (args[0] == 'jail-rol') {
const Rol = message.mentions.roles.first()
if (!Rol) return message.channel.send('Lütfen Jail Rolünü Etiketle!')
message.channel.send(`**Jail Rolü \`${message.guild.roles.cache.find(Roller => Roller.id === Rol.id).name} .\`**`)
db.set(`JailRol_${message.guild.id}`,Rol.id)
} else {
if (args[0] == 'yetkili-rol') {
const Rol = message.mentions.roles.first()
if (!Rol) return message.channel.send('Lütfen Jail Yetkili Rolünü Etiketle!')
message.channel.send(`**Jail Authorized Role Successfully Set to \`${message.guild.roles.cache.find(Roller => Roller.id === Rol.id).name}.\`**`)
db.set(`JailYetkiliRol_${message.guild.id}`,Rol.id)
} else {
if (args[0] == 'sifirla') {
message.channel.send('Bütün Jail Rolleri Ayarlandi.')
db.delete(`JailLog_${message.guild.id}`)
db.delete(`JailRol_${message.guild.id}`)
db.delete(`JailYetkiliRol_${message.guild.id}`)
} else message.channel.send('Lütfen Bir Seçenek Belirt! `kanal | jail-rol | yetkili-rol | sifirla`')
}
}
}
}
}
 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['jail-settings','jail-setting','hapishane-ayarlar','hapishane-ayarlari','jail-ayarlari','jail-ayarlar','hapis-ayarlar','hapis-ayarlari'],
  permLevel: 0
 }

 exports.help = {
  name: 'Jail Ayarlamalari',
  description: 'Jail Ayarlarini Yapar.',
  usage: 'jail'
 }