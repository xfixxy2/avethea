const Discord = require("discord.js");
const db = require('wio.db')
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let yetkilii  = db.fetch(`botlistyetkilirol_${message.guild.id}`)
  let yetkili = message.author;
  if(!message.member.roles.cache.has(yetkilii)) return message.channel.send(`:white_small_square: Bu Komudu Kullanabilmen İçin <@${yetkilii}> Rolüne Sahip Olmalısın! Degilsen ${ayarlar.prefix}botlist-yetkili-rol @rol`)
  let sahip = message.guild.members.cache.get(args[0]);
  let botisim = message.guild.members.cache.get(args[1]);
  let botisim2 = args[1];
  let prefix = args[2];
  let isim = client.users.cache.get(args[1]);
  let log = db.fetch(`ardeeks_${message.guild.id}`) 
  let rol = db.fetch(`anan123_${message.guild.id}`)  
let b = db.fetch(`xfixxy-ardeeks_${message.guild.id}`)  

  if (!botisim)
    return message.channel
      .send(`Onaylanacak botun ID'sini girmen gerekiyor.`)
      .then(msg => msg.delete(5000));
  if (!sahip)
    return message.reply(
      "Onaylanacak botun sahibinin ID'sini girmen gerekiyor."
    );
  if (!prefix) return message.reply("Onaylanacak botun prefixini yazmalısın.");
  message.delete();
  sahip.roles.add(rol);
  message.guild.members.cache.get(botisim2).setNickname(``);
  botisim.roles.add(b);
  let embedd = new Discord.MessageEmbed().setDescription(
    ` :white_small_square: | **Üzgünüm!** ${botisim} **İsimli Botunuz Reddedilmiştir.** \n\n  :white_small_square: | ** Botunuzu  Reddeden Yetkilimiz =  ** ${yetkili} ` );
  sahip.send(embedd);
  let embed2 = new Discord.MessageEmbed()
    .setColor("#5fbf00")
    .setDescription(
      ` :white_small_square: | ${sahip} **İsimli kişinin** ${botisim} **Adlı Botu Reddedildi.** \n\n  :white_small_square: | **Botunuzu Reddeden  Yetkilimiz =** ${yetkili} `
);
  client.channels.cache.get(log).send(embed2);
};
//youtube.com/Ardééks
//teşekkürler xFixxy
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reddet", "red","botukov","botureddet","bot-reddet"],
  permLevel: 0
};

exports.help = {
  name: "botreddet",
  description: "Sunucuya eklenen botu onaylar.",
  usage: "botonayla <bot ismi>"
};