const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:761985810643025960> **_${client.x.prefix}avatar_**
\`shows avatar.\`               
 <a:krmz:761985810643025960> **_${client.x.prefix}user-information_**
\`shows user information.\`                   
 <a:krmz:761985810643025960> **_${client.x.prefix}history_**
\`shows date.\`                                  
<a:krmz:761985810643025960> **_${client.x.prefix}role_**
\`gives information about your role.\`
<a:krmz:761985810643025960> **_${client.x.prefix}ping_**
\` measures the bot's ping.\`
<a:krmz:761985810643025960> **_${client.x.prefix}authority_**
\`show authority.\`
<a:krmz:761985810643025960> ***you can vote on dbl.*** <a:krmz:761985810643025960> [***TIKLA***](https://top.gg/bot/768765003166646272)
<a:krmz:761985810643025960> ***support the server.*** <a:krmz:761985810643025960> [***TIKLA***](https://discord.gg/wMTfpAC)
<a:krmz:761985810643025960> ***to add the bot .*** <a:krmz:761985810643025960> [***TIKLA***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=8)
`);





message.channel.send(master)
}else{
	const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:761985810643025960> **_${client.x.prefix}avatar_**
\`avatar'ı gösterir.\`               
 <a:krmz:761985810643025960> **_${client.x.prefix}kullanıcı-bilgi_**
\`kullanıcı bilgilerini gösterir.\`                   
 <a:krmz:761985810643025960> **_${client.x.prefix}tarih_**
\`tarih'i gösterir.\`                                  
<a:krmz:761985810643025960> **_${client.x.prefix}rolbilgi_**
\`rolünüz hakkında bilgi verir.\`
<a:krmz:761985810643025960> **_${client.x.prefix}ping_**
\`pingini ölçer.\`
<a:krmz:761985810643025960> **_${client.x.prefix}yetkilerim_**
\`sizde olan yetkilerinizi gösterir.\`
<a:krmz:761985810643025960> ***Dblde botumuza oy vermek için.*** <a:krmz:761985810643025960> [***TIKLA***](https://top.gg/bot/768765003166646272)
<a:krmz:761985810643025960> ***Destek Sunucumuza Gelmek İsterseniz.*** <a:krmz:761985810643025960> [***TIKLA***](https://discord.gg/wMTfpAC)
<a:krmz:761985810643025960> ***Botu Sunucunuza Eklemek İsterseniz.*** <a:krmz:761985810643025960> [***TIKLA***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=8)
`);


message.channel.send(master)	
	
}
}


exports.conf =
{
  aliases: ["kullanıcı","user","User"]
}

exports.help =
{
  name: "kullanıcı",
  description: "",
  usage: "kullanıcı"
}