const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

exports.run = async (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}
  
      function yenidencekme(message, array, cekilisidsi) {
      var eskikazananlar = db.fetch(`cekilisidsi_${cekilisidsi}.kazananlar`) || []
      var cekilenkisi = array[Math.floor(Math.random() * array.length)]
      if (!client.users.cache.get(cekilenkisi.id)) {
        return yenidencekme(message, array, cekilisidsi)
      }
      if (cekilenkisi.id == client.user.id) {
        return yenidencekme(message, array, cekilisidsi)
      }
      if ((array.length - eskikazananlar.length) <= 1) return message.channel.send('Çekilişte Katılımcı Sayısı Az Olduğu İçin Çekilişi Yeniden Çekemiyorum')
      while (eskikazananlar.includes(cekilenkisi.id)) {
        return yenidencekme(message, array, cekilisidsi)
      }
      if (!eskikazananlar.includes(cekilenkisi.id)) {
        if (db.has(`cekilisidsi_${cekilisidsi}.kazananlar`)) {
          db.push(`cekilisidsi_${cekilisidsi}.kazananlar`, cekilenkisi.id)
        }else{
        db.set(`cekilisidsi_${cekilisidsi}.kazananlar`, [cekilenkisi.id])
        }
        message.channel.send(`**Yeni kazanan:** <@${cekilenkisi.id}>! Tebrikler!`)
      }
    }
  


   const cekilisid = args[0]
   if (!cekilisid) return message.reply('Bir çekiliş IDsi belirtmeniz gerek.')
   
   if (!db.has(`cekilisidsi_${cekilisid}`)) return message.reply('Doğru bir çekiliş IDsi belirtmeniz gerek.')
   
   client.channels.cache.get(db.fetch(`cekilisidsi_${cekilisid}.mesaj.kanal`)).messages.fetch(db.fetch(`cekilisidsi_${cekilisid}.mesaj.id`)).then(async msg => {

     if (db.has(`cekilis_${msg.id}`)) return message.reply('Bu çekiliş daha bitmemiş.')
     
  message.delete()
  const reaction = msg.reactions.cache.first()
  
  reaction.users.fetch().then(async kisiler => {
  const kazanansayisi = db.fetch(`cekilis_${msg.id}.kazanacak`)
  const verilecek = db.fetch(`cekilis_${msg.id}.verilecek`)
  const bitecegizamanms = db.fetch(`cekilis_${msg.id}.bitecek`)
  if (kisiler.size == 1) return message.reply('Yeniden çekmek için yeterli kişi yok.')
  var array = reaction.users.cache.array()
     yenidencekme(msg, array, cekilisid)
})
    })
   
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekilişyeni','yeni-kişi-seç','regw'],
  permLevel: 0
};

exports.help = {
    name: 'çekilişyenikişiseç',
  description: 'Bot adminlerinin bot üzerinde kod test etmesini sağlar.',
  usage: 'eval <kod>'
};