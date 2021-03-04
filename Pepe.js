const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const http = require('http')
const express = require('express')
const ayarlar = require('./ayarlar.json')
const app = express()
const db = require('quick.db')
const moment = require('moment')
require('moment-duration-format')
const Peppe = message => {
  console.log(`[ => ] ${message}`)
}
require('./util/eventLoader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./komutlar/', (Error, Files) => {
    if (Error) console.error(Error)
    Peppe(`${Files.length} Komut Yüklenecek!`)
    Files.forEach(Pepe => {
        let Props = require(`./komutlar/${Pepe}`)
        Peppe(`Yüklenen Komut: ${Props.help.name}.`)
        client.commands.set(Props.help.name, Props)
        Props.conf.aliases.forEach(Alias => {
        client.aliases.set(Alias, Props.help.name)
})})})

client.reload = command => {
 return new Promise((Resolve, Reject) => {
 try {
 delete require.cache[require.resolve(`./komutlar/${command}`)]
 let CMD = require(`./komutlar/${command}`)
 client.commands.delete(command)
 client.aliases.forEach((CMD, Alias) => {
 if (CMD === command) client.aliases.delete(Alias)
 })
 client.commands.set(command, CMD)
 CMD.conf.aliases.forEach(Alias => {
 client.aliases.set(Alias, CMD.help.name)
 })
 Resolve()
 } catch (Hata) {
 Reject(Hata)
}})}

client.load = command => {
 return new Promise((Resolve, Reject) => {
 try {
 let CMD = require(`./komutlar/${command}`)
client.commands.set(command, CMD)
CMD.conf.aliases.forEach(Alias => {
client.aliases.set(Alias, CMD.help.name)
})
Resolve()
} catch (Hata) {
Reject(Hata)
}})}

client.unload = command => {
 return new Promise((Resolve, Reject) => {
 try {
 delete require.cache[require.resolve(`./komutlar/${command}`)]
 let CMD = require(`./komutlar/${command}`)
 client.commands.delete(command)
 client.aliases.forEach((CMD, Alias) => {
 if (CMD === command) client.aliases.delete(Alias)
 })
 Resolve()
 } catch (Hata) {
 Reject(Hata)
}})}
// Pepe Code

//Pepe Code
client.elevation = message => {
    if (!message.guild) {
        return
    }
    let permlvl = 0
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3
    if (message.author.id === ayarlar.sahip) permlvl = 4
    return permlvl
}
client.login(ayarlar.token)



client.on('message', async message => {
    if(message.channel.type !== 'text') return;
  const reklam = await db.fetch(`reklam.${message.guild.id}`);
  if(!reklam) return;
  const GREENlist = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg"];
  const uyarılar = [
  'Kesinlikle yapma bunu okey? ♿',
  'Seni gidi çakal seni hıı! 🍌',
  'Ooo sanırım kendisini uyanık sandı? 🐍',
  'Şşş reklam kötü bir şey dostum! 🎭',
  'Haddini bil ya da çık git sunucudan! ⚰️'
  ];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  if(GREENlist.some(a => message.content.includes(a)))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Reklam Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  
  });


client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`Bu sunucuda **QUİCK** Caps Lock Engelleme sistemi kullanılıyor.Bu yüzden mesajını sildim!`)
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});

  const reklam = [
    ".ml",
    "discord.gg",
    "invite",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    "glitch.me",
    "glitch.com"
  ];




client.on('guildMemberAdd', async (member) => {
let otorol = db.fetch(`otoRL_${member.guild.id}`)
let otorolkanal = db.fetch(`otoRK_${member.guild.id}`)
let kanal = member.guild.channels.cache.get(otorolkanal)
if(!otorol) return
if(!otorolkanal) return

kanal.send(':inbox_tray: Sunucuya yeni katılan **'+member.user.username+'** kullanıcısına otorol verildi !')
member.roles.add(otorol)
})



client.on("message", async msg => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;
  let i = await db.fetch(`everyone_${msg.guild.id}`)
if (i === 'kapat') return;
    //
if (i === 'açık') {
const kufur = ["@everyone", "@here", "||@everyone||", "||@here||"]

      if (kufur.some(word => msg.content.toLowerCase().startsWith(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();  
                  return msg.reply('Yetkisiz Everyone | Here Atamazsın!');           
            }              
          } catch(err) {
            console.log(err);
      
        
  } 
    }
    
    if (!i) return;
    }}) ;






client.on("messageDelete", async message => {
  // mod-log
  let modlogs = db.get(`log_${message.guild.id}`);
  const modlogkanal = message.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Mesaj Sildi!")
    .setDescription(
      `:star: <@!${message.author.id}> adlı kullanıcı tarafından <#${message.channel.id}> kanalına gönderilen mesaj silindi!\n\nSilinen Mesaj: **${message.content}**`
    )
    .setFooter(" Avethea | Log ");
  modlogkanal.send(embed);
});

