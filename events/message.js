const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();
const db = require('quick.db')
const ms = require('parse-ms')
const DBL = require('dblapi.js')
module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  const prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  if (message.channel.type == 'dm') return;
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2ODc2NTAwMzE2NjY0NjI3MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MjQwNjc5fQ.nGhk9_KqjeLJoYex1e0R1qKcdcgko3nsSZs8YO2P1p8', client)
  let perms = client.elevation(message);
  let cmd;
 // dbl.hasVoted(message.author.id).then(async voted => {
 // if (!voted) return message.channel.send('Oy Vermen Gerek! | https://top.gg/bot/768765003166646272/vote').then(x => x.delete({timeout:15000}))
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
  cmd = client.commands.get(client.aliases.get(command));	  
  const Check = db.fetch(`Kurallar_${message.author.id}`)
  const Antio = new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(message.author.username+' - Kural Kabul',message.author.avatarURL({dynamic: true}))
  .setDescription(`
  **Komutları Kullanmak İçin Botun Kurallarını Kabul Etmen Gerekli**

  **1-) ${client.user.username}'u Kopyalamamak, Kopyalandığı Haklarımızı korumak amaçlı dava açılıcaktır.**

  **2-) Botun Herhangi Bir Açığı Bulunduğu Takdirde [Destek Sunucusu](https://discord.gg/pmEy4ruDBE) Üzerinden Kuruculara Bildireceğini,**

  **3-) \`Ben Botun Sahibiyim && Yardımcısıym\` Diyenleri [Destek Sunucusu](https://discord.gg/pmEy4ruDBE) Üzerinden Kuruculara Bildiereceğini**

  **\`Kabul Ediyorsan\` ✅ Emojisine Basman Yeterlidir!**
  `)
  .setFooter(`Şu Ana Kadar Kabul Eden Kişi Sayısı: ${await db.fetch(`Kabul`)}`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  if (!Check) return message.channel.send(Antio).then(async(Embed) => {
  const Filtre = (reaction, user) => {
    return reaction.emoji.name === '✅' && user.id === message.author.id
  }
  Embed.react('✅')
  var Tepkiler = Embed.createReactionCollector(Filtre, {
  })
  Tepkiler.on('collect', async (Tepki) => {
  if (Tepki.emoji.name === '✅') {
  const Revenge = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.username+' - Kural Kabul Edildi!',message.author.avatarURL({dynamic:true}))
  .setDescription(`
  **Tebrikler ${message.author},**
  **Artık \`${client.user.username}\`'u Kullanbilirsin!**`)
  Embed.edit(Revenge)
  client.channels.cache.get('792872729312493602').send(`\`${message.author.tag}\`, Kuralları Kabul Etti!`)
  db.set(`Kurallar_${message.author.id}`,true)
  db.add(`Kabul`,1)
  }
  })
  })
  const PepeCode = new Set()



  if (PepeCode.has(message.author.id)) {
  const Zaman = await db.fetch(`KomutSüre`)
  const Süre = ms(2500 - (Date.now() - Zaman))
  return client.channels.cache.get(await db.get(`SonKomut`)).send(`❌ \`${command}\` Adlı Komutu Kullanmak İçin \`${Süre.seconds} Saniye\` Beklemelisin! (${message.author})`).then(Komut => Komut.delete({timeout: 2500}))
  }
  PepeCode.add(message.author.id),db.set(`SonKomut`,message.channel.id),db.set(`KomutSüre`,Date.now())
  setTimeout(() => {
  PepeCode.delete(message.author.id)
  db.delete(`SonKomut`)
  }, 2500) // 2,25 Saniyedir // 1000 = 1 Saniye


let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
        let karalistesebep = db.fetch(`sebep_${message.author.id}`)
        if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
    .setColor("0x36393F")
   .setTitle('KOMUTLARI KULLANAMAZSINIZ!')
  .setDescription(`Üzgünüm ancak komutları kullanamazsınız! Kurucularımız tarafından **${karalistesebep}** sebebiyle komutları kullanmanız yasaklandı!.`)
   .setFooter(`Avethea'dan engellendiniz.`)
   .setImage("https://cdn.discordapp.com/attachments/761871748253089812/785897375708479538/giphy.gif")
   .setThumbnail(client.user.avatarURL())
   
   const embed = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Avethea`)
   .setDescription("**"+message.author.tag+"** adlı kullanıcı karalistede olup **"+command+"** adlı komutu: **"+message.guild.name+"** sunucusunda kullanmayı denedi.")
   client.channels.cache.get("792873032150155295").send(embed)
  return message.channel.send(karaliste)

        }

}
  if (cmd) {
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
                message.channel.send(`:x: **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                return
      }
    }
    
   
  if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  

};


