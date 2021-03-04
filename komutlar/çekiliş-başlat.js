const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms');
const randomstring = require('randomstring');

exports.run = async(client, message,args) => {//Komutu çalıştıracak olan yer
const dil = db.fetch(`dil_${message.author.id}`)
if (dil == 'en'){
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Must Have ** ADMIN ** Privilege To Use This Command.")
  
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

    function destructMS(milli) {
        if (isNaN(milli) || milli < 0) {
          return null;
        }
      
        var d, h, m, s;
        s = Math.floor(milli / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        var yazi;
        if (d !== 0) yazi = `${d} gün`;
        if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
        if (h !== 0 && !yazi) yazi = `${h} saat`;
        if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
        if (m !== 0 && !yazi) yazi = `${m} dakika`;
        if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
        if (s !== 0 && !yazi) yazi = `${s} saniye`;
        if (yazi) return yazi;
        if (!yazi) return `1 saniye`;
      };
    
    function cekme(message, array) {
      var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || []
      var cekilenkisi = array[Math.floor(Math.random() * array.length)]
      if (!client.users.cache.get(cekilenkisi.id)) {
        return cekme(message, array)
      }
      if (cekilenkisi.id == client.user.id) {
        return cekme(message, array)
      }
      while (eskikazananlar.includes(cekilenkisi.id)) {
        return cekme(message, array)
      }
      if (!eskikazananlar.includes(cekilenkisi.id)) {
        if (db.has(`cekilis_${message.id}.kazananlar`)) {
          db.push(`cekilis_${message.id}.kazananlar`, cekilenkisi.id)
        }else{
          db.set(`cekilis_${message.id}.kazananlar`, [cekilenkisi.id])
        }
      }
    }

    if (!args[0]) {
        message.delete()
        return message.reply('How long will the draw take? (`s seconds`, `m minute`, `h hours`, `d day` write in the form)').then(msg => msg.delete({timeout: 10000}))
    }
    if (isNaN(args[0])) {
        message.delete()
        return message.reply('How long will the draw take? (`s seconds`, `m minute`, `h hours`, `d day` write in the form)').then(msg => msg.delete({timeout: 10000}))
    }
    if (!args[1]) {
        message.delete()
        return message.reply('How long will the draw take? (`s seconds`, `m minute`, `h hours`, `d day` write in the form)').then(msg => msg.delete({timeout: 10000}))
    }
    if (!args[2]) {
        message.delete()
        return message.reply('How many winners will there be in the draw?').then(msg => msg.delete({timeout: 10000}))    
    }
    if (isNaN(args[2])) {
        message.delete()
        return message.reply('How many winners will there be in the draw?').then(msg => msg.delete({timeout: 10000}))    
    }
    if (!args.slice(3).join(' ')) {
        message.delete()
        return message.reply('Çekilişte ne verilecek?').then(msg => msg.delete({timeout: 10000}))    
    }

    /*_________________________________________*/

    const sure = [args[0], args[1]].join(' ')
    const kazanacak = args[2]
    const verilecek = args.slice(3).join(' ')

    const bitecegizamanms = Date.now() + ms(sure.replace(' dakika', 'm').replace(' saat', 'h').replace(' saniye', 's').replace(' gün', 'd'))
    const cekilisid = randomstring.generate({ length: 6, readable: true, charset: 'alphabetic', capitalization: 'uppercase' })
    db.set('cekilisaven','var')
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setAuthor('🎉 Draw 🎉')
    .setTitle('**' + verilecek + '**')
    .setDescription(`Under 🎉 You can join the draw by clicking on the emoji!\n**Kalan süre:** ${sure}`)
    .setFooter(`${kazanacak} Kazanan | Çekiliş ID: ${cekilisid} | Çekiliş Başlatıldı | Bitiş:`)
    .setTimestamp(bitecegizamanms)
    .setColor("#2F3136")
    message.channel.send(embed).then(async msg => {
      db.set(`cekilis_${msg.id}`, {mesaj: {id: msg.id, kanal: msg.channel.id, sunucu: msg.guild.id}, kazanacak: kazanacak, verilecek: verilecek, bitecek: bitecegizamanms, sahibi: message.author.id, olusturma: Date.now(), kazananlar: [], cekilisid: cekilisid})
      db.set(`cekilisidsi_${cekilisid}`, {mesaj: {id: msg.id, kanal: msg.channel.id, sunucu: msg.guild.id}, kazananlar: [], cekilisid: cekilisid})
      msg.react('🎉').then(async reaction => {
            const interval = setInterval(async function(){
              if (!db.has(`cekilis_${msg.id}`)) return clearInterval(interval)
                const kalanzaman = bitecegizamanms - Date.now()   
                if (kalanzaman <= 0) {
                  embed.setDescription(`Shooting ...`)
                  msg.edit(embed)
                  clearInterval(interval)
                    const kisiler = reaction.users.cache
                    const asilkisisayisi = reaction.users.cache.size - 1
                    if (asilkisisayisi < kazanacak) {
                        let embed = new Discord.MessageEmbed()
                        .setAuthor('🎉 Draw finish 🎉')
                        .setTitle('**' + verilecek + '**')
                        .setDescription(`The winner could not be selected due to insufficient participation.`)
                        .setFooter(`${kazanacak} Winning | Lottery Started | Draw ID: ${cekilisid} | Finish:`)
                        .setTimestamp(bitecegizamanms)
                        .setColor("#2F3136")
                        msg.edit(embed)
                        db.delete(`cekilis_${msg.id}`)
                        let thall = db.all().filter(i => i.ID.includes(msg.id))
                        for (const uu of thall) {
                          db.delete(uu.ID)
                        }
                    }else{
                      var array = reaction.users.cache.array()
                        var u;
                        for (u = 0; u < kazanacak; u++) {
                          cekme(msg, array)
                        }
                      await sleep(50)
                        let kazananherkes = db.fetch(`cekilis_${msg.id}.kazananlar`)
                            let embed = new Discord.MessageEmbed()
                            .setAuthor('🎉 Draw Finish 🎉')
                            .setTitle('**' + verilecek + '**')
                            .setDescription(`**Kazananlar:** <@${kazananherkes.join('>, <@')}>`)
                            .setFooter(`${kazanacak} kazanan | ID: ${cekilisid} | Bitti:`)
                            .setTimestamp(bitecegizamanms)
                            .setColor("#2F3136")
                            msg.edit(embed)
                            msg.channel.send(`**Congratulations** <@${kazananherkes.join('>, <@')}>! **\`${verilecek}\` you won the lottery!**`)
                            db.set(`cekilisidsi_${cekilisid}.kazananlar`, kazananherkes)
                            db.delete(`cekilis_${msg.id}`)
                            let theall = db.all().filter(i => i.ID.includes(msg.id))
                            for (const ua of theall) {
                              db.delete(ua.ID)
                            }
                    }
                }
                const kalanzamanyazi = destructMS(kalanzaman)
                embed.setDescription(`Under 🎉 You can join the draw by clicking on the emoji!\n**Time remaining:** ${kalanzamanyazi}`)
                msg.edit(embed)
            }, 5000)
                

            })
    })
} else {
               if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.")
  
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

    function destructMS(milli) {
        if (isNaN(milli) || milli < 0) {
          return null;
        }
      
        var d, h, m, s;
        s = Math.floor(milli / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        var yazi;
        if (d !== 0) yazi = `${d} gün`;
        if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
        if (h !== 0 && !yazi) yazi = `${h} saat`;
        if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
        if (m !== 0 && !yazi) yazi = `${m} dakika`;
        if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
        if (s !== 0 && !yazi) yazi = `${s} saniye`;
        if (yazi) return yazi;
        if (!yazi) return `1 saniye`;
      };
    
    function cekme(message, array) {
      var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || []
      var cekilenkisi = array[Math.floor(Math.random() * array.length)]
      if (!client.users.cache.get(cekilenkisi.id)) {
        return cekme(message, array)
      }
      if (cekilenkisi.id == client.user.id) {
        return cekme(message, array)
      }
      while (eskikazananlar.includes(cekilenkisi.id)) {
        return cekme(message, array)
      }
      if (!eskikazananlar.includes(cekilenkisi.id)) {
        if (db.has(`cekilis_${message.id}.kazananlar`)) {
          db.push(`cekilis_${message.id}.kazananlar`, cekilenkisi.id)
        }else{
          db.set(`cekilis_${message.id}.kazananlar`, [cekilenkisi.id])
        }
      }
    }

    if (!args[0]) {
        message.delete()
        return message.reply('Çekiliş ne kadar sürecek? (`x saniye`, `x dakika`, `x saat`, `x gün` şeklinde yazınız)').then(msg => msg.delete({timeout: 10000}))
    }
    if (isNaN(args[0])) {
        message.delete()
        return message.reply('Çekiliş ne kadar sürecek? (`x saniye`, `x dakika`, `x saat`, `x gün` şeklinde yazınız)').then(msg => msg.delete({timeout: 10000}))
    }
    if (!args[1]) {
        message.delete()
        return message.reply('Çekiliş ne kadar sürecek? (`x saniye`, `x dakika`, `x saat`, `x gün` şeklinde yazınız)').then(msg => msg.delete({timeout: 10000}))
    }
    if (!args[2]) {
        message.delete()
        return message.reply('Çekilişte kaç kazanan olacak?').then(msg => msg.delete({timeout: 10000}))    
    }
    if (isNaN(args[2])) {
        message.delete()
        return message.reply('Çekilişte kaç kazanan olacak?').then(msg => msg.delete({timeout: 10000}))    
    }
    if (!args.slice(3).join(' ')) {
        message.delete()
        return message.reply('Çekilişte ne verilecek?').then(msg => msg.delete({timeout: 10000}))    
    }

    /*_________________________________________*/

    const sure = [args[0], args[1]].join(' ')
    const kazanacak = args[2]
    const verilecek = args.slice(3).join(' ')

    const bitecegizamanms = Date.now() + ms(sure.replace(' dakika', 'm').replace(' saat', 'h').replace(' saniye', 's').replace(' gün', 'd'))
    const cekilisid = randomstring.generate({ length: 6, readable: true, charset: 'alphabetic', capitalization: 'uppercase' })
    
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setAuthor('🎉 Çekiliş 🎉')
    .setTitle('**' + verilecek + '**')
    .setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** ${sure}`)
    .setFooter(`${kazanacak} Kazanan | Çekiliş ID: ${cekilisid} | Çekiliş Başlatıldı | Bitiş:`)
    .setTimestamp(bitecegizamanms)
    .setColor("#2F3136")
    message.channel.send(embed).then(async msg => {
      db.set(`cekilis_${msg.id}`, {mesaj: {id: msg.id, kanal: msg.channel.id, sunucu: msg.guild.id}, kazanacak: kazanacak, verilecek: verilecek, bitecek: bitecegizamanms, sahibi: message.author.id, olusturma: Date.now(), kazananlar: [], cekilisid: cekilisid})
      db.set(`cekilisidsi_${cekilisid}`, {mesaj: {id: msg.id, kanal: msg.channel.id, sunucu: msg.guild.id}, kazananlar: [], cekilisid: cekilisid})
      msg.react('🎉').then(async reaction => {
            const interval = setInterval(async function(){
              if (!db.has(`cekilis_${msg.id}`)) return clearInterval(interval)
                const kalanzaman = bitecegizamanms - Date.now()   
                if (kalanzaman <= 0) {
                  embed.setDescription(`Çekiliyor...`)
                  msg.edit(embed)
                  clearInterval(interval)
                    const kisiler = reaction.users.cache
                    const asilkisisayisi = reaction.users.cache.size - 1
                    if (asilkisisayisi < kazanacak) {
                        let embed = new Discord.MessageEmbed()
                        .setAuthor('🎉 Çekiliş Bitti 🎉')
                        .setTitle('**' + verilecek + '**')
                        .setDescription(`Yeterli katılım olmadığından kazanan seçilemedi.`)
                        .setFooter(`${kazanacak} Kazanan | Çekiliş Başlatıldı | Çekiliş ID: ${cekilisid} | Bitti:`)
                        .setTimestamp(bitecegizamanms)
                        .setColor("#2F3136")
                        msg.edit(embed)
                        db.delete(`cekilis_${msg.id}`)
                        let thall = db.all().filter(i => i.ID.includes(msg.id))
                        for (const uu of thall) {
                          db.delete(uu.ID)
                        }
                    }else{
                      var array = reaction.users.cache.array()
                        var u;
                        for (u = 0; u < kazanacak; u++) {
                          cekme(msg, array)
                        }
                      await sleep(50)
                        let kazananherkes = db.fetch(`cekilis_${msg.id}.kazananlar`)
                            let embed = new Discord.MessageEmbed()
                            .setAuthor('🎉 Çekiliş Bitti 🎉')
                            .setTitle('**' + verilecek + '**')
                            .setDescription(`**Kazananlar:** <@${kazananherkes.join('>, <@')}>`)
                            .setFooter(`${kazanacak} kazanan | ID: ${cekilisid} | Bitti:`)
                            .setTimestamp(bitecegizamanms)
                            .setColor("#2F3136")
                            msg.edit(embed)
                            msg.channel.send(`**Tebrikler** <@${kazananherkes.join('>, <@')}>! **\`${verilecek}\` çekilişini kazandınız!**`)
                            db.set(`cekilisidsi_${cekilisid}.kazananlar`, kazananherkes)
                            db.delete(`cekilis_${msg.id}`)
                            let theall = db.all().filter(i => i.ID.includes(msg.id))
                            for (const ua of theall) {
                              db.delete(ua.ID)
                            }
                    }
                }
                const kalanzamanyazi = destructMS(kalanzaman)
                embed.setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** ${kalanzamanyazi}`)
                msg.edit(embed)
        })
    })
  
})
}
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['çekiliş-başlat','giveaway-start'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-başlat', 
  description: 'Çekiliş yapar.',
  usage: 'çekiliş-başlat'
};