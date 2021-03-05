const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en /your a! prefix prefix to change the prefix.
<a:krmz:733809296545939506> **_${client.x.prefix}kayıt-bilgi_**
\`shows recording system-2 commands.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}kayıtayarla_**
\`the setting of the recording system is pulled.\`                  

\`IMPORTANT!!! SHOULD BE THE MANAGER OF THE BOAT + THE BOAT MUST BE ABOVE ITS OWN ROLE..\`

<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}kayıt-bilgi_**
\`kayıt sistemi-2 komutlarını gösterir.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}kayıtayarla_**
\`kayıt sisteminin ayarı çekilir.\`                  

\`ÖNEMLİ!!!   KESINLIKLE BOTUN YONETICISI OLMASI GEREKMEKTEDIR + OLARAK BOTUN VERİCEĞİ ROLDEN KENDİ RÖLÜ YUKARDA OLMASI GEREKMEKTEDİR.\`

<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["register-system2","kayıt-sistemi2"]
}

exports.help =
{
  name: "kayıt-sistemi2",
  description: "",
  usage: "kayıt-sistemi2"
}