const Discord = require('discord.js');
const db = require('quick.db');
const nn = new Discord.MessageEmbed().setThumbnail();


	exports.run = async(client, message, args) => {//Komutu çalıştıracak olan yer
if (db.fetch(`dil_${message.author.id}`) == 'en') {
		let rol = db.fetch(`banrol_${message.guild.id}`)
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`you must have admin perm`)).then(a => a.delete({timeout: 10000}));
	let banlog = db.fetch(`banlog_${message.guild.id}`)
	if(!banlog) return message.channel.send('please set ban-log system')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ')
	if (!sebep) sebep = 'no reason.'
     if(!user) return message.channel.send(' ``you must mention member.``')
     if(user.id === message.author.id) return message.channel.send(' ``you cant ban yourself.``')
     if(user.id === client.user.id) return message.channel.send(' ``you cant ban me.``')
  if(user.id === message.guild.ownerID) return message.channel.send(' ``you cant ban owner.``')
    if (!message.guild.member(user).bannable) return message.reply('``i cant ban this member.``');

   message.channel.send('are you sure ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('banned')
    .addField('author', `${message.author.tag}`)
    .addField('member', user)
    .addField('reason', sebep)
    client.channels.cache.get(banlog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('canceled.')
      })
    })
 })
} else {
		let rol = db.fetch(`banrol_${message.guild.id}`)
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`a!ban\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
	let banlog = db.fetch(`banlog_${message.guild.id}`)
	if(!banlog) return message.channel.send('Ban log sistemi ayarlanmamış. Ayarlamak İçin a!ban-log #kanal')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(' ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send(' ``Kendini banlayamazsın.``')
     if(user.id === client.user.id) return message.channel.send(' ``Botu banlayamazsın.``')
  if(user.id === message.guild.ownerID) return message.channel.send(' ``Sunucu sahibini banlayamazsın.``')
    if (!message.guild.member(user).bannable) return message.reply('``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('Kişi banlandı')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(banlog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('Banlama işlemi iptal edildi.')
      })
    })
 })
}
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:['ban'],
	permlevel: 0
};

exports.help = {
	name: "ban"
}