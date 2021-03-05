const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
if (require('quick.db').fetch(`dil_${message.author.id}`) == 'en') {
	 
 if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`you must have\`MANAGE_MESSAGES\` permission!`);
  var devtr_kod_paylasim_the_best = args.slice(0).join(' ')
  
  if (!devtr_kod_paylasim_the_best) return message.channel.send("join how much message delete !")
  if (isNaN(devtr_kod_paylasim_the_best)) return message.channel.send("join how much message delete !")
  
  let fetched = await message.channel.messages.fetch({limit: args[0]})
  
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("`i cant delete before 14 days!"))
  
  message.channel.send(`:recycle: ${args[0]} messages deleted :recycle: `).then(msg => msg.delete({ timeout: 8000, reason: 'mesaj silme' }))
  
	message.delete();
} else {
	 
 if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Bu Komutu Kullanailmek İçin \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`);
  var devtr_kod_paylasim_the_best = args.slice(0).join(' ')
  
  if (!devtr_kod_paylasim_the_best) return message.channel.send("Temizlemek istediğin mesaj sayısını gir!")
  if (isNaN(devtr_kod_paylasim_the_best)) return message.channel.send("Sayını içinde harf 🤨!")
  
  let fetched = await message.channel.messages.fetch({limit: args[0]})
  
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))
  
  message.channel.send(`:recycle: ${args[0]} adet mesaj Geri Dönüşüme Atıldı :recycle: `).then(msg => msg.delete({ timeout: 8000, reason: 'mesaj silme' }))
  
	message.delete();
}
    
}
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil","clear"],
  permLevel: 0
};
exports.help = {
  name: 'temizle',
};
