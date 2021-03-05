const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Avethea Ses & Chat Mute').setDescription(`
👌 \`${client.x.prefix}mute [@üyeEtiket] 1m\`
**Yazılı kanallarda mutelemek için kullanılır**

👌 \`${client.x.prefix}}sesmute [@üyeEtiket] 1m\`
**Sesli odalarda mutelemek için kullanılır**

👌 \`${client.x.prefix}unmute [@üyeEtiket]\`
**Yazılı kanaldan mute kaldırır**

👌 \`${client.x.prefix}unsesmute [@üyeEtiket]\`
**Sesli susturmayı kaldırır**
\`\`\`Kurulum Komutları\`\`\`
\`${client.x.prefix}muteyetki-role [@rolEtiket]\`
**Muteliyecek yetkili rolünü etiketleyerek aktif yaparsınız**

\`${client.x.prefix}ses-muteyetki-role [@rolEtiket]\`
**Sesli muteliyecek yetkili rolünü etiketleyerek aktif yaparsınız**

\`${client.x.prefix}mute-log [#kanalEtiket]\`
**Mute bilgilerinin yazılacağı kanalı etiketleyiniz**
\`\`\`Ayarları Sıfırlama Komutları\`\`\`
\`${client.x.prefix}muteyetki-sil\`
**Ayarlı olan mute yetki rolünü sıfırlar**

\`${client.x.prefix}ses-muteyetki-sil\`
**Ayarlı olan ses mute yetki rolünü sıfırlar**

\`${client.x.prefix}mute-log-kapat\`
**Ayarlı olan mute kanalını sıfırlar**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'mute-sistem'
};