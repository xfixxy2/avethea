const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	const Lyuex = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(message.guild.name,message.guild.iconURL({dynamic:true}))
.addField('mebmer count',message.guild.memberCount,true)
.addField('online member',message.guild.members.cache.filter(Pepe => Pepe.presence.status !== 'offline').size)
.addField('offline member',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'offline').size)
.addField('dnd',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'dnd').size)
.addField('idle',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'idle').size)
.addField('online count',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'online').size)
.setFooter(client.user.username,client.user.avatarURL())
message.channel.send(Lyuex)
} else {
	const Lyuex = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(message.guild.name,message.guild.iconURL({dynamic:true}))
.addField('Üye Sayısı',message.guild.memberCount,true)
.addField('Aktif Sayısı',message.guild.members.cache.filter(Pepe => Pepe.presence.status !== 'offline').size)
.addField('Çevrimdışı Sayısı',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'offline').size)
.addField('Rahatsız Etmeyin Sayısı',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'dnd').size)
.addField('Boşta Sayısı',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'idle').size)
.addField('Online Sayısı',message.guild.members.cache.filter(Pepe => Pepe.presence.status == 'online').size)
.setFooter(client.user.username,client.user.avatarURL())
message.channel.send(Lyuex)
}
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['say'],
 permLevel: 0
}

exports.help = {
 name: 'Say',
 description: 'Say!',
 usage: 'say'
}