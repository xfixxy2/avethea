const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en /To change the prefix, your a! prefix prefix.
<a:krmz:733809296545939506> **_${client.x.prefix}gif-ara anything_**
\`you can search anything.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}man-gif_**
\`random man search gif.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}couple-gif_**
\`random couple search gif.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}anime-gif_**
\`random anime search gif.\`
<a:krmz:733809296545939506> **_${client.x.prefix}woman-gif_**
\`random woman search gif.\`
<a:krmz:733809296545939506> **_${client.x.prefix}baby-gif_**
\`random baby search gif.\`
<a:krmz:733809296545939506> **_${client.x.prefix}animal-gif_**
\`random animal search gif.\`
<a:krmz:733809296545939506> **_${client.x.prefix}man-pp_**
\`random man search photo.\`
<a:krmz:733809296545939506> **_${client.x.prefix}woman-pp_**
\`random woman search photo.\`
<a:krmz:733809296545939506> **_${client.x.prefix}couple-pp_**
\`random couple search photo.\`
<a:krmz:733809296545939506> **_${client.x.prefix}animew-pp_**
\`random anime search photo.\`
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}gif-ara herhangi bir sey_**
\`istediginz herhangi bir seyi aratabilirisiniz.\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}man-gif_**
\`rastgele erkek gifi atar.\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}couple-gif_**
\`rastgele sevgili gifi atar.\`                
<a:krmz:733809296545939506> **_${client.x.prefix}anime-gif_**
\`rastgele anime gifi atar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}woman-gif_**
\`rastgele kadin gifi atar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}baby-gif_**
\`rastgele bebek gifi atar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}animal-gif_**
\`rastgele hayvan gifi atar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}man-pp_**
\`rastgele erkek fotosu atar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}woman-pp_**
\`rastgele kadin fotosu atar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}couple-pp_**
\`rastgele sevgili fotosu atar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}animew-pp_**
\`rastgele anime kadin fotosu atar.\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["gif","gif"]
}

exports.help =
{
  name: "gif",
  description: "",
  usage: "gif"
}