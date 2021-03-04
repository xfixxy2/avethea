const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en 
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika_**
\`Sertifika Basvurusu Yaparsınız.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}sertifika-onay <botsahipid> <botid>_**
\`Sertifika Başvurusunu Onaylar.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}sertifika-reddet <botsahipid> <botid> <sebeb>_**
\`Sertifika Başvurusunu Reddeder.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-üye-rol @rol_**
\`Sertifika Onaylanınca Bot Sahibine Verilcek Olan Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-üye-rol sıfırla_**
\`Sertifika Onaylanınca Bot Sahibine Verilcek Olan Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-bot-rol @rol_**
\`Sertifika Onaylayınca Bota Verilicek Rolü ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-log #kanal_**
\`Sertifikaların Onaylayıp/Reddedilicek Logunu Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-log- sıfırla_**
\`Sertifikaların Onaylıyıp/Reddedilicek Logunu Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-bot-rol sıfırla_**
\`Sertifika Onaylayınca Bota Verilicek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-ekleme-log #kanal_**
\`Hangi Kanalda Sertifika Başvurusu Yapılacağını Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-ekleme-log sıfırla_**
\`Hangi Kanalda Sertifika Başvurusu Yapılacağını Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifikalog #kanal_**
\`Sertifika'nın Onaylanıp/Reddedileceği Logu Ayarlar..\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifikalog sıfırla_**
\`Sertifika'nın Onaylanıp/Reddedileceği Logu Sıfırlar.\`
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika_**
\`Sertifika Basvurusu Yaparsınız.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}sertifika-onay <botsahipid> <botid>_**
\`Sertifika Başvurusunu Onaylar.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}sertifika-reddet <botsahipid> <botid> <sebeb>_**
\`Sertifika Başvurusunu Reddeder.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-üye-rol @rol_**
\`Sertifika Onaylanınca Bot Sahibine Verilcek Olan Rolü Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-üye-rol sıfırla_**
\`Sertifika Onaylanınca Bot Sahibine Verilcek Olan Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-bot-rol @rol_**
\`Sertifika Onaylayınca Bota Verilicek Rolü ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-log #kanal_**
\`Sertifikaların Onaylayıp/Reddedilicek Logunu Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-log- sıfırla_**
\`Sertifikaların Onaylıyıp/Reddedilicek Logunu Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-bot-rol sıfırla_**
\`Sertifika Onaylayınca Bota Verilicek Rolü Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-ekleme-log #kanal_**
\`Hangi Kanalda Sertifika Başvurusu Yapılacağını Ayarlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifika-ekleme-log sıfırla_**
\`Hangi Kanalda Sertifika Başvurusu Yapılacağını Sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifikalog #kanal_**
\`Sertifika'nın Onaylanıp/Reddedileceği Logu Ayarlar..\`
<a:krmz:733809296545939506> **_${client.x.prefix}sertifikalog sıfırla_**
\`Sertifika'nın Onaylanıp/Reddedileceği Logu Sıfırlar.\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["sertifika-sistemi","sertifika-sistemi"]
}

exports.help =
{
  name: "sertifika-sistemi",
  description: "",
  usage: "sertifika-sistem"
}