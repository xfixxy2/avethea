const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json') 
var prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
const dil = db.fetch(`dil_${message.author.id}`)
if (dil == 'en') {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setDescription(`• you must have "administrator" permission`));

  db.delete(`tag.log.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setDescription(`Tag channel deleted`));
	
} else {
	
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setDescription(`• \`${prefix}tag-log-kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

  db.delete(`tag.log.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setDescription(`Tag kanalı başarıyla kapatıldı.`));

}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tag-log-close'],
  permLevel: 0
}

exports.help = {
  name: 'tag-log-kapat'
};