client.on("channelCreate", async channel => {
  let modlogs = db.get(`log_${channel.guild.id}`);
  const modlogkanal = channel.guild.channels.cache.find(
    kanal => kanal.id === modlogs
 );
  if (!modlogkanal) return;
  if (channel.type === "text") {
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`:star: ${channel.name} adlı metin kanalı oluşturuldu.`)
      .setFooter(` Avethea | Log  Kanal ID: ${channel.id}`);
    modlogkanal.send({ embed });
  }
  if (channel.type === "voice") {
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Ses Kanalı Oluşturdu")
      .setDescription(`:star: ${channel.name} adlı ses kanalı oluşturuldu!`)
      .setFooter(` Avethea | Log  Kanal ID: ${channel.id}`);

    modlogkanal.send({ embed });
  }
});
client.on("channelDelete", async channel => {
  let modlogs = db.get(`log_${channel.guild.id}`);
  const modlogkanal = channel.guild.channels.cache.find(
    kanal => kanal.id === modlogs
  );
  if (!modlogkanal) return;
  if (channel.type === "text") {
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`:star: ${channel.name} adlı metin kanalı silini!`)
      .setFooter(` Avehea | Log Kanal ID: ${channel.id}`);
    modlogkanal.send({ embed });
  }
  if (channel.type === "voice") {
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Ses Kanalı Sildi")
      .setDescription(`:star: ${channel.name} adlı ses kanalı silindi`)
      .setFooter(` Avethea | Log Kanal ID: ${channel.id}`);
    modlogkanal.send({ embed });
  }
});
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.cache.get(
    db
      .fetch(`log_${oldMsg.guild.id}`)
      .replace("<#", "")
      .replace(">", "")
  );
  if (!kanal) return;
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .addField("Kullanıcı", oldMsg.author.tag, true)
    .addField("Eski Mesaj", `  ${oldMsg.content}  `)
    .addField("Yeni Mesaj", `${newMsg.content}`)
    .setThumbnail(oldMsg.author.avatarURL);
  kanal.send(embed);
});



//rolkoruma

client.on("roleDelete", async (role) => {
  let guild = role.guild;
  if(!guild.me.hasPermission("MANAGE_ROLES")) return;
  let koruma = db.fetch(`korumaacik_${role.guild.id}`)
  if(koruma == null) return; 
  let e = await guild.fetchAuditLogs({type: 'ROLE_DELETE'});
  let member = guild.members.cache.get(e.entries.first().executor.id);
  if(!member) return;
  if(member.hasPermission("ADMINISTRATOR")) return;
  let mention = role.mentionable;
  let hoist = role.hoist;
  let color = role.hexColor;
  let name = role.name;
  let perms = role.permissions;
  let position = role.position
  role.guild.createRole({
    name: name,
    color: color,
    hoist: hoist,
    position: position,
    permissions: perms,
    mentionable: mention
  }).then(rol => {
    if(!db.has(`korumalog_${guild.id}`)) return;
    let logs = guild.channels.find(ch => ch.id === db.fetch(`korumalog_${guild.id}`));
    if(!logs) return db.delete(`korumalog_${guild.id}`); else {
      const embed = new Discord.MessageEmbed()
      .setDescription(`Silinen Rol: <@&${rol.id}> (Yeniden oluşturuldu!)\nSilen Kişi: ${member.user}`)
      .setColor('RED')
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      logs.send(embed);
    }
})
  
  
  
})
client.on("channelDelete", async channel => {
  if(!channel.guild.me.hasPermission("MANAGE_CHANNELS")) return;
  let guild = channel.guild;
  const logs = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' })
  let member = guild.members.cache.get(logs.entries.first().executor.id);
  if(!member) return;
  if(member.hasPermission("ADMINISTRATOR")) return;
  channel.clone(channel.name, true, true, "Kanal silme koruması sistemi").then(async klon => {
    if(!db.has(`korumalog_${guild.id}`)) return;
    let logs = guild.channels.find(ch => ch.id === db.fetch(`korumalog_${guild.id}`));
    if(!logs) return db.delete(`korumalog_${guild.id}`); else {
      const embed = new Discord.MessageEmbed()
      .setDescription(`Silinen Kanal: <#${klon.id}> (Yeniden oluşturuldu!)\nSilen Kişi: ${member.user}`)
      .setColor('RED')
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      logs.send(embed);
    }
    await klon.setParent(channel.parent);
    await klon.setPosition(channel.position);
  })
})



