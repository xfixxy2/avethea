const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("wio.db");


exports.run = function(client, message, args) {
  let yetkili = message.author;
  let botisim = message.guild.members.cache.get(args[1]);
  let sahip = message.guild.members.cache.get(args[0]);
    let sebep = args.slice(2).join(" ")
let log = db.fetch(`sa1_${message.guild.id}`)    
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
  let embed2 = new Discord.MessageEmbed()
    .setColor("#7f0000")
    .setDescription(
      ` :white_small_square: |**Maalesef!** ${botisim} **adlı botunun sertifikası reddedildi.** \n  :white_small_square: | **Sebep =** \`${sebep}\` \n  :white_small_square: | **Reddeden yetkili =** ${yetkili} `
    );

  let embed = new Discord.MessageEmbed()
    .setColor("#7f0000")
    .setDescription(
      `  :white_small_square: | ${sahip} **Adlı Üyemizin** ${botisim} **İsimli Botunun Sertifikası Reddedilmiştir.** \n :white_small_square:  | **Sebep =** \`${sebep}\` \n :white_small_square:  | **Reddeden yetkili =** ${yetkili} `
    );

  if (!botisim)
    return message.channel
      .send(`Sertifika başvurusu reddedilecek botun Sahip İd'sini belirtmelisin`)
      .then(msg => msg.delete(10000));
  if (!sebep)
    return message.channel
      .send(`Sertifika başvurusu reddedilecek botun red sebebini belirtmelisin`)
      .then(msg => msg.delete(10000));
  if (!sahip)
    return message.channel
      .send(`Sertifika başvurusu reddedilecek botun  ID'sini belirtmelisin`)
      .then(msg => msg.delete(10000));
  message.delete();
  client.channels.cache.get(log).send(embed);
  sahip.send(embed2);
};
//youtube.com/Ardééks
//teşekkürler xFixxy
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sertifika-reddet", "s-red"],
  permLevel: 0
};

exports.help = {
  name: "s-red",
  description: "Sunucuya eklenen botu reddeder.",
  usage: "botreddet <bot ismi> - <sebep>"
};