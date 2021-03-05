const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => { 
 const dil = db.fetch(`dil_${message.author.id}`)
if (dil == 'en'){
	
	
	const ayarlar = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:750076071721828452>  **you must have \`administrator\` permission.**`);
  
if(!args[0]) return message.channel.send(`Please write any option. "add" or "remove"`)
let argümanlar = ['add', 'remove']
if(!argümanlar.includes(args[0])) return message.channel.send(`Please write any option. "add" or "remove"`)
  
if(args[0] === 'add') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(tag) return message.channel.send(`You can only 1 tag.`)
if(!args[1]) return message.channel.send(`Write tag.`)
  
await db.set(`banned-tag.${message.guild.id}`, args[1])
  
message.channel.send(new Discord.MessageEmbed()
.setDescription(`**${args[1]}** added banned tags.`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
  
if(args[0] === 'remove') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(`Hiç tag eklememişsin.`)
if(!args[1]) return message.channel.send(`Bir tag yazmalısın.`)
  
await db.delete(`banned-tag.${message.guild.id}`)
  
message.channel.send(new Discord.MessageEmbed()
.setDescription(`**${args[1]}** removed banned tags..`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
	
	
} else {
	
	const ayarlar = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:750076071721828452>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
if(!args[0]) return message.channel.send(`Yasaklı tag sistemini kullanabilmek için: **${prefix}yasaklı-tag ekle tag** yazmalısın.`)
let argümanlar = ['ekle', 'çıkar']
if(!argümanlar.includes(args[0])) return message.channel.send(`Sadece **${prefix}**yasaklı-tag ekle/çıkar** kullanabilirsin.`)
  
if(args[0] === 'ekle') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(tag) return message.channel.send(`Sadece bir tag ekleyebilirsin.`)
if(!args[1]) return message.channel.send(`Bir tag yazmalısın.`)
  
await db.set(`banned-tag.${message.guild.id}`, args[1])
  
message.channel.send(new Discord.MessageEmbed()
.setDescription(`**${args[1]}** tagı yasaklı olarak listeye eklendi.`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
  
if(args[0] === 'çıkar') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(`Hiç tag eklememişsin.`)
if(!args[1]) return message.channel.send(`Bir tag yazmalısın.`)
  
await db.delete(`banned-tag.${message.guild.id}`)
  
message.channel.send(new Discord.MessageEmbed()
.setDescription(`**${args[1]}** tagı artık yasaklı değil..`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
}

}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['banned-tag'],
    permLevel : 0
}

exports.help = {
    name : 'yasaklı-tag',
    description : 'pingi gösterisi',
    usage : ''
}