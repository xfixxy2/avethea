const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)

.setDescription(`<a:krmz:733809296545939506> **_${client.x.prefix}sayaç_**
\`show sayaç command.\`           
<a:krmz:733809296545939506> **_${client.x.prefix}channel protection open/close_**
\`prevents channel deletion (in maintenance).\`
<a:krmz:733809296545939506> **_${client.x.prefix}channel-guard-role_**
\`No one else can delete the role you set (in maintenance).\`
<a:krmz:733809296545939506> **_${client.x.prefix}channel-protect-log_**
\`When the channel is deleted, the channel you selected will be notified.\`
<a:krmz:733809296545939506> **_${client.x.prefix}server image_**
\` server show your picture.\`
<a:krmz:733809296545939506> **_${client.x.prefix}idban_**
\`a!idban id .\` 
<a:krmz:720824590758051930> **_${client.x.prefix}link-blocking <open>/<close>_**
\`blocks ads on the server.\`
<a:krmz:720824590758051930> **_${client.x.prefix}reklam-kick <open>/<close>_**
\`Kicks the advertiser directly on the server.\`
<a:krmz:720824590758051930> **_${client.x.prefix}ad-blocking<open>/<close>_**
\`reklam blocking.\`
<a:krmz:720824590758051930> **_${client.x.prefix}ad-scan_**
\`finds advertisers in the playing part.\`
<a:krmz:720824590758051930> **_${client.x.prefix}role-protect-reset_**
\`Resets your role protection setting, you can turn on a role.\`
<a:krmz:720824590758051930> **_${client.x.prefix}role-protect <open>/<close> _**
\`restores the role that was deleted.\`
<a:krmz:720824590758051930> **_${client.x.prefix}server information _**
\`gives information about the server.\`
<a:krmz:720824590758051930> **_${client.x.prefix}nuke _**
\`deletes the channel from the beginning.\`
<a:krmz:733809296545939506> ***support to server.*** <a:krmz:733809296545939506> [***click***](https://discord.gg/wMTfpAC)
<a:krmz:733809296545939506> ***to add the bot.*** <a:krmz:733809296545939506> [***click***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=8)
<a:krmz:733809296545939506> ***you can vote on dbl.*** <a:krmz:733809296545939506> [***click***](https://top.gg/bot/768765003166646272)
`);





message.channel.send(master)
}else{
	const master = new Discord.MessageEmbed()
.setColor('#0c0a0a')
.setTitle(' <a:krmz:733809296545939506> Avethea ')
.setThumbnail(`https://i.hizliresim.com/EDvKLT.gif`)



.setDescription(`<a:krmz:733809296545939506> **_${client.x.prefix}sayaç_**
\`sayaç komutlarını gösterir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}kanal-koruma aç/kapat_**
\`kanal koruma sistemi aktif hale getirilir.\`
<a:krmz:733809296545939506> **_${client.x.prefix}anti-raid aç/kapat_**
\`Taç sahibi hariç kimse sunucuya bot ekleyemez **UYARI** Botun rolunu en üste çekiniz.\`
<a:krmz:733809296545939506> **_${client.x.prefix}sunucuresmi_**
\`modlog'u sıfırlar.\`
<a:krmz:733809296545939506> **_${client.x.prefix}idban_**
\`a!idban id .\` 
<a:krmz:720824590758051930> **_${client.x.prefix}link-engelleme <aç>/<kapat>_**
\`sunucuda reklam engeller.\`
<a:krmz:720824590758051930> **_${client.x.prefix}reklam-kick<aç>/<kapat>_**
\`sunucuda reklam yapanı diret kickler.\`
<a:krmz:720824590758051930> **_${client.x.prefix}reklam-engelleme<kısıt>/<kapat>_**
\`reklam engeller.\`
<a:krmz:720824590758051930> **_${client.x.prefix}reklam-taraması_**
\`oynuyor kısmın'da reklam yapanları bulur.\`
<a:krmz:720824590758051930> **_${client.x.prefix}koruma <aç>/<kapat> _**
\`silidiği rolü geri getirir.\`
<a:krmz:720824590758051930> **_${client.x.prefix}sunucubilgi _**
\`sunucu hakkında bilgi verir.\`
<a:krmz:720824590758051930> **_${client.x.prefix}nuke _**
\`yazdığınız kanalı siler başdan açar ayarlanmış şekilde.\`
<a:krmz:733809296545939506> ***Destek Sunucumuza Gelmek İsterseniz.*** <a:krmz:733809296545939506> [***TIKLA***](https://discord.gg/wMTfpAC)
<a:krmz:733809296545939506> ***Botu Sunucunuza Eklemek İsterseniz.*** <a:krmz:733809296545939506> [***TIKLA***](https://discord.com/oauth2/authorize?client_id=768765003166646272&scope=bot&permissions=8)
<a:krmz:733809296545939506> ***Dblde botumuza oy vermek için.*** <a:krmz:733809296545939506> [***TIKLA***](https://top.gg/bot/768765003166646272)
`);

message.channel.send(master)	
	
}
}

exports.conf =
{
  aliases: ["sistem2","system2"]
}

exports.help =
{
  name: "sistem2",
  description: "",
  usage: "sistem"
}