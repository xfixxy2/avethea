const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {

          let prefix =  ayarlar.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You need to have 'Administrator' privilege to use this command.")
  message.channel.send("If you confirm the server installation process, specify **yes** if you do not confirm **no**.").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'no') {
        return message.reply("The transaction has been canceled.");
      }});
  
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 15000
    }).then((collected) => {
      if (collected.first().content === 'yes') {
      message.guild.channels.cache.filter(u => {
        u.delete()
     })
                    let every = message.guild.roles.cache.find(r => r.name === '@everyone')

    message.author.send(`${message.author}, Merhaba! ben ${client.user.username} Sunucunu Kurcam **${message.guild.name}** adli sunucuyu suan kuruyorum.`)
                                message.guild.channels.create('?? ? Information', { type: 'category', reason: 'Information Channels!' }).then(kategori => {

    message.guild.channels.create("??·announces", "text").then(info => {
                    info.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("??·invites", "text").then(davet => {
                          davet.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("??·giveaways", "text").then(ödülaq => {
                    ödülaq.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("??·ad·prices", "text").then(para => {
                    para.createOverwrite(every, {
        SEND_MESSAGES: false
      })
      info.setParent(kategori.id)
ödülaq.setParent(kategori.id) 
para.setParent(kategori.id) 
      davet.setParent(kategori.id)  

  
                          message.guild.channels.create('?? ? J4J', { type: 'category', reason: 'Community Channels!' }).then(kategor => {

  message.guild.channels.create("?·fast-j4j", "text").then(fast => {
  message.guild.channels.create('??·j4j-ads', "text").then(ads => {
  message.guild.channels.create('??·bot-report', "text").then(rep => {
    fast.setParent(kategor.id)
    ads.setParent(kategor.id)
    rep.setParent(kategor.id)
      

 
                      message.guild.channels.create('?? ? Voice', { type: 'category', reason: 'Voice Channels!' }).then(kategori => {
      message.guild.channels.create("??·Public", { type: 'voice', reason: 'Information channel!' }).then(pub => {
  message.guild.channels.create("??·AFK", { type: 'voice', reason: 'Information channel!' }).then(afkur => { 
        pub.setParent(kategori.id)  
    afkur.setParent(kategori.id)  
})
})
})
})
})
})
})
})
})
})
})
})



      }

})})

                    .catch(error => {
                    message.channel.send(`An error has occurred Please Come to Support Server and Notify Us!`);
                    console.error('Hata:', error);
                
                  });
 

} else {
	
          let prefix =  ayarlar.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olman gerekli.")
  message.channel.send("Sunucu kurulum islemini onayliyorsaniz `evet` eger onaylamiyorsaniz `hayir` olarak belirtiniz.").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'hayir') {
        return message.reply("Islem iptal edildi.");
      }});
  
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 15000
    }).then((collected) => {
      if (collected.first().content === 'evet') {
      message.guild.channels.cache.filter(u => {
        u.delete()
     })
                    let every = message.guild.roles.cache.find(r => r.name === '@everyone')

    message.author.send(`${message.author}, Merhaba! ben ${client.user.username} Sunucunu Kurcam **${message.guild.name}** adli sunucuyu suan kuruyorum.`)
                                message.guild.channels.create('?? ? Information', { type: 'category', reason: 'Bilgi Kanallari!' }).then(kategori => {

    message.guild.channels.create("??·announces", "text").then(info => {
                    info.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("??·invites", "text").then(davet => {
                          davet.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("??·giveaways", "text").then(ödülaq => {
                    ödülaq.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("??·ad·prices", "text").then(para => {
                    para.createOverwrite(every, {
        SEND_MESSAGES: false
      })
      info.setParent(kategori.id)
ödülaq.setParent(kategori.id) 
para.setParent(kategori.id) 
      davet.setParent(kategori.id)  

  
                          message.guild.channels.create('?? ? J4J', { type: 'category', reason: 'Topluluk Kanallari!' }).then(kategor => {

  message.guild.channels.create("?·fast-j4j", "text").then(fast => {
  message.guild.channels.create('??·j4j-ads', "text").then(ads => {
  message.guild.channels.create('??·bot-report', "text").then(rep => {
    fast.setParent(kategor.id)
    ads.setParent(kategor.id)
    rep.setParent(kategor.id)
      

 
                      message.guild.channels.create('?? ? Voice', { type: 'category', reason: 'Ses Kanallari!' }).then(kategori => {
      message.guild.channels.create("??·Public", { type: 'voice', reason: 'Bilgi kanali!' }).then(pub => {
  message.guild.channels.create("??·AFK", { type: 'voice', reason: 'Bilgi kanali!' }).then(afkur => { 
        pub.setParent(kategori.id)  
    afkur.setParent(kategori.id)  
})
})
})
})
})
})
})
})
})
})
})
})



      }

})})

                    .catch(error => {
                    message.channel.send(`Bir hata olustu Lütfen Destek Sunucusuna Gelip Bunu Bize Bildir!`);
                    console.error('Hata:', error);
                
                  });
 

}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-kur-j4j","setup-server-j4j"],
  permLevel: 0
}
exports.help = {
  name: 'sunucu-kur-j4j',
  description: 'Basit bir sunucu kurar.',
  usage: 'sunucukur'
};
