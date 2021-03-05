const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require ('../ayarlar.json')

exports.run = async (client, message, args) => {
	var prefix = client.x.prefix
const dil = db.fetch(`dil_${message.author.id}`)
if (dil == 'en') {
	message.channel.send(new Discord.MessageEmbed()
.setTitle('Avethea Tag Role & Channel')
.setDescription(`\`${prefix}rol-tag 🚀\`
**Please set tag before start**

\`${prefix}tag-rol @rolEtiket\`
Tag the role that will be given to the member who receives the ** Tag ** in your server

\`${prefix}tag-log #kanalEtiket\`
** Sends the members who received & removed tags ** to the channel as information

\`\`\`Reset Commands\`\`\`
\`${prefix}tag-rol-sil\`
** Deletes the set role of tag **

\`${prefix}tag-log-kapat\`
** The tag you set resets the channel **

📢 System Work ?
** After installing everything here, the \`Tag \` field or output will receive and export if your server writes a message to any channel. **
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''))

} else {
	message.channel.send(new Discord.MessageEmbed()
.setTitle('Avethea Tag Rol & Kanal')
.setDescription(`\`${prefix}rol-tag 🚀\`
**Lütfen tag ayarlayınız başlamadan önce**

\`${prefix}tag-rol @rolEtiket\`
Sunucunuz da **Tag** alan üyeye verilecek rolü etiketle

\`${prefix}tag-log #kanalEtiket\`
**Tag** alan & çıkaran üyeleri kanala bilgi olarak gönderir

\`\`\`Sıfırlama Komutları\`\`\`
\`${prefix}tag-rol-sil\`
**Tagın ayarlı olan rolü siler**

\`${prefix}tag-log-kapat\`
**Ayarladığınız tag kanalı sıfırlar**

📢 Sistem Nasıl Çalışır?
**Buradaki herşeyi kurduktan sonra, \`Tag\` alan veya cıkartanın sunucunuz da herhangi bir kanala msj yazması durumunda alıp vermektedir.**
`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : ''))

}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tag-role-system'],
  permLevel: 0
}

exports.help = {
  name: 'tag-rol-sistem'
};