const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
  let yetkili = message.author;
  let sahip = message.guild.members.cache.get(args[0]);
  let botisim = message.guild.members.cache.get(args[1]);

let log = db.fetch(`sa1_${message.guild.id}`)    
let rol = db.fetch(`sa7_${message.guild.id}`)  
let b = db.fetch(`selam12_${message.guild.id}`)  

  if (!botisim)
    return message.channel
      .send(`Sertifika verilecek botun Sahibin ID'sini belirtmelisin.`)
      .then(msg => msg.delete(5000));
  if (!sahip)
    return message.reply(
      "Sertifika verilecek botun ID'sini belirtmelisin."
    );
  message.delete();
  sahip.roles.add(rol);
  botisim.roles.add(b);
  let embedd = new Discord.MessageEmbed().setDescription(
    ` :white_small_square: | **Tebrikler!** ${botisim} **Adlı botun sertifika aldı. Sertifika rolleri verildi** \n\n  :white_small_square:  | **Onaylayan yetkilimiz =** ${yetkili} `
  );
  sahip.send(embedd);
  let embed2 = new Discord.MessageEmbed()
    .setColor("#5fbf00")
    .setDescription(
      ` :white_small_square:  | ${sahip} **Adlı üyenin** ${botisim} **Adlı botu sertifika aldı.** \n\n  :white_small_square:  | **Onaylayan yetkilimiz =** ${yetkili} `
    );
  client.channels.cache.get(log).send(embed2);
};
//youtube.com/Ardééks
//teşekkürler xFixxy
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sertifika-onay"],
  permLevel: 0
};

exports.help = {
  name: "s-onayla",
  description: "Sunucuya eklenen botu onaylar.",
  usage: "botonayla <bot ismi>"
};
6;