client.on('message',async message => {
const Koruma = await db.fetch(`SpamKoruma_${message.channel.id}`)
if (!Koruma) return;
const KorumaKanal = await db.fetch(`SpamKanal_${message.guild.id}`)
if (!KorumaKanal) return;
if (Koruma == 'Aktif') {
if (message.author.id == client.user.id) return;
if (message.member.hasPermission('ADMINISTRATOR')) return;
if (db.fetch(`Spam_${message.author.id}`) == 4) {
message.channel.send('Lütfen Biraz Yavaş Ol! <@'+message.author.id+'> (4 Saniye Sonra Yazmaya Devam Edebilirsiniz!)')
db.add(`RSpam_${message.author.id}`,2)
}

if (await db.fetch(`RSpam_${message.author.id}`) == 4) { message.channel.send('Yavaşla Demiştim! 2 Dakika Mute Yedin <@'+message.author.id+'>')
db.delete(`RSpam_${message.author.id}`)
client.channels.cache.get(message.channel.id).createOverwrite(message.author.id,{
SEND_MESSAGES: false
})
const Aventadoria = new Discord.MessageEmbed()
.setColor('BLUE')
.setThumbnail(message.author.avatarURL({dynamic:true}))
.setDescription('Bir Mute İşlemi Uygulandı!')
.addField('Mutelenen Kullanıcı','`'+message.author.tag+'`')
.setAuthor(message.author.tag,message.author.avatarURL({dynamic:true}))
.setFooter(message.guild.name,message.guild.iconURL({dynamic:true}))
client.channels.cache.get(KorumaKanal).send(Aventadoria)
setTimeout(() => {
client.channels.cache.get(message.channel.id).createOverwrite(message.author.id,{
SEND_MESSAGES: true
})
message.channel.send('Muten Açıldı! <@'+message.author.id+'>')
},120000)
}
db.add(`Spam_${message.author.id}`,1)
setTimeout(async() => {
db.add(`Spam_${message.author.id}`,-1)
},4000)

}
})




client.on('message', async message => {
  if(message.channel.type !== 'text') return;
  const küfür = await db.fetch(`küfür.${message.guild.id}`);
  if(!küfür) return;
  const blacklist = ["oç", "sikerim", "Pezevenk", "siktiğimin piçi", "siktigimin pici", "sikik", "taşak", "am salağı", "kaşar", "taşşak", "ananı satayım", "siktir git", "Siktir git", "ampute", "sq", "sg", "orospu cocugu", "orospu cocu", "anneni sikim", "babanım", "babanı sikim", "allahını sikim", "Allahını sikim", "Allahım", "ananın amı", "Ananın amı", "Hassiktir", "hassiktir", "pezevenk", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  const uyarılar = [
  'İt is Haram bRo! 🤥',
  'Az düzgün konuş günaha girme! 🤧',
  'Aaaa ayıp dostum! 🥴',
  'Vayy ahlaksız çocuk! 🙀',
  'Tövbesteyşin! 🤫'];
  let uyarımesaj = uyarılar[Math.floor(Math.random() * uyarılar.length)];
  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(message.member.permissions.has('BAN_MEMBERS')) return;
  message.delete();
  message.channel.send(new Discord.MessageEmbed().setTitle('Küfür Kısıtlı').setDescription(`${message.author} ${uyarımesaj}`));
  }
  })
  
  });

client.on("guildMemberAdd", async member => {
  let isim = db.fetch(`otoisim_${member.guild.id}`)
if (!isim) return;
member.setNickname(isim)
})






client.on('userUpdate', (oldUser, newUser) => {
  client.guilds.cache.forEach(async guild => {
  if(!guild.members.cache.get(newUser.id)) return;
  const tagFetch = await db.fetch(`roltag.${guild.id}`);
  const roleFetch = await db.fetch(`tag.role.${guild.id}`);
  const logFetch = await db.fetch(`tag.log.${guild.id}`);
  if(!tagFetch || !roleFetch || !logFetch) return;
  let tag = tagFetch;
  let role = guild.roles.cache.get(roleFetch);
  let log = guild.channels.cache.get(logFetch);
  if(oldUser.username === newUser.username) return;
  if(newUser.username.includes(tag) && !oldUser.username.includes(tag)) {
  log.send(new Discord.MessageEmbed()
  .setTitle('Avethea - Tag Alındı.')
  .setDescription(`${newUser}  \`${tag}\` **tagını aldığı için ${role} rolü verildi!**`));
  guild.members.cache.get(newUser.id).roles.add(role.id);
  }
  if(oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
  log.send(new Discord.MessageEmbed()
  .setTitle('Avethea - Tag Çıkarıldı.')
  .setDescription(`${newUser}  \`${tag}\` **tagını çıkardığı için ${role} rolü alındı!**`));
  guild.members.cache.get(newUser.id).roles.remove(role.id);
  }
  })
  })
  /// YASAKLI TAG

