const Discord = require('discord.js');
exports.run = (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {
	  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('***Creators:***')
 
    
.setDescription(` <@758786208892715010>
<@675593025468235806>

<a:ehuehu:768123107260104724> Im so lucky because him is my owner `)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(embed)
} else {
	  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('***Yapımcılarım:***')
 
    
.setDescription(` <@758786208892715010>
<@675593025468235806>

<a:ehuehu:768123107260104724> Beni Yaptıkları için Çok Şanslıyım `)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(embed)
	
}
  
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım','yapımcı'],
  kategori: "AVATAR KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Etiketlediğiniz veya kendinizin profil fotosunu gösterir.',
  usage: 'av @etiket ya da avatar'
};