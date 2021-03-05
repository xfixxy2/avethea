const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en /To change the prefix, your a! prefix prefix.
<a:krmz:733809296545939506> **_${client.x.prefix}jail_**
\`jail system info.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}jail-settings yetkili-rol _**
\`jail executive role.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}jail-settings jail-rol_**
\`jail role.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}jail-settings kanal_**
\`jail channel .\`
<a:krmz:733809296545939506> **_${client.x.prefix}jail-settings sifirla_**
\`jail reset.\`
\`sample: a!jail @lyuex#2782 15s spam
second:s/hours:h day:d/minute:m\`

\`NOT: **IF THE BOT DOES NOT TAKE A ROLL OR TAKES THE ROLE OF THE BOT AT TOP
CHECK AND GIVE A MANAGER IF THERE IS NO MANAGER.**\`

<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}jail_**
\`jail sistemin bilgisini verir.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}jail-settings yetkili-rol _**
\`jail yetkili rolünü ayarlar.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}jail-settings jail-rol_**
\`jail role.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}jail-settings kanal_**
\`jail kanalını ayarlar .\`
<a:krmz:733809296545939506> **_${client.x.prefix}jail-settings sifirla_**
\`jail ayarlarını resetler.\`
\`sample: a!jail @lyuex#2782 15s spam
saniye:s/saat:h gün:d/dakika:m\`

\`NOT:**EĞER BOT ROL VERMEZSE VEYA ALMAZSA BOTUN ROLÜNÜ EN ÜSTE
ÇEKİNİZ VE YÖNETİCİSİ YOKSA YÖNETİCİ VERİNİZ.**\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["jail-sistem","jail-system"]
}

exports.help =
{
  name: "jail-sistem",
  description: "",
  usage: "jail-sistem"
}