client.on('guildMemberAdd', async member => {
  let guild = member.guild; 
  let user = guild.members.cache.get(member.id);
  
  const tag = await db.fetch(`banned-tag.${guild.id}`)
  const sayı = await db.fetch(`atıldın.${guild.id}.${user.id}`)
  if(user.user.username.includes(tag)) {
    
  if(sayı === null) {
  await db.add(`atıldın.${guild.id}.${user.id}`, 1)
  user.send(new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(guild.name, guild.iconURL)
  .setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atıldınız, tekrar giriş yapmayı denerseniz **yasaklanacaksınız**!`))
  await user.kick() }
  
  if(sayı === 1) {
  await db.delete(`atıldın.${guild.id}.${user.id}`)
  user.send(new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(guild.name, guild.iconURL)
  .setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atılmıştınız, tekrar giriş yapmayı denediğiniz için **${guild.name}** sunucusundan kalıcı olarak **yasaklandınız**!`))
  await user.ban() } }
    
  })
  
  
  client.on("guildMemberAdd", async member => {
  let isim = db.fetch(`otoisim_${member.guild.id}`)
if (!isim) return;
member.setNickname(isim)
})
  
client.on("channelDelete", async channel => {
  let kanal = await db.fetch(`klog_${channel.guild.id}`);
  if (!kanal) return;

    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.channels.create(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]); 

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Silen`, entry.executor.tag)

      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Açıldı!`)

      .setColor("BLACK");
    client.channels.cache.get(kanal).send(embed);

  }
);

client.on("channelCreate", async channel => {
  let kanal = await db.fetch(`klog_${channel.guild.id}`);
  if (!kanal) return;

    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);

  }
);

  
  
  
   client.on('ready', async () => {
      const x = await db.fetch('cekilisaven')
	  if (!x) return;
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
  
      function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
  
      function cekme(message, array) {
      var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || []
      var cekilenkisi = array[Math.floor(Math.random() * array.length)]
      if (!client.users.cache.get(cekilenkisi.id)) {
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
  
  let dasall = db.all().filter(i => i.ID.startsWith('cekilis_'))
  for (const ii of dasall) {
    const channel = client.channels.cache.get(db.fetch(`${ii.ID}.mesaj.kanal`))
    const mesaj = db.fetch(`${ii.ID}.mesaj.id`)
    const bitecegizamanms = db.fetch(`${ii.ID}.bitecek`)
    const kazanacak = db.fetch(`${ii.ID}.kazanacak`)
    const verilecek = db.fetch(`${ii.ID}.verilecek`)
    const cekilisid = db.fetch(`${ii.ID}.cekilisid`)
    let embed = new Discord.MessageEmbed()
    .setAuthor('🎉 Çekiliş 🎉')
    .setTitle('**' + verilecek + '**')
    .setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** Bekleniyor...`)
    .setFooter(`${kazanacak} kazanan | ID: ${cekilisid} | Bitecek:`)
    .setTimestamp(bitecegizamanms)
    .setColor("#2F3136")
    if(channel) {
channel.messages.fetch(mesaj).then(async msg => {
  msg.edit(embed)
  const reaction = msg.reactions.cache.first()
                const intervaley = setInterval(async function(){
                if (!db.has(ii.ID)) return clearInterval(intervaley)
                const kalanzaman = bitecegizamanms - Date.now()   
                if (kalanzaman <= 0) {
                  embed.setDescription(`Çekiliyor...`)
                  msg.edit(embed)
                  clearInterval(intervaley)
                  reaction.users.fetch().then(async kasiler => {
                    const gercekkisisayisi = kasiler.size - 1
                    if (gercekkisisayisi < kazanacak) {
                        let embed = new Discord.MessageEmbed()
                        .setAuthor('🎉 Çekiliş Bitti 🎉')
                        .setTitle('**' + verilecek + '**')
                        .setDescription(`Yeterli katılım olmadığından kazanan seçilemedi.`)
                        .setFooter(`${kazanacak} kazanan | Çekiliş Başlatıldı | Çekiliş ID: ${cekilisid} | Bitti:`)
                        .setTimestamp(bitecegizamanms)
                        .setColor("#2F3136")
                        msg.edit(embed)
                        msg.reactions.removeAll()
                        db.delete(`cekilis_${msg.id}`)
                        let thall = db.all().filter(i => i.ID.includes(msg.id))
                        for (const uu of thall) {
                          db.delete(uu.ID)
                        }
                    }else{
                        var array = reaction.users.cache.array()
                        var ukuk;
                        for (ukuk = 0; ukuk < kazanacak; ukuk++) {
                          cekme(msg, array)
                        }
                      await sleep(50)
                        let kazananherkes = db.fetch(`cekilis_${msg.id}.kazananlar`)
                            let embed = new Discord.MessageEmbed()
                            .setAuthor('🎉 Çekiliş Bitti 🎉')
                            .setTitle('**' + verilecek + '**')
                            .setDescription(`**Kazananlar:** <@${kazananherkes.join('>, <@')}>`)
                            .setFooter(`${kazanacak} kazanan | Çekiliş Başlatıldı |Çekiliş ID: ${cekilisid} | Bitti:`)
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
                  })
                }else{
                const kalanzamanyazi = destructMS(kalanzaman)
                embed.setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** ${kalanzamanyazi}`)
                msg.edit(embed)
                }
            }, 5000)
         })
    }
  }
})


