const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
if (require('quick.db').fetch(`dil_${message.author.id}`) == 'en') {
	
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('⚠ Uyarı ⚠', '`sunucubilgi` Adlı Komutu Özel Mesajlarda Kullanamazsın!')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor("#15f153")
    .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
    .addField('🔸 Server Name:', message.guild.name)
    .addField('🔸 server ID:', message.guild.id)
    .addField('🔸 channel count:', message.guild.channels.cache.size)
    .addField('🔸 server region:', message.guild.region)
    .addField('🔸 member count:', message.guild.memberCount)
    .addField('🔸 server owner:', `<@${message.guild.owner.id}>` + ' (' + message.guild.ownerID + ')')
    .addField('🔸 crated date:', message.guild.createdAt)
    .setThumbnail(message.guild.iconURL({dynamic:true}));
    return message.channel.send(sunucubilgi);
    }
} else {
	
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('⚠ Uyarı ⚠', '`sunucubilgi` Adlı Komutu Özel Mesajlarda Kullanamazsın!')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor("#15f153")
    .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
    .addField('🔸 Sunucu Adı:', message.guild.name)
    .addField('🔸 Sunucu ID:', message.guild.id)
    .addField('🔸 Kanal Sayısı:', message.guild.channels.cache.size)
    .addField('🔸 Sunucu Bölgesi:', message.guild.region)
    .addField('🔸 Üye Sayısı:', message.guild.memberCount)
    .addField('🔸 Sunucu Sahibi:', `<@${message.guild.owner.id}>` + ' (' + message.guild.ownerID + ')')
    .addField('🔸 Oluşturulma Tarihi:', message.guild.createdAt)
    .setThumbnail(message.guild.iconURL({dynamic:true}));
    return message.channel.send(sunucubilgi);
    }
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi','server information'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};