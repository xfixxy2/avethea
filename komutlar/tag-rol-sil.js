const Discord = require('discord.js');
const data = require('quick.db');

const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
const dil = db.fetch(`dil_${message.author.id}`)
if (dil == 'en') {
	var prefix = ayarlar.prefix
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setDescription(`• **You must have "administrator" permission**`));

  data.delete(`tag.role.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setDescription(`Tag role deleted!`));

} else {
	var prefix = ayarlar.prefix
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setDescription(`• \`${prefix}tag-rol-sil\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

  data.delete(`tag.role.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setDescription(`Ayarlanmış **TAG** rolü başarıyla silindi.`));

}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tag-role-clear'],
  permLevel: 0
}

exports.help = {
  name: 'tag-rol-sil'
};
