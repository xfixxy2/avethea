const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Yılmaz Hosting.
> **<:book:769800162422816778> |  Olgun Destek Ekibi**
> 
> **🔥 | Kaliteli Ve  Hızlı VDS Sunucuları**,
> 
> **🦋 | Anında 7/24 Canlı Destek**, 
> 
> **🐝 | Mta Minecraft Fivem sunucuları en uygun ve ucuzun adresi **,
> 
> **💐 | BILGILENDIRME: AVETHEADAN GELDIM DIYENLERE %5 İNDİRİM KOŞ EN UYGUN HIZLI VDS SUNUCUSU AL HEMDE %5 İNDİRİMLE**,
> **Sunucuya gelmeyi unutma!!.**  [***click***](https://discord.gg/vqQBRD7S5V)`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Yılmaz Hosting.
> **<:book:769800162422816778> |  Olgun Destek Ekibi**
> 
> **🔥 | Kaliteli Ve  Hızlı VDS Sunucuları**,
> 
> **🦋 | Anında 7/24 Canlı Destek**, 
> 
> **🐝 | Mta Minecraft Fivem sunucuları en uygun ve ucuzun adresi **,
> 
> **💐 | BILGILENDIRME: AVETHEADAN GELDIM DIYENLERE %5 İNDİRİM KOŞ EN UYGUN HIZLI VDS SUNUCUSU AL HEMDE %5 İNDİRİMLE**,
> **Sunucuya gelmeyi unutma!!.**  [***click***](https://discord.gg/vqQBRD7S5V)`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["sponsor","Sponsor"]
}

exports.help =
{
  name: "sponsor",
  description: "sponsor",
  usage: "sponsor"
}