//seviye
client.on("message", async msg => {
  if (msg.content.startsWith(ayarlar.prefix)) return;
  const db = require("quick.db");
  var id = msg.author.id;
  var gid = msg.guild.id;
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  let seviyexp = await db.fetch(`seviyexp${msg.guild.id}`);
  const skanal = await db.fetch(`seviyekanal${msg.guild.id}`);
  let kanal = msg.guild.channels.cache.get(skanal);
  if (msg.author.bot === true) return;
  let seviyeEmbed = new Discord.MessageEmbed();
  seviyeEmbed.setDescription(
    `Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl +
      1}** seviye oldun!`
  );
  seviyeEmbed.setFooter(`${client.user.username} | Seviye Sistemi`);
  seviyeEmbed.setColor("RANDOM");
  if (!lvl) {
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    db.set(`top_${id}`, 1);
  }
  let veri1 = [];
  if (seviyexp) veri1 = seviyexp;
  if (!seviyexp) veri1 = 5;
  if (msg.content.length > 7) {
    db.add(`xp_${id}_${gid}`, veri1);
  }
  let seviyesınır = await db.fetch(`seviyesınır${msg.guild.id}`);
  let veri2 = [];
  if (seviyesınır) veri2 = seviyesınır;
  if (!seviyesınır) veri2 = 250;
  if ((await db.fetch(`xp_${id}_${gid}`)) > veri2) {
    if (skanal) {
      kanal.send(
        new Discord.MessageEmbed()
          .setDescription(
            `Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl +
              1}** seviye oldun:tada:`
          )
          .setFooter(`${client.user.username} | Seviye Sistemi`)
          .setColor("RANDOM")
      );
    }
    db.add(`lvl_${id}_${gid}`, 1);
    db.delete(`xp_${id}_${gid}`);
  }
  db.set(`top_${id}`, Math.floor(lvl + 1));
});

//seviye rol main
client.on("message", async message => {
  var id = message.author.id;
  var gid = message.guild.id;
  let rrol = await db.fetch(`rrol.${message.guild.id}`);
  var level = await db.fetch(`lvl_${id}_${gid}`);
  if (rrol) {
    rrol.forEach(async rols => {
      var rrol2 = await db.fetch(`rrol2.${message.guild.id}.${rols}`);
      if (Math.floor(rrol2) <= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.add(rols);
      } else if (Math.floor(rrol2) >= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.remove(rols);
      }
    });
  }
  if (message.content == "b?buneolmgereksiz") {
    if (!rrol) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setFooter(
            `${client.user.username} Seviye-Rol Sistemi!`,
            client.user.avatarURL
          )
          .setDescription(`Herhangi bir rol oluşturulmadı.`)
      );
      return;
    }
    const { MessageEmbed } = require("discord.js");
    let d = rrol
      .map(
        x =>
          "<@&" +
          message.guild.roles.cache.get(x).id +
          ">" +
          " **" +
          db.get(`rrol3.${message.guild.id}.${x}`) +
          " Seviye**"
      )
      .join("\n");
    message.channel.send(
      new MessageEmbed()
        .setColor("RANDOM")
        .setFooter(
          `${client.user.username} Seviye-Rol Sistemi!`,
          client.user.avatarURL
        )
        .setDescription(`${d}`)
    );
  }
});
client.on("message", async message => {
  var id = message.author.id;
  var gid = message.guild.id;
  let srol = await db.fetch(`srol.${message.guild.id}`);
  var level = await db.fetch(`lvl_${id}_${gid}`);
  if (srol) {
    srol.forEach(async rols => {
      var srol2 = await db.fetch(`srol2.${message.guild.id}.${rols}`);
      if (Math.floor(srol2) <= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.add(rols);
      } else if (Math.floor(srol2) >= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.remove(rols);
      }
    });
  }
  if (
    message.content == "b?seviye-rolleri" ||
    message.content == "y!rütbeler"
  ) {
    if (!srol) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setFooter(
            `${client.user.username} Seviye-Rol Sistemi!`,
            client.user.avatarURL
          )
          .setDescription(`Herhangi bir rol oluşturulmadı.`)
      );
      return;
    }
    const { MessageEmbed } = require("discord.js");
    let d = srol
      .map(
        x =>
          "<@&" +
          message.guild.roles.cache.get(x).id +
          ">" +
          " **" +
          db.get(`srol3.${message.guild.id}.${x}`) +
          " Seviye**"
      )
      .join("\n");
    message.channel.send(
      new MessageEmbed()
        .setColor("RANDOM")

        .setFooter(
          `${client.user.username} Seviye-Rol Sistemi!`,
          client.user.avatarURL
        )
        .setDescription(`${d}`)
    );
  }
});
//bitiş//


