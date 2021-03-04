const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
if (db.fetch(`dil_${message.author.id}`)) {
	    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('you must have administrator perm.') 

  let d = await db.fetch(`okanal_${message.guild.id}`)
  const sea = message.guild.channels.cache.get(d)
  if (!sea) return message.channel.send('undefined vote channel! please set vote channel')

    let yazi = args.slice(0).join(' ')
    if (!yazi) return message.channel.send('please join vote name!')
    message.channel.send(`succesful <#${d}>`)
    const embed = new Discord.MessageEmbed()
    .setColor("#b9b608")
    .setTitle('||@everyone|| ||@here||')
    .addField('Heey , vote!',`**${yazi}**`)
    .setAuthor(`Avethea Vote system`)
    .setThumbnail(`https://media.discordapp.net/attachments/763679099901575178/769911086962704454/standard-1.gif`)
    .setFooter(`created by ${message.author.tag}.`, message.author.avatarURL())
    .setTimestamp()
     sea.send('',{embed: embed}).then(m => {
   let re = m.react('✅');
   let ra = m.react('❌');
        
    })
} else {
	    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız.') 

  let d = await db.fetch(`okanal_${message.guild.id}`)
  const sea = message.guild.channels.cache.get(d)
  if (!sea) return message.channel.send('Oylama kanalı ayarlanmamış. Ayarlamak için `a!oylama-kanal #kanal`')

    let yazi = args.slice(0).join(' ')
    if (!yazi) return message.channel.send('Lütfen Oylamada Ne Olacağını Yaz!')
    message.channel.send(`Oylama gönderildi. Gönderilen kanal: <#${d}>`)
    const embed = new Discord.MessageEmbed()
    .setColor("#b9b608")
    .setTitle('||@everyone|| ||@here||')
    .addField('Heey , Oylamaya Katılmayı Unutma!',`**${yazi}**`)
    .setAuthor(`Avethea Oylama Sistemi`)
    .setThumbnail(`https://media.discordapp.net/attachments/763679099901575178/769911086962704454/standard-1.gif`)
    .setFooter(`${message.author.tag} Tarafından Yapıldı.`, message.author.avatarURL())
    .setTimestamp()
     sea.send('',{embed: embed}).then(m => {
   let re = m.react('✅');
   let ra = m.react('❌');
        
    })
}
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['oylama-yap', 'oylamayap', 'oylamalar','voting'],
 permLevel: 2,
 kategori: "yetkili"
};

exports.help = {
 name: 'oylama',
 description: 'Bulunduğunuz kanala oylama yapar.',
 usage: 'oylama'
};