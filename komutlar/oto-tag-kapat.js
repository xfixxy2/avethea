const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('you must have manage messages permissions') 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
  let otorol= db.fetch(`ototag_${message.guild.id}`)
  
  if(!otorol) {
      message.channel.send(`undefined autotag.`)
      return
    } 
    db.delete(`ototag_${message.guild.id}`)
    db.delete(`ototagKanal_${message.guild.id}`)
		  	  const embed = new Discord.MessageEmbed()
  .setDescription(`succesful closed` )
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
} else {
	     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
  let otorol= db.fetch(`ototag_${message.guild.id}`)
  
  if(!otorol) {
      message.channel.send(`Bu sunucuda ototag ayarlanmamış.`)
      return
    } 
    db.delete(`ototag_${message.guild.id}`)
    db.delete(`ototagKanal_${message.guild.id}`)
		  	  const embed = new Discord.MessageEmbed()
  .setDescription(`Ototag Sistemi Başarıyla Kapatıldı` )
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
}
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ototag kapat','auto-tag-close'],
  permLevel: 3
};

exports.help = {
  name: 'oto-tag-kapat',
  description: 'nblm',
  usage: 'ototag'
};
