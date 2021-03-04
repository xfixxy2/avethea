const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:720824590758051930> **_${client.x.prefix}ban_**
\`bans from the server.\`   
<a:krmz:720824590758051930> **_${client.x.prefix}kick_**
\`bans from the server.\`
<a:krmz:720824590758051930> **_${client.x.prefix}clear_**
\`delete message.\`
<a:krmz:720824590758051930> **_${client.x.prefix}channel-lock_**
\`channel lock (a!channel-lock 1m.)\`
<a:krmz:720824590758051930> **_${client.x.prefix}rules_**
\`rules command.\`
<a:krmz:720824590758051930> **_${client.x.prefix}slowmode_**
\`channel slowmode settings.\`
<a:krmz:720824590758051930> **_${client.x.prefix}authorities_**
\`authorities it shows.\`
<a:krmz:720824590758051930> **_${client.x.prefix}warn_**
\`warn the user.\`
<a:krmz:720824590758051930> **_${client.x.prefix}modlog_**
\`transfers messages to the channel.\`
<a:krmz:720824590758051930> **_${client.x.prefix}warn-log_**
\`notifies the warned person to the log channel.\`
<a:krmz:720824590758051930> **_${client.x.prefix}warn-sayı_**
\`tells how many warnings the user has.\`
<a:krmz:720824590758051930> **_${client.x.prefix}sa-as_**
\`It gives an auto reply on your server.\`
<a:krmz:720824590758051930> ***support the server.*** <a:krmz:720824590758051930> [***click***](https://discord.gg/wMTfpAC)
<a:krmz:720824590758051930> ***to add the bot.*** <a:krmz:720824590758051930> [***click***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=136)
<a:krmz:720824590758051930> ***dbl the vote.*** <a:krmz:720824590758051930> [***click***](https://top.gg/bot/768765003166646272)
`);
message.channel.send(master)

}else{
	const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:720824590758051930> **_${client.x.prefix}ban_**
\`istediğin kişiyi sunucudan banlar.\`   
<a:krmz:720824590758051930> **_${client.x.prefix}kick_**
\`istediğin kişiyi sunucudan atar.\`
<a:krmz:720824590758051930> **_${client.x.prefix}sil_**
\`istediğiniz yazıyı siler.\`
<a:krmz:720824590758051930> **_${client.x.prefix}kanal-kilit 1 dakika_**
\`kanalı kapatır (yani kilitler) dakika cinsinden yazınız.\`
<a:krmz:720824590758051930> **_${client.x.prefix}kurallar_**
\`otomatik kuralları atar.\`
<a:krmz:720824590758051930> **_${client.x.prefix}kurallar2_**
\`otomatik kuralları atar.\`
<a:krmz:720824590758051930> **_${client.x.prefix}yavaşmod_**
\`kanaldaki süreyi ayarlar.\`
<a:krmz:720824590758051930> **_${client.x.prefix}yetkililer_**
\`sunucudaki yetkilileri gösterir.\`
<a:krmz:720824590758051930> **_${client.x.prefix}uyar_**
\`kişiye uyarı verir ve kaydeder.\`
<a:krmz:720824590758051930> **_${client.x.prefix}modlog_**
\`sunucudakı herhangı bır hareketı modloga atar.\`
<a:krmz:720824590758051930> **_${client.x.prefix}uyarı-log_**
\`uyarılan kişiyi log kanalına bildirir.\`
<a:krmz:720824590758051930> **_${client.x.prefix}uyarı-sayı_**
\`kullanıcının kaç uyarısı olduğunu söyler.\`
<a:krmz:720824590758051930> **_${client.x.prefix}sa-as_**
\`sunucunuzda sa as oto cevabı verir.\`
<a:krmz:720824590758051930> ***Destek Sunucumuza Gelmek İsterseniz.*** <a:krmz:720824590758051930> [***TIKLA***](https://discord.gg/wMTfpAC)
<a:krmz:720824590758051930> ***Botu Sunucunuza Eklemek İsterseniz.*** <a:krmz:720824590758051930> [***TIKLA***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=136)
<a:krmz:720824590758051930> ***Dblde botumuza oy vermek için.*** <a:krmz:720824590758051930> [***TIKLA***](https://top.gg/bot/768765003166646272)
`);



message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["moderasyon","moderation"]
}

exports.help =
{
  name: "moderasyon",
  description: "",
  usage: "moderasyon"
}