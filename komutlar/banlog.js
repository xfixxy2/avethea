const Discord = require('discord.js');
const db = require('quick.db');
const nn = new Discord.MessageEmbed().setThumbnail();
exports.run = async(client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`you must have admin perm`)).then(a => a.delete({timeout: 10000}));

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('```you must set ban-log```')

    db.set(`banlog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`succesful <#${kanal.id}>!`)
}else {
	  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}ban-log\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('```Ban log kanalını belirtmelisin```')

    db.set(`banlog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`Ban log kanalı <#${kanal.id}> Olarak ayarlandı!`)
}
  
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban-log"
}