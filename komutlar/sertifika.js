const Discord = require("discord.js");
const db = require("wio.db");
exports.run = function(client, message, args) {
  let botisim = args[0];

let kanal = db.fetch(`sa9_${message.guild.id}`)    
let log = db.fetch(`sa1_${message.guild.id}`)    
  if (message.channel.id !== kanal)
    return message.channel
      .send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(5000));
  if (message.channel.id == kanal) {
    if (!botisim)
      return message.channel
        .send(`Sertifika başvurusu yapacağın botun ID'sini belirtmelisin.`)
        .then(msg => msg.delete(5000));

    let embed2 = new Discord.MessageEmbed()
      .setColor("#ffff00")

      .setDescription(
        `>  ` +
          `<@${message.author.id}> adlı kullanıcı <@${botisim}> adlı bota sertifika başvurusu yaptı.`
      );
    client.channels.cache.get(log).send(embed2);

    message.channel
      .send(
        `:white_small_square:__**Sertifika isteğiniz alındı.**__`
      )
      .then(msg => msg.delete(3000));
  }
};
//youtube.com/Ardééks
//teşekkürler xFixxy
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sertifika-ekle"],
  permLevel: 0
};

exports.help = {
  name: "sertifika",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};