client.on("guildMemberAdd", async member => {
  let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
  if (resimlihgbb) {
    const gözelkanal = member.guild.channels.cache.get(
      db.fetch(`giriş_${member.guild.id}`)
    );
    if (gözelkanal) {
      let username = member.user.username;
      if (gözelkanal.type === "text") {
        const bg = await Jimp.read(
          "https://cdn.discordapp.com/attachments/721758743678943263/735808414306795520/lNNpU1e.jpeg"
        );
        const userimg = await Jimp.read(
          member.user.displayAvatarURL({ format: "png" })
            ? member.user.displayAvatarURL({ format: "png" })
            : client.user.avatarURL()
        );
        var font;
        if (member.user.tag.length < 15)
          font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        else if (member.user.tag.length > 15)
          font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        await bg.print(font, 430, 170, member.user.tag);
        await userimg.resize(362, 362);
        await bg
          .composite(userimg, 43, 26)
          .write("./img/" + client.user.username + "Hosgeldin.png");
        setTimeout(function() {
          if (member.user.id === ayarlar.sahip) {
            gözelkanal.send(
              new Discord.MessageAttachment(
                "./img/" + client.user.username + "Hosgeldin.png"
              )
            );
            gözelkanal.send("");
          } else {
            gözelkanal.send(
              new Discord.MessageAttachment(
                "./img/" + client.user.username + "Hosgeldin.png"
              )
            );
          }
        }, 1000);
        setTimeout(function() {
          fs.unlinkSync("./img/" + client.user.username + "Hosgeldin.png");
        }, 10000);
      }
    }
  }
});
client.on("guildMemberRemove", async member => {
  let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
  if (resimlihgbb) {
    const gözelkanal = member.guild.channels.cache.get(
      db.fetch(`giriş_${member.guild.id}`)
    );
    if (gözelkanal) {
      let username = member.user.username;
      if (gözelkanal.type === "text") {
        const bg = await Jimp.read(
          "https://cdn.discordapp.com/attachments/721758743678943263/735810047174639676/DYA48yH.jpeg"
        );
        const userimg = await Jimp.read(
          member.user.displayAvatarURL({ format: "png" })
            ? member.user.displayAvatarURL({ format: "png" })
            : client.user.avatarURL()
        );
        var font;
        if (member.user.tag.length < 15)
          font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        else if (member.user.tag.length > 15)
          font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        await bg.print(font, 430, 170, member.user.tag);
        await userimg.resize(362, 362);
        await bg
          .composite(userimg, 43, 26)
          .write("./img/" + client.user.username + "Gorusuruz.png");
        setTimeout(function() {
          if (member.user.id === ayarlar.sahip) {
            gözelkanal.send(
              new Discord.MessageAttachment(
                "./img/" + client.user.username + "Gorusuruz.png"
              )
            );
            gözelkanal.send("");
          } else {
            gözelkanal.send(
              new Discord.MessageAttachment(
                "./img/" + client.user.username + "Gorusuruz.png"
              )
            );
          }
        }, 1000);
        setTimeout(function() {
          fs.unlinkSync("./img/" + client.user.username + "Gorusuruz.png");
        }, 10000);
      }
    }
  }
});

client.on('message',async message => {
client.x = {
"prefix":db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
}
})


