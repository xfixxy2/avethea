const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.author.id}`);
  if (kontrol == "tr") {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Lütfen bir dil belirtiniz! Diller: `tr`, `en`__"
      );
      return;
    }
    if (dil === "en") {
      db.set(`dil_${message.author.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "tr") {
      db.set(`dil_${message.author.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send("__Hatalı dil! Diller: `tr`, `en`__");
      return;
    }
  } else {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Please specify a language! Languages: `tr`, `en`__"
      );
      return;
    }
    if (dil === "en") {
      db.set(`dil_${message.author.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "tr") {
      db.set(`dil_${message.author.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send(
        "__Incorrect language! Languages: `tr`, `en`__"
      );
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["language", "lang"],
  permLevel: 0
};

exports.help = {
  name: "dil",
  description: "dil",
  usage: "dil"
};
