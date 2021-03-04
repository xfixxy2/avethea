const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en 
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-sistemi_**
\`botlist sistemini gösterir.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}sertifika-sistemi_**
\`sertifika sistemini gösterir.\`                  
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-sistemi_**
\`botlist sistemini gösterir.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}sertifika-sistemi_**
\`sertifika sistemini gösterir.\`         
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["botlist-sistem","botlist-sistem"]
}

exports.help =
{
  name: "botlist-sistem",
  description: "",
  usage: "y"
}