const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : '').setDescription(`• \`${prefix}tag-log \` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!message.mentions.channels.first()) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir kanal etiketlemeyi unuttunuz.'));
  let mentionChannel = message.mentions.channels.first();
  data.set(`tag.log.${message.guild.id}`, mentionChannel.id);
  message.channel.send(new Discord.MessageEmbed().setDescription(`Tag kanalı başarıyla açıldı. ${mentionChannel} kanalı olarak seçtiniz.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tag-log'],
  permLevel: 0
}

exports.help = {
  name: 'tag-log'
};