const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en /To change the prefix, your a! prefix prefix.
 <a:krmz:733809296545939506> **_${client.x.prefix}setup-server_**
\`klasik bir sunucu kurar.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}setup-server-gif_**
\`gif sunucusu kurar.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}setup-server-j4j_**
\`j4j sunucusu kurar .\`
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.                        
 <a:krmz:733809296545939506> **_${client.x.prefix}sunucu-kur _**
\`klasik bir sunucu kurar.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}sunucu-kur-gif_**
\`gif sunucusu kurar.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}sunucu-kur-j4j_**
\`j4j sunucusu kurar .\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["sunucukur-sistem","setup-server-system"]
}

exports.help =
{
  name: "sunucukur-sistem",
  description: "",
  usage: "sunucukur-sistem"
}