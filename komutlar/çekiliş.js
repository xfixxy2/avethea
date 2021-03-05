const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://media.discordapp.net/attachments/763679099901575178/769911086962704454/standard-1.gif`)

.setDescription(`<a:krmz:733809296545939506> **_a!giveaway-start_**
\`giveaway start/10 minute,day,hour,how many people will win,what will be given .\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}giveaway-finish_**
\`giveaway finish.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}giveaway-stop_**
\`giveaway durdurur.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}new-person-choose_**
\`kazanan başka talihliyi seçer.\`
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***TIKLA***](https://top.gg/bot/768765003166646272)
`);






message.channel.send(master)
}else{
	const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://media.discordapp.net/attachments/763679099901575178/769911086962704454/standard-1.gif`)

.setDescription(`<a:krmz:733809296545939506> **_a!çekiliş-başlat_**
\`çekiliş başlatır/10 saniye,dakika,saat,kaç kişi kazanıcak,ne verilicek .\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}çekiliş-bitir_**
\`çekilişi bitirir.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}çekiliş-durdur_**
\`çekilişi durdurur.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}yeni-kişi-seç_**
\`kazanan başka talihliyi seçer.\`
<a:krmz:733809296545939506> ***dbl den oy verebilirsiniz.*** <a:krmz:733809296545939506> [***TIKLA***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}


exports.conf =
{
  aliases: ["çekiliş","giveaway"]
}

exports.help =
{
  name: "çekiliş",
  description: "",
  usage: "çekiliş"
}