client.on('message',async message => {
if (message.channel.type === 'dm') return;
  const Tag = await db.fetch(`roltag.${message.guild.id}`)
  const TRol = await db.fetch(`tag.role.${message.guild.id}`)
  const TKanal = await db.fetch(`tag.log.${message.guild.id}`)
if (!TRol) return;
if (!Tag) return;
if (!TKanal) return;
 
if (message.author.username.includes(Tag)) {
if (client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.cache.has(TRol)) return;
message.member.roles.add(TRol)
client.guilds.cache.get(message.guild.id).channels.cache.get(TKanal).send(`> \`${message.author.username}\` (${message.author}) **Adlı Sunucu Üyesi Kullanıcı Adına** \`${Tag}\` **Sembolünü Eklediği İçin Ona** \`${message.guild.roles.cache.find('id',TRol).name}\` **Rolü Verildi!**`)
message.author.send(`> \`${message.guild.name}\` **Adlı Sunucuda Ayarlanmış Olan** \`${Tag}\` **Sembolünü Adına Eklediğin İçin Sana** \`${message.guild.roles.cache.find('id',TRol).name}\` **Rolü Verildi.**`)
}
if (!message.author.username.includes(Tag)) {
if (client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).roles.cache.has(TRol)) {
message.member.roles.remove(TRol)
client.guilds.cache.get(message.guild.id).channels.cache.get(TKanal).send(`> \`${message.author.username}\` (${message.author}) **Adlı Sunucu Üyesi Kullanıcı Adından** \`${Tag}\` **Sembolünü Çıkardığı İçin Ondan** \`${message.guild.roles.cache.find('id',TRol).name}\` **Rolü Geri Alındı!**`)
message.author.send(`> \`${message.guild.name}\` **Adlı Sunucuda Ayarlanmış Olan** \`${Tag}\` **Sembolünü Adından Çıkardığın İçin Senden** \`${message.guild.roles.cache.find('id',TRol).name}\` **Rolünü Geri Aldım.**`)
}
}
})

client.on("guildBanAdd", async (guild, user) => {
  if (!db.fetch(`koruma_${guild.id}`)) return
  if (!db.fetch(`korumakanal_${guild.id}`)) return

  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
  let logKanali = db.fetch(`korumakanal_${guild.id}`) // BURAYA LOGLANACAK KANALIN ID
  let uye = guild.members.cache.get(entry.executor.id);
  if (entry.executor.id === client.user.id || entry.executor.id === guild.owner.id) return;
  try {
    await uye.roles.set(uye.roles.cache.filter(rol => !rol.hasPermission("BAN_MEMBERS")).array());
	    await uye.roles.set(uye.roles.cache.filter(rol => !rol.hasPermission("BAN_MEMBERS")).array());
    guild.unban(user.id, { reason: "Sağ tık ban atıldığı için kaldırıldı!" });
    guild.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setDescription(`${uye} adlı yetkili bir sağ tık ban attı ve ban yetkileri alındı!`).setTitle('Sağ Tık Ban Koruma').setTimestamp().setFooter(client.user.username + " Ban Koruma", client.user.avatarURL));
  } catch (err) { console.log(err) };
});





client.on('guildDelete', guild => {

  let avex = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setTitle(" Bot Kickledi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('792873298416631808').send(avex);
  
  });
  
  
  client.on('guildCreate', guild => {
  
  let avex = new Discord.MessageEmbed()
  
  .setColor("GREEN")
  .setTitle(" Bot Eklendi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('792873072222404638').send(avex);
  
  });
  
  
  
  
  
 client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
    }
  }
});
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "merhaba") {
      msg.reply("**Merhaba Hoşgeldin.**");
    }
  }
});
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "selamun aleykum") {
      msg.reply("**Aleykum Selam Hoşgeldin.**");
    }
  }
});

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "selam") {
      msg.reply("**Selam Hoşgeldin.**");
    }
  }
});
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sea") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
    }
  }
});







client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let kanal = db.fetch(`kayıthg_${member.guild.id}`);
  let kayıtçı = db.fetch(`kayıtçırol_${member.guild.id}`)
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;

  let user = client.users.cache.get(member.id);
  require("moment-duration-format");

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const ayyy = moment.duration(kurulus).format("M");
  var kontrol = [];

  if (ayyy < 1) {
    kontrol = "**Şüpheli**";

  }
  if (ayyy > 1) {
    kontrol = "**Güvenilir**";
  }

  if (!kanal) return;
 

  const embed = new Discord.MessageEmbed()
    .setColor("36393F")
    .setThumbnail(
      user.avatarURL({
        dynamic: true,
        format: "gif",
        format: "png",
        format: "jpg",
        size: 2048
      })
    )
  
    .setDescription(
      `<a:PepeRain:800457767638401035> **Hoşgeldin!** ${
        member.user
      }, seninle beraber **${
        guild.memberCount
      }** kişi olduk! \n <a:0ec998fa7d984b0791e9af271dbcf216:800456317243883540> Kaydının yapılması için  **İsim** ve **Yaş** Yazman Gerek. \n <a:f2b1931abb214095a0e739d606cc41d8:800457748592590848> Hesap Kuruluş: **${moment(
        user.createdAt
      ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
        user.createdAt
      ).format(
        "YYYY HH:mm:ss"
      )}** \n <a:5524415ae93b46c3a397142de03ef014:800456337669488730> Bu vatandaş: ${kontrol} \n <a:8f79ef1c4ae44f68bc82d6eba5137304:800457734021054507> <@&${kayıtçı}> Rolundeki Yetkililer Sizinle İlgilecektir`
    );

  client.channels.cache.get(kanal).send(embed);
  client.channels.cache.get(kanal).send(`<@&${kayıtçı}>`)
});









