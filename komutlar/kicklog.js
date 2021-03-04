const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:dikkat:707520390242631804>you must have admin perm')

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('<a:dikkat:707520390242631804>please mention log channel')

    db.set(`kicklog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`succesful!<a:tiks:743841333692727378>`)

}  else {
	   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:dikkat:707520390242631804>Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')

   	let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('<a:dikkat:707520390242631804>ick log Kanalını Belirtmelisin')

    db.set(`kicklog_${message.guild.id}`, kanal.id)
   
    return message.channel.send(`Kick log kanalı <#${kanal.id}> Olarak ayarlandı!<a:tiks:743841333692727378>`)

}
 }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "kick-log",
        description: "kick kanal.ayarlar",
        usage: "",
}