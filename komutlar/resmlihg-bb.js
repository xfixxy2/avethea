const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Bu komutu kullanabilmek için `Sunucuyu Yönet` iznine sahip olmalısın')
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix  
  let giriş = message.mentions.channels.first();
  const ip = await db.fetch(`giriş_${message.guild.id}`)
  const slm = args.join();
     
           // Tamamen Kapat
  if(slm === "durdur" || slm === "kapat" || slm === "sıfırla") {
    if(!ip) return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`)
    db.delete(`giriş_${message.guild.id}`)
    message.channel.send(`Resimli Hoşgeldin özelliği başarıyla devredışı bırakıldı!`)
    return
  }
     
  if(ip) { // Eğer kanal zaten ayarlı ise
        if (!client.channels.get(ip)) {
          db.delete(`giriş_${message.guild.id}`);
          return
        }
     message.channel.send(`Resimli Hoşgeldin kanalı zaten <#${ip}> olarak ayarlı! \nDevredışı bırakmak için: \`${prefix}resimlihoşgeldin kapat\` yazmalısın.`)
    return
  }
     
  if (!giriş) return message.channel.send(`Bir kanal belirtmelisin! \n\n\`Ne işe yarar?\`  Sunucuya biri katıldığında veya sunucudan biri ayrıldığında belirlediğiniz kanala resimli şekilde atar. \nAktif etmek için:  \`${prefix}resimli-hg-bb #kanal\`  \nDevredışı bırakmak için: \`${prefix}resimli-hg-bb kapat\`  yazmalısın.`)
    try {
     let i = await db.set(`giriş_${message.guild.id}`, giriş.id)
      const sgamk = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`Resimli Hoşgeldin kanalı ${giriş} olarak ayarlandı! \nDevredışı bırakmak için: \`${prefix}resimlihoşgeldin kapat\` yazmalısın.`)
    return message.channel.send(sgamk)
     } catch (e) {
       return message.channel.send('Bir hata var! Lütfen yapımcıya bildirin; '+e.message)
    }
     
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['resimli-hoşgeldin', 'resimlihgbb', 'resimli-hg-bb'],
 permLevel: 0
};
exports.help = {
 name: 'resimlihoşgeldin',
 description: 'Resimli giriş-çıkış mesajının yollanacağı kanalı ayarlar.',
 usage: 'resimli-hg-bb <#kanal>',
 kategori: 'yetkili'
};