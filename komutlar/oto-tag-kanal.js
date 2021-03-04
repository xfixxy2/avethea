const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('you must have administrator ')
     let otoTagkanal = message.mentions.channels.first();
     if (!otoTagkanal) return message.channel.send('please set ototag channel')
     db.set(`ototagKanal_${message.guild.id}`, message.mentions.channels.first().id)
     let i = await db.fetch(`ototagKanal_${message.guild.id}`)
            	  	  const embed = new Discord.MessageEmbed()
  .setDescription("succesful")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
} else {
	     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Otomatik tag komudunun log kanalını ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let otoTagkanal = message.mentions.channels.first();
     if (!otoTagkanal) return message.channel.send('<Otomatik tag komudunun log kanalını ayarlamak için bir kanal etiketlemeniz gerekli. `a!oto-tag-kanal #kanal`')
     db.set(`ototagKanal_${message.guild.id}`, message.mentions.channels.first().id)
     let i = await db.fetch(`ototagKanal_${message.guild.id}`)
            	  	  const embed = new Discord.MessageEmbed()
  .setDescription(`Ototag Kanalı Başarıyla Ayarlandı Kanal <#${i}> Olarak Ayarlandı!` + "\n\n Kapatmak için **`a!oto-tag-kapat`** Yazabilirsiniz!")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
}
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['auto-tag-channel'],
 permLevel: 3
};

exports.help = {
 name: 'oto-tag-kanal',
 description: 'neblm',
 usage: 'ototagkanal'
};
