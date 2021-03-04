const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const moment = require('moment')
require('moment-duration-format')
const ms = require('ms')
moment.locale('tr')        
exports.run = async (client, message, args) => {
const JailYetkili = db.fetch(`JailYetkiliRol_${message.guild.id}`)
const Jail = db.fetch(`JailRol_${message.guild.id}`)
const JailKanal = db.fetch(`JailLog_${message.guild.id}`)
if (require('quick.db').fetch(`dil_${message.author.id}`) == 'en') {
if (!JailYetkili) return message.channel.send('Jail Authorized Role Not Set \n**Ex: ``'+ client.x.prefix +'jail-settings auth-role @JailAuth``**')
if (!Jail) return message.channel.send('Jail Role Not Set \n**Ex: ``'+ client.x.prefix +'jail-settings jail-role @Jail``**')
if (!JailKanal) return message.channel.send('Jail Channel Role Not Set \n**Ex: ``'+ client.x.prefix +'jail-settings channel #jail-log``**')
if (!message.member.roles.cache.has(JailYetkili)) return message.channel.send(`> You Must Have \`${message.guild.roles.cache.find(Roles => Roles.id === JailYetkili).name}\` Role For Use Command`)
const JaillenecekMal = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
if (!JaillenecekMal) return message.channel.send('Please Mention a Member or Join Member ID')
const Süre = args[1]
if (!Süre) return message.channel.send('Plase Join Time')
const Sebep = args.slice(2).join(' ')
if (!Sebep) Sebep = 'Unknown'
const JailE = new Discord.MessageEmbed()
.setColor('ORANGE')
.setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
.setDescription(`<@${JaillenecekMal.id}> (\`${JaillenecekMal.id}\`) Jailed by <@${message.author.id}>.
  
• Auth: <@${message.author.id}> (\`${message.author.id}\`)
• Time: \`${Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')}\`
• Channel: \`${message.channel.name}\`

• Reason: \`${Sebep}\`

• Jail Time: \`${moment(new Date().getTime()).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
• Jail Finish: \`${moment(new Date().getTime()+ms(args[1])).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
`)
message.guild.channels.cache.get(JailKanal).send(JailE).catch(() => {})

const JailSon = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
.setDescription(`<@${JaillenecekMal.id}> (\`${JaillenecekMal.id}\`) Jail' Finished.
  
• Auth: <@${message.author.id}> (\`${message.author.id}\`)
• Time: \`${Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')}\`
• Channel: \`${message.channel.name}\`

• Reason: \`${Sebep}\`

• Jail Time: \`${moment(new Date().getTime()).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
• Jail Finish At: \`${moment(new Date().getTime()+ms(args[1])).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
`)
function Join (a,b) {
a.join(', ')
b.join(', ')
}
JaillenecekMal.roles.cache.forEach(async Roles => {
const Blank = []
Blank.push(Roles.id)
//db.set(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles`,[])
//db.set(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles`,Join(Roles.name))
//db.set(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles_${Roles.id}`, Roles.id)
JaillenecekMal.roles.remove(Roles.id)
 JaillenecekMal.roles.add(Jail)
message.react('✅')  
setTimeout(async () => {
    JaillenecekMal.roles.remove(Jail)
    JaillenecekMal.roles.add([Blank.join("', '"+"'")]) // db.fetch(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles_${Roles.id}`).join(', ')
  },ms(Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')))
})
setTimeout(async () => {
    client.channels.cache.get(JailKanal).send(JailSon)
  },ms(Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')))

/*setTimeout(async () => {
message.guild.roles.cache.forEach(async Roles => {
const Roller = await db.fetch(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles_${Roles.id}`)
if(Roller != Roles.id) return;
if(Roller){JaillenecekMal.roles.add(Roller)}
db.delete(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles_${Roles.id}`)
})
}, ms(Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')))*/
} else {
if (!JailYetkili) return message.channel.send('Jail Yetkili Rolü Ayarlanmamış \n**Örn: ``'+ client.x.prefix +'jail-settings auth-role @JailAuth``**')
if (!Jail) return message.channel.send('Jail Rolü Ayarlanmamış \n**Örn: ``'+ client.x.prefix +'jail-settings jail-role @Jail``**')
if (!JailKanal) return message.channel.send('Jail Kanalı Ayarlanmamış \n**Örn: ``'+ client.x.prefix +'jail-settings channel #jail-log``**')
if (!message.member.roles.cache.has(JailYetkili)) return message.channel.send(`> Bu Komutu Kullanmak İçin \`${message.guild.roles.cache.find(Roles => Roles.id === JailYetkili).name}\` Rolüne Sahip Olman Gerek`)
const JaillenecekMal = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
if (!JaillenecekMal) return message.channel.send('Birini Etiketleyin veya Birinin ID\'sini Girin.')
const Süre = args[1]
if (!Süre) return message.channel.send('Lütfen Bir Süre Belirtin')
const Sebep = args.slice(2).join(' ')
if (!Sebep) Sebep = 'Sebep Belirtilmemiş'
const JailE = new Discord.MessageEmbed()
.setColor('ORANGE')
.setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
.setDescription(`<@${JaillenecekMal.id}> (\`${JaillenecekMal.id}\`) Kullanıcısı <@${message.author.id}> Tarafından Jaillendi.
  
• Auth: <@${message.author.id}> (\`${message.author.id}\`)
• Time: \`${Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')}\`
• Channel: \`${message.channel.name}\`

• Reason: \`${Sebep}\`

• Jail Time: \`${moment(new Date().getTime()).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
• Jail Finish: \`${moment(new Date().getTime()+ms(args[1])).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
`)
message.guild.channels.cache.get(JailKanal).send(JailE).catch(() => {})

const JailSon = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
.setDescription(`<@${JaillenecekMal.id}> (\`${JaillenecekMal.id}\`) Üyesinin Jailsi Sonlandı.
  
• Yetkili: <@${message.author.id}> (\`${message.author.id}\`)
• Süre: \`${Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')}\`
• Kanal: \`${message.channel.name}\`

• Sebep: \`${Sebep}\`

• Jail Saati: \`${moment(new Date().getTime()).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
• Jail Bitiş Tarihi: \`${moment(new Date().getTime()+ms(args[1])).add(3, 'hours').format('DD MMMM YYYY, dddd  hh:mm:ss')}\`
`)
function Join (a,b) {
a.join(', ')
b.join(', ')
}
JaillenecekMal.roles.cache.forEach(async Roles => {
const Blank = []
Blank.push(Roles.id)
//db.set(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles`,[])
//db.set(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles`,Join(Roles.name))
//db.set(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles_${Roles.id}`, Roles.id)
JaillenecekMal.roles.remove(Roles.id)
 JaillenecekMal.roles.add(Jail)
message.react('✅')  
setTimeout(async () => {
    JaillenecekMal.roles.remove(Jail)
    JaillenecekMal.roles.add([Blank.join("', '"+"'")]) // db.fetch(`Jail_${message.guild.id}_${JaillenecekMal.id}_Roles_${Roles.id}`).join(', ')
  },ms(Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')))
})
setTimeout(async () => {
    client.channels.cache.get(JailKanal).send(JailSon)
  },ms(Süre.replace('sn', 's').replace('dk', 'm').replace('sa', 'h').replace('gün', 'd')))


}
}

 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['jail','hapis'],
  permLevel: 0
 }

 exports.help = {
  name: 'Jail',
  description: 'Jaile Atar',
  usage: 'jail'
 } // am çük sik meme yarak taşak 31