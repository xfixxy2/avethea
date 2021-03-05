const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
const dil = data.fetch(`dil_${message.author.id}`)
if (dil == 'en') {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setDescription(`• You must have "administrator" permission`));
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed().setDescription('you must mention role.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`tag.role.${message.guild.id}`, mentionRole.id);
  message.channel.send(new Discord.MessageEmbed().setDescription(`The tag will be given to the field: ${mentionRole}.`));
	
} else {
	  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setDescription(`• \`${prefix}tag-rol\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir rol etiketlemeyi unuttunuz.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`tag.role.${message.guild.id}`, mentionRole.id);
  message.channel.send(new Discord.MessageEmbed().setDescription(`Tagı alana verilecek: ${mentionRole} rolü olarak seçtiniz.`));

}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tag-role','tag-rol'],
  permLevel: 0
}

exports.help = {
  name: 'tag-rol'
};