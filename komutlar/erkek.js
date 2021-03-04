const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en')
	{
		let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  let tag =  db.fetch(`kayıttag_${message.guild.id}`) 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`you must have <@&${kayıtçı}> role ! `)
if(message.channel.id !== kanal) return message.channel.send(`this command use in only <#${kanal}> ! `)
if (!erkekrol) return message.channel.send(`please set man role ! `)
if (tag == null) tag = ''
let member = message.mentions.members.first();
if (!member) return message.channel.send(`please mention a member ! `)
let isim = args[1]
if (!isim) return message.channel.send(`please join name ! `)
let yaş = args[2]
if (!yaş) return message.channel.send(`please join age ! `)
member.setNickname(`${tag} ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - mang `)
.setColor('BLACK')
.setDescription(`member: ${member} \n saver: <@!${message.author.id}> \n register count: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.addField(`name;`, `${isim}`, true)
.addField(`age;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)

	} else {
		let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  let tag =  db.fetch(`kayıttag_${message.guild.id}`) 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `)
if(message.channel.id !== kanal) return message.channel.send(`Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
if (!erkekrol) return message.channel.send(`Sunucuda Erkek Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `)
if (tag == null) tag = ''
let member = message.mentions.members.first();
if (!member) return message.channel.send(`Erkek Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `)
let isim = args[1]
if (!isim) return message.channel.send(`İsmini Belirtmelisin ! `)
let yaş = args[2]
if (!yaş) return message.channel.send(`Yaşını Belirtmelisin ! `)
member.setNickname(`${tag} ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Erkek `)
.setColor('BLACK')
.setDescription(`Erkek Olarak Kayıt Edilen Kullanıcı: ${member} \n Erkek Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Erkek Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.addField(`Kullanıcının İsmi;`, `${isim}`, true)
.addField(`Kullanıcının Yaşı;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)

	}}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}