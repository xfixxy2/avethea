const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  var prefix = ayarlar.prefix
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${prefix}rol-tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
if(!args[0]) return message.channel.send(nn.setDescription(`Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`)).then(a => a.delete({timeout: 10000}));

data.set(`roltag.${message.guild.id}`, args[0]);
message.channel.send(nn.setDescription(`Tag rol sistem başarıyla **\`${args[0]}\`** olarak seçtiniz.`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'rol-tag'
};