//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
const dil = require('quick.db').fetch(`dil_${message.author.id}`)
if (dil == 'en' ) {
	let tavsiye = args.join(" ").slice(0);
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **please join suggestions **`)
  .setColor("#b9b608")
  if(!tavsiye) return message.channel.send(sebep2);
let user = message.author.tag;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.cache.get("758786208892715010")//rapor edilecek kişinin idsi
let embed = new Discord.MessageEmbed()
.setTitle("Tavsiye Bildiri")
.setThumbnail(bot.user.avatarURL())
.addField("Tavsiye", tavsiye)
.addField("Sunucu Adı", guild)
.addField("Sunucu ID", guildid)
.addField("Rapor Eden", user, true)
.setColor("GOLD")
   message.react("👍");

//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
message.channel.send(":white_check_mark: **| Thank you! succesfuly sent my owner. | :heart:**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))

} else {
	let tavsiye = args.join(" ").slice(0);
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **Tavsiyenize Yazar mısın ?**`)
  .setColor("#b9b608")
  .setFooter(`Bot Tavsiye Sistemi`)
  if(!tavsiye) return message.channel.send(sebep2);
let user = message.author.tag;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.cache.get("758786208892715010")//rapor edilecek kişinin idsi
let embed = new Discord.MessageEmbed()
.setTitle("Tavsiye Bildiri")
.setThumbnail(bot.user.avatarURL())
.addField("Tavsiye", tavsiye)
.addField("Sunucu Adı", guild)
.addField("Sunucu ID", guildid)
.addField("Rapor Eden", user, true)
.setColor("GOLD")
   message.react("👍");

//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
message.channel.send(":white_check_mark: **| Tavsiyeniz Başarı İle Bot Sahibime İletildi. Teşekkür Ederiz. | :heart:**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))

}
}
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advice'],
  permLevel: 0  
};
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
exports.help = {
  name: 'tavsiye',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'prefix+bug-bildir <bug>'
}
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.