const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en') {

          let prefix =  ayarlar.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olman gerekli.")
  message.channel.send("Sunucu kurulum işlemini onaylıyorsanız `evet` eğer onaylamıyorsanız `hayır` olarak belirtiniz.").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'hayır') {
        return message.reply("İşlem iptal edildi.");
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

    message.author.send(`${message.author}, Merhaba! ben ${client.user.username} Sunucunu Kurcam **${message.guild.name}** adlı sunucuyu şuan kuruyorum.`)
                                message.guild.channels.create('Sunucu Hakkında', { type: 'category', reason: 'Bilgi Kanalları!' }).then(kategori => {

    message.guild.channels.create("📌kurallar", "text").then(kurallar => {
                    kurallar.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("📢duyurular", "text").then(duyurular => {
                          duyurular.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("🎉çekiliş", "text").then(cekilis => {
                    cekilis.createOverwrite(every, {
        SEND_MESSAGES: false
      })
message.guild.channels.create("📣boost", "text").then(boost => {
                    boost.createOverwrite(every, {
        SEND_MESSAGES: false
      })
      kurallar.setParent(kategori.id)
cekilis.setParent(kategori.id) 
boost.setParent(kategori.id) 
      duyurular.setParent(kategori.id)  

///////////////////  
                          message.guild.channels.create('💬 GENEL', { type: 'category', reason: 'GENEL Kanalları!' }).then(kategor => {

  message.guild.channels.create("💭・sohbet", "text").then(sohbet => {
  message.guild.channels.create('📺・command', "text").then(medya => {
  message.guild.channels.create('📷・photo', "text").then(bot => {
    sohbet.setParent(kategor.id)
    medya.setParent(kategor.id)
    bot.setParent(kategor.id)
      
////////////////////////////////////////////
 
                      message.guild.channels.create('📢 Ses Kanalları', { type: 'category', reason: 'Ses Kanalları!' }).then(kategori => {

  message.guild.channels.create("📢・Sohbet", { type: 'voice', reason: 'Bilgi kanalı!' }).then(sesaq => {
      message.guild.channels.create("🎶・Müzik", { type: 'voice', reason: 'Bilgi kanalı!' }).then(müzikab => {
  message.guild.channels.create("💎・Vip", { type: 'voice', reason: 'Bilgi kanalı!' }).then(pok => {
    sesaq.setParent(kategori.id)  
        müzikab.setParent(kategori.id)  
    pok.setParent(kategori.id)
/////////////
message.guild.channels.create('🇹🇷 MKA', { type: 'category', reason: 'Ses Kanalları!' }).then(mka => {
message.guild.channels.create('🇹🇷・mka・pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(mkapp => {
message.guild.channels.create('🇹🇷・mka・gif', { type: 'text', reason: 'Bilgi kanalı!' }).then(mkagif => {

mkapp.setParent(mka.id)
mkagif.setParent(mka.id)
/////////////
message.guild.channels.create('🐉 RANDOM', { type: 'category', reason: 'Ses Kanalları!' }).then(random => {
message.guild.channels.create('💫・random-pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(randompp => {
message.guild.channels.create('💫・random-gif', { type: 'text', reason: 'Bilgi kanalı!' }).then(randomgif => {

randompp.setParent(random.id)
randomgif.setParent(random.id)
/////////////
message.guild.channels.create('💜 Woman', { type: 'category', reason: 'Ses Kanalları!' }).then(wow => {
message.guild.channels.create('💜・woman-pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(wowpp => {
message.guild.channels.create('💜・woman-gif', { type: 'text', reason: 'Bilgi kanalı!' }).then(wowgif => {

wowpp.setParent(wow.id)
wowgif.setParent(wow.id)
/////////////
message.guild.channels.create('🔥 Man', { type: 'category', reason: 'Ses Kanalları!' }).then(man => {
message.guild.channels.create('🔥・man-pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(manpp => {
message.guild.channels.create('🔥・man-gif', { type: 'text', reason: 'Bilgi kanalı!' }).then(mangif => {

manpp.setParent(man.id)
mangif.setParent(man.id)
//////////////
message.guild.channels.create('💕 Couple', { type: 'category', reason: 'Ses Kanalları!' }).then(sev => {
message.guild.channels.create('💕・couple-pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(sevpp => {
message.guild.channels.create('💕・couple-gif', { type: 'text', reason: 'Bilgi kanalı!' }).then(sevgif => {

sevpp.setParent(sev.id)
sevgif.setParent(sev.id)
//////////////////
message.guild.channels.create('🔮 BABY', { type: 'category', reason: 'Ses Kanalları!' }).then(bebe => {
message.guild.channels.create('🔮・baby-pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(bebepp => {
message.guild.channels.create('🔮・baby-gi̇f', { type: 'text', reason: 'Bilgi kanalı!' }).then(bebegif => {

bebepp.setParent(bebe.id)
bebegif.setParent(bebe.id)
//////////////////
message.guild.channels.create('🎊 Anime', { type: 'category', reason: 'Ses Kanalları!' }).then(anime => {
message.guild.channels.create('🎊・anime-pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(animepp => {
message.guild.channels.create('🎊・anime-gif', { type: 'text', reason: 'Bilgi kanalı!' }).then(animegif => {

animepp.setParent(anime.id)
animegif.setParent(anime.id)

////////////////////////// 
message.guild.channels.create('🐬 Animals', { type: 'category', reason: 'Ses Kanalları!' }).then(heyvan => {
message.guild.channels.create('🐬・animals-pp', { type: 'text', reason: 'Bilgi kanalı!' }).then(heyvanpp => {
message.guild.channels.create('🐬・animals-gif', { type: 'text', reason: 'Bilgi kanalı!' }).then(heyvangif => {
heyvanpp.setParent(heyvan.id)
heyvangif.setParent(heyvan.id)

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
})


      }

})})

                    .catch(error => {
                    message.channel.send(`Bir hata oluştu Lütfen Destek Sunucusuna Gelip Bunu Bize Bildir!`);
                    console.error('Hata:', error);
                
                  });
 

} else {
	
	
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucukur-gif","setup-server-gif"],
  permLevel: 0
}
exports.help = {
  name: 'sunucu-kur-gif',
  description: 'Basit bir sunucu kurar.',
  usage: 'sunucukur'
};
