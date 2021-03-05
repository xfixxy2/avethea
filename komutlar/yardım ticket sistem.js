const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Has language support= a!lang tr , a!lang en /To change the prefix, your a! prefix prefix.
<a:krmz:733809296545939506> **_${client.x.prefix}ekle [Etiket] (kanal)_**
\`Ticket a başka birisini/rolü eklersiniz..\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}ticket-sil [Etiket] (kanal)_**
\`Ticket a ekli birisini/rolü silersiniz..\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}kapat [Etiket] (kanal)_**
\`Ticket ı kapatırsınız..\`                
<a:krmz:733809296545939506> **_${client.x.prefix}aç [Etiket] (kanal)_**
\`Ticket ı açarsınız..\`
<a:krmz:733809296545939506> **_${client.x.prefix}bilet-sil_**
\`Ticket ı silersiniz.\`
<a:krmz:733809296545939506> **_${client.x.prefix}ticket-kanal [ayarla/sıfırla] (kanal)_**
\`Ticket mesajının kanalını ayarlarsınız..\`
<a:krmz:733809296545939506> **_${client.x.prefix}ticket [gönder])_**
\`Ticket mesajını yollar..\`
`);

message.channel.send(master)	

} else {
	const master = new Discord.MessageEmbed()
.setColor('#AZURE')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506>Dil desteği mevcuttur= a!lang tr , a!lang en /prefix değiştirmek için a!prefix prefixiniz.
<a:krmz:733809296545939506> **_${client.x.prefix}ekle [Etiket] (kanal)_**
\`Ticket a başka birisini/rolü eklersiniz..\`                        
 <a:krmz:733809296545939506> **_${client.x.prefix}ticket-sil [Etiket] (kanal)_**
\`Ticket a ekli birisini/rolü silersiniz..\`                  
 <a:krmz:733809296545939506> **_${client.x.prefix}kapat [Etiket] (kanal)_**
\`Ticket ı kapatırsınız..\`                
<a:krmz:733809296545939506> **_${client.x.prefix}aç [Etiket] (kanal)_**
\`Ticket ı açarsınız..\`
<a:krmz:733809296545939506> **_${client.x.prefix}bilet-sil_**
\`Ticket ı silersiniz.\`
<a:krmz:733809296545939506> **_${client.x.prefix}ticket-kanal [ayarla/sıfırla] (kanal)_**
\`Ticket mesajının kanalını ayarlarsınız..\`
<a:krmz:733809296545939506> **_${client.x.prefix}ticket [gönder])_**
\`Ticket mesajını yollar. **EĞER EMOJIYE BASDIGINIZDA BOT KANAL ACMIYORSA TEKRARDAN a!ticket gönder DERSENIZ SORUN COZULUCEKTIR**\`
<a:krmz:733809296545939506> ***dblden oy verebilirsiniz.*** <a:krmz:733809296545939506> [***tıkla***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}




exports.conf =
{
  aliases: ["ticket-sistem","ticket-system"]
}

exports.help =
{
  name: "ticket-sistem",
  description: "",
  usage: "ticket-sistem"
}