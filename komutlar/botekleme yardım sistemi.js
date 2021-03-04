const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en 
<a:krmz:733809296545939506> **_${client.x.prefix}onayla <sahipid> <botid>_**
\`Botu Onaylar.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}reddet <botid> <sebep>_**
\`Botu Reddeder.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}bot-ekleme-log #kanal_**
\`Hangi Kanalda Botu Ekliyebilceğimizi Ayarlar..\`                
<a:krmz:733809296545939506> **_${client.x.prefix}bot-ekleme-log sıfırla_**
\`Botları Ekliyebilceğimiz Kanalı Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}log-kanal #kanal_**
\`Botun Hangi Kanalda Onaylanıp/Reddedilceğini Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}log-kanal sıfırla_**
\`Botun Hangi Kanalda Onaylanıp/Reddedilceği Kanalı Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botlog #kanal_**
\`başvurunun atıldığı ve onaylanıp reddedildiğinde bilgilendirme yapılıcak kanaldır.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-yetkili-rol_**
\`Botları Onaylayıp/Reddedilcek Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-yetkili-rol sıfırla_**
\`Botları Onaylıyıp/Reddedilcek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}yetkili-log #kanal_**
\`Yetkililerin Logunu Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}yetkili-log sıfırla_**
\`Yetkililerin Logunu Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle <botid> <prefix>_**
\`Botunuzu Ekler.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-üye-rol_**
\`Bot Onaylanınca Botun Sahibine Verilicek Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-üye-rol sıfırla_**
\`Bot Onaylanınca Botun Sahibine Verilicek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-bot-rol_**
\`Bot Onaylanınca Bota Verilicek Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-bot-rol sıfırla_**
\`Bot Onaylanınca Bota Verilicek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}onayla <sahipid> <botid>_**
\`Botu Onaylar.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}reddet <botid> <sebep>_**
\`Botu Reddeder.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}bot-ekleme-log #kanal_**
\`Hangi Kanalda Botu Ekliyebilceğimizi Ayarlar..\`                
<a:krmz:733809296545939506> **_${client.x.prefix}bot-ekleme-log sıfırla_**
\`Botları Ekliyebilceğimiz Kanalı Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}log-kanal #kanal_**
\`Botun Hangi Kanalda Onaylanıp/Reddedilceğini Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}log-kanal sıfırla_**
\`Botun Hangi Kanalda Onaylanıp/Reddedilceği Kanalı Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-yetkili-rol_**
\`Botları Onaylayıp/Reddedilcek Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-yetkili-rol sıfırla_**
\`Botları Onaylıyıp/Reddedilcek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}yetkili-log #kanal_**
\`Yetkililerin Logunu Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}yetkili-log sıfırla_**
\`Yetkililerin Logunu Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle <botid> <prefix>_**
\`Botunuzu Ekler.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-üye-rol_**
\`Bot Onaylanınca Botun Sahibine Verilicek Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-üye-rol sıfırla_**
\`Bot Onaylanınca Botun Sahibine Verilicek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-bot-rol_**
\`Bot Onaylanınca Bota Verilicek Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botekle-bot-rol sıfırla_**
\`Bot Onaylanınca Bota Verilicek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["botlist-sistemi","botlist-sistemi"]
}

exports.help =
{
  name: "botlist-sistemi",
  description: "",
  usage: "y"
}