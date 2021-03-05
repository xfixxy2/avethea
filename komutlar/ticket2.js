const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.x.prefix;
  
if(args[0] === 'gönder') {
const annen = await data.fetch(`kanal.${message.guild.id}`)
if(!annen) return message.channel.send(`Mesajı göndereceğim kanalı ayarlamamışsın: ${prefix}ticket-kanal ayarla #channel`)
client.channels.cache.get(annen).send(new Discord.MessageEmbed()
.setTitle(`Avethea destek`)
.setFooter(`Avethea - ticket sistemi.`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`📩 tepkisine tıklayıp bir bilet oluşturabilirsiniz.`)).then(m => {
m.react('📩')
let açç = (reaction, user) => reaction.emoji.name === "📩" && user.id !== client.user.id
let aç = m.createReactionCollector(açç, { time: 0 }); 

aç.on('collect', async (reaction,user) => {
reaction.users.remove(user.id)
const sd = await data.fetch(`ass.${message.guild.id}.${user.id}`)
const dnn = await data.fetch(`asd.${message.guild.id}.${sd}.${user.id}`)
if(dnn) return user.send(new Discord.MessageEmbed()
                                  .setColor('RED')
                                  .setDescription(`Bilet limitine ulaştınız: 1/1`))
data.add(`numara.${message.guild.id}`, 5)
const as = await data.fetch(`numara.${message.guild.id}`)
message.guild.channels.create(`ticket-${as}`,{type:'text'}).then(async s => {
data.add(`numara.${s.id}`, as)
data.set(`ass.${message.guild.id}.${user.id}`, s.id)
data.set(`asd.${message.guild.id}.${s.id}.${user.id}`, 'annen')
let role = message.guild.roles.cache.find(r => r.name === '@everyone')
s.createOverwrite(role, { 'VIEW_CHANNEL': false });
message.guild.members.cache.forEach(u => {
if(u.hasPermission('MANAGE_GUILD')) {
s.createOverwrite(u, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true, 'MANAGE_MESSAGES':true, 'MANAGE_CHANNELS':true }); }})
s.createOverwrite(user, { 'VIEW_CHANNEL':true, 'SEND_MESSAGES':true });
s.send(`${user}, Hoşgeldin!`, new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Çok yakın zaman da seninle ilgileneceğiz.
Bileti kapatmak istersen: 🔒`)
.setFooter(`Avethea - Ticket sistemi`, client.user.avatarURL())).then(m => {
m.react(`🔒`)
let si = (reaction, user) => reaction.emoji.name === "🔒" && user.id !== client.user.id
let s23 = m.createReactionCollector(si, { time: 0 });

s23.on('collect', async (reaction,user) => {
reaction.users.remove(user.id)
m.react(`✅`)
m.react(`❌`)
let sil = (reaction, user) => reaction.emoji.name === "✅" && user.id !== client.user.id
let sill = m.createReactionCollector(sil, { time: 0 });
let ss = (reaction, user) => reaction.emoji.name === "❌" && user.id !== client.user.id
let s2 = m.createReactionCollector(ss, { time: 0 });
s2.on('collect', async reaction => {
s.users.messages({limit:10}).then(async messages => { 
  messages.cache.get(m.id).reactions.cache.get('✅').removeAll()
reaction.removeAll()
})})
sill.on('collect', async (reaction,user) => {
reaction.users.remove(user.id)
s.send(new Discord.MessageEmbed()
.setColor('#ffff00')
.setDescription(`Bilet ${user} tarafından kapatıldı.`))
s.setName(`closed-${as}`)
s.send(new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`🔓: Ticketi tekrar açar.

⛔: Ticketi siler.`)).then(m2 => {
m2.react('🔓')
m2.react('⛔')
let sil = (reaction, user) => reaction.emoji.name === "⛔" && user.id !== client.user.id
let sill = m2.createReactionCollector(sil, { time: 0 });
let geri = (reaction, user) => reaction.emoji.name === "🔓" && user.id !== client.user.id
let geriaç = m2.createReactionCollector(geri, { time: 0 });

geriaç.on('collect', async (reaction,user) => {
reaction.users.remove(user.id)
s.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`Bilet ${user} tarafından tekrar açıldı.`))
s.setName(`ticket-${as}`)
})

sill.on('collect', async (reaction,user) => {
reaction.users.remove(user.id)
s.send(new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`))
setTimeout(async () => {
s.delete()
const sd = await data.fetch(`ass.${message.guild.id}.${user.id}`)
data.delete(`asd.${message.guild.id}.${user.id}`)
data.delete(`asd.${message.guild.id}.${s.id}.${user.id}`)
}, 5000)

})  

})
})
})
})
  
  
})

})  

})
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bilet'],
  permLevel: 0
}

exports.help = {
  name: 'ticket'
};