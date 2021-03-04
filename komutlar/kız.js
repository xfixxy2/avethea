const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (db.fetch(`dil_${message.author.id}`) == 'en') {
	let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  let tag =  db.fetch(`kayıttag_${message.guild.id}`) 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`you must have <@&${kayıtçı}> role ! `)
if(message.channel.id !== kanal) return message.channel.send(`please use in <#${kanal}> ! `)
if (!kızrol) return message.channel.send(`undefined girl role `)
if (!alınacakrol) return message.channel.send(`undefined authorize role! `)
if (tag == null) tag = ''
let member = message.mentions.members.first();
if (!member) return message.channel.send(`please mention member `)
let isim = args[1]
if (!isim) return message.channel.send(`name ? `)
let yaş = args[2]
if (!yaş) return message.channel.send(`age ?`)
member.setNickname(` ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kız `)
.setColor('BLACK')
.setDescription(`${member} \n Saver: <@!${message.author.id}> \n Register count: **${kayıtsayı ? `**${kayıtsayı}**` : "0"}**`)
.addField(`name;`, `${isim}`, true)
.addField(`age;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
} else {
	let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  let tag =  db.fetch(`kayıttag_${message.guild.id}`) 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `)
if(message.channel.id !== kanal) return message.channel.send(`Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
if (!kızrol) return message.channel.send(`Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `)
if (!alınacakrol) return message.channel.send(`Sunucuda Kayıtsız Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `)
if (tag == null) tag = ''
let member = message.mentions.members.first();
if (!member) return message.channel.send(`Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `)
let isim = args[1]
if (!isim) return message.channel.send(`İsmini Belirtmelisin ! `)
let yaş = args[2]
if (!yaş) return message.channel.send(`Yaşını Belirtmelisin ! `)
member.setNickname(` ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kız `)
.setColor('BLACK')
.setDescription(`Kız Olarak Kayıt Edilen Kullanıcı: ${member} \n Kız Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Kız Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `**${kayıtsayı}**` : "0"}**`)
.addField(`Kullanıcının ismi;`, `${isim}`, true)
.addField(`Kullanıcının Yaşı;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}