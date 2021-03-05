const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en 
<a:krmz:733809296545939506> **_${client.x.prefix}moderation_**
\`show moderation commands.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}user_**
\`show user commands.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}system_**
\`show system commands.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}statistics_**
\`show system infos.\`
<a:krmz:733809296545939506> **_${client.x.prefix}system2_**
\`contuine to system command.\`
<a:krmz:733809296545939506> **_${client.x.prefix}register-system_**
\`show register commands.\`
<a:krmz:733809296545939506> **_${client.x.prefix}register-system2_**
\`show register commands.\`
<a:krmz:733809296545939506> **_${client.x.prefix}jail-system_**
\`show jail commands.\`
<a:krmz:733809296545939506> **_${client.x.prefix}mute-sistem_**
\`show mute commands.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-sistem_**
\`show botlist system.\`
<a:krmz:733809296545939506> **_${client.x.prefix}giveaway_**
\`show giveaway command.\`
<a:krmz:733809296545939506> **_${client.x.prefix}level-system_**
\`indicates level system.\`
<a:krmz:733809296545939506> **_${client.x.prefix}gif_**
\`show giveaway command.\`
<a:krmz:733809296545939506> **_${client.x.prefix}setup-server-system_**
\`show setup server command.\`
<a:krmz:733809296545939506> **_${client.x.prefix}advice_**
\`you can write if you have any suggestions or complaint and send my owner.\`
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}moderasyon_**
\`moderasyon komutlarını gösterir.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}kullanıcı_**
\`kullanıcı komutlarını gösterir.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}sistem_**
\`sistem komutlarını gösterir.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}istatistik_**
\`sistem hakkında bilgi verir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sistem2_**
\`sistem-2 komutunun devamı.\`
<a:krmz:733809296545939506> **_${client.x.prefix}kayıt-sistemi_**
\`kayıt komutlarını gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}kayıt-sistemi2_**
\`kayıt komutlarını gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}jail-sistem_**
\`jail komutlarını gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}mute-sistem_**
\`mute komutlarını gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}ticket-sistem_**
\`test aşamasında.\`
<a:krmz:733809296545939506> **_${client.x.prefix}çekiliş_**
\`çekiliş komutlarını gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}seviye-sistemi_**
\`seviye sistemini gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}botlist-sistem_**
\`Botlist sistemini gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}gif_**
\`gif sistemini gosterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sunucukur-sistem_**
\`sunucu kur sistemini gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}tavsiye_**
\`eğer öneriniz veya şikayetiniz varsa yazarak sahibime gönderebilirsiniz.\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["yardım","help"]
}

exports.help =
{
  name: "y",
  description: "",
  usage: "y"
}