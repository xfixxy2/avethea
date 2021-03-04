const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require('quick.db')
exports.run = async (client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	  const duration = moment.duration(client.uptime).format(" D [day], H [hours], m [minutes], s [seconds]");
  
let aylartoplam = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "	June",
        "07": "	July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
  }
 let aylar = aylartoplam 

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


  const msg = new Discord.MessageEmbed()
    .setColor("")
    .setFooter(client.user.tag, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .setTitle(`Avethea İstatistik`)
    .addField(
      "<a:krmz:733809296545939506> **Owner:**", "<@675593025468235806>,<@758786208892715010>",
	  false
    )
    .addField(
      "<a:krmz:733809296545939506> **member count:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **guilds size:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **channel size:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
  
    .addField("<a:krmz:733809296545939506> **Discord.js version:**", "v" + Discord.version, false)
    .addField("<a:krmz:733809296545939506> **Node.JS version:**", `${process.version}`, false)
    .addField("<a:krmz:733809296545939506> **Ping:**", client.ws.ping + " ms", false)
    .addField("<a:krmz:733809296545939506> **client online time**", duration)
    .addField("<a:krmz:733809296545939506> **bot created at**", s)
  return message.channel.send(msg);

} else {
	  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
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
  }
 let aylar = aylartoplam 

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


  const msg = new Discord.MessageEmbed()
    .setColor("")
    .setFooter(client.user.tag, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .setTitle(`Avethea İstatistik`)
    .addField(
      "<a:krmz:733809296545939506> **Botun Ana Sahibi:**", "<@758786208892715010>",
	  false
    )
    .addField(
      "<a:krmz:733809296545939506> **Hizmet Verdiği Kullanıcı Sayısı:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **Hizmet Verdiği Sunucu Sayısı:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "<a:krmz:733809296545939506> **Hizmet Verdiği Kanal Sayısı:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
  
    .addField("<a:krmz:733809296545939506> **Botun Discord.JS sürüm:**", "v" + Discord.version, false)
    .addField("<a:krmz:733809296545939506> **Botun Node.JS sürüm:**", `${process.version}`, false)
    .addField("<a:krmz:733809296545939506> **Ping:**", client.ws.ping + " ms", false)
    .addField("<a:krmz:733809296545939506> **Botun Açık Olduğu Süre**", duration)
    .addField("<a:krmz:733809296545939506> **Botun Kuruluş Tarihi**", s)
  return message.channel.send(msg);

}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'i','statistics'],
    permLevel: 0
  };
   
  exports.help = {
    name: "istatistik",
    description: "Bot i",
    usage: "istatistik"
  };