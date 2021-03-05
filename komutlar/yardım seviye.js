const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en /your a! prefix prefix to change the prefix.
<a:krmz:733809296545939506> **_${client.x.prefix}level-log_**
\`Set the level log channel.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}level-log reset_**
\`Set Xp Value Per Message.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}level-xp_**
\`You Set the Xp Value To Be Given Per Message.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}level-xp reset_**
\`You Reset the Xp Value To Be Given Per Message.\`
<a:krmz:733809296545939506> **_${client.x.prefix}levels_**
\`Shows Your Level.\`
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}seviye-log_**
\`Seviye log Kanalını Ayarlasınız.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}seviye-log sıfırla_**
\`Seviye Log Kanalını Sıfırlarsınız.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}seviye-xp_**
\`Mesaj Başına Verilecek Xp Değerini Ayarlarsınız.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}seviye-xp sıfırla_**
\`Meaj Başına Verilecek Xp Değerini Sıfırlarsınız.\`
<a:krmz:733809296545939506> **_${client.x.prefix}seviyem_**
\`Seviyenizi Gösterir.\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["level-system","seviye-sistemi"]
}

exports.help =
{
  name: "seviye-sistemi",
  description: "",
  usage: "seviye"
}