client.on("guildMemberAdd", async member => {
  let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`);
  let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`);
  if (!sayı || !kanal) return;
  let sonuç = sayı - member.guild.memberCount;
  client.channels.cache
    .get(kanal)
    .send(
      `<a:f2b1931abb214095a0e739d606cc41d8:800457748592590848>${member}, Aramıza katıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`
    );
  return;
});
client.on("guildMemberRemove", async member => {
  let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`);
  let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`);
  if (!sayı || !kanal) return;
  let sonuç = sayı - member.guild.memberCount;

  client.channels.cache
    .get(kanal)
    .send(
      `<a:PepeRain:800457767638401035>${member}, Aramızdan ayrıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`
    );
  return;
});



client.on("guildMemberAdd", async member => {
  let veri = db.fetch(`csbo_${member.guild.id}`)  
  if (veri){
  if (member.user.bot) {
  let csr = member.guild.roles.cache.get(veri)
  if(csr){
  member.roles.add(csr)
  }}}
  })
  
  
  
  
  
  
  
  
  
  
  
  
  /*client.on("message", message => {
  let user = message.author;
  db.add(`xp_${message.guild.id}_${user.id}`, 3);
  db.add(`messages_${message.guild.id}_${message.author.id}`, 1);
  let messagefetch = db.fetch(
    `messages_${message.guild.id}_${message.author.id}`
  );

  let messages;
  if (messagefetch == 25) messages = 25;
  //Level 1
  else if (messagefetch == 65) messages = 65;
  // Level 2
  else if (messagefetch == 115) messages = 115;
  // Level 3
  else if (messagefetch == 200) messages = 200;
  // Level 4
  else if (messagefetch == 300) messages = 300;
  // Level 5
  else if (messagefetch == 375) messages = 375;
  //level 6
  else if (messagefetch == 500) messages = 500;
  // Level 7
  else if (messagefetch == 575) messages = 575;
  // Level 8
  else if (messagefetch == 700) messages = 700;
  // Level 9
  else if (messagefetch == 775) messages = 775;
  // Level 10
  else if (messagefetch == 1000) messages = 1000;
  // level 11
    else if (messagefetch == 1150) messages = 1150;
  // Level 12
  else if (messagefetch == 1250) messages = 1250;
  // Level 13
  else if (messagefetch == 1350) messages = 1350;
  // Level 14
  else if (messagefetch == 1500) messages = 1500;
  // Level 15
  else if (messagefetch == 1650) messages = 1650;
  // level 16
  else if (messagefetch == 1750) messages = 1750;
  // Level 17
  else if (messagefetch == 1900) messages = 1900;
  // Level 18
  else if (messagefetch == 2050) messages = 2050;
  // Level 19
  else if (messagefetch == 2250) messages = 2250;
  // Level 20
  else if (messagefetch == 2500) messages = 2500;
  // level 21
  // ADD MORE IF U WANT
  if (!isNaN(messages)) {
    db.add(`level_${message.guild.id}_${message.author.id}`, 1);
    let levelfetch = db.fetch(
      `level_${message.guild.id}_${message.author.id}`
    );

    let levelembed = new Discord.MessageEmbed()
      .setDescription(
        `${message.author}, You have leveled up to level ${levelfetch}`
      )
      .setColor(`#66ff99`)
      .setAuthor(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(levelembed);
    let levelembed2 = new Discord.MessageEmbed()
      .setDescription(
        `<a:star:747477610170417283> ${message.author}, Leveled Up to Level ${levelfetch}`
      )
      .setColor(`#66ff99`)
      .setAuthor(`${message.author.tag}`, message.author.avatarURL());
    client.channels.cache.get(`${db.fetch(`levelchannel_${message.guild.id}`)}`).send(levelembed2);
  }
});*/










//kanal koruma 
client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})

//anti raid
client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`antiraidK_${member.guild.id}`)== "anti-raid-aç"
  if (!kanal) return;  
  var bera = member.guild.owner
  if (member.user.bot === true) {
     if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
    let ber = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL())
      .setDescription(`**${member.user.tag}** (${member.id}) adlı bota bir yetkili verdi eğer kaldırmak istiyorsanız **a!bot-izni kaldır botun_id**.`);
    bera.send(ber);
     } else {
       let izinverilmemişbot = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL())
      .setDescription("**" + member.user.tag +"**" + " (" + member.id+ ") " + "adlı bot sunucuya eklendi ve banladım eğer izin vermek istiyorsanız **a!bot-izni ver botun_id**")
      member.guild.members.ban(member, { reason : "Bu kısıma sebep yazınız." }) 
       bera.send(izinverilmemişbot)
}
  }
});






  