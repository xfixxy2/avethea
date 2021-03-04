const Discord = require("discord.js");
const db = require("wio.db");
exports.run = async (client, message, args) => {
  let yetkilii  = db.fetch(`botlistyetkilirol_${message.guild.id}`)

  if(!message.member.roles.cache.has(yetkilii)) return message.channel.send(`<a:by:748515598765391933> Bu Komudu Kullanabilmen İçin <@&${yetkilii}> Rolüne Sahip Olmalısın! Degilsen v!botlist-yetkili-rol @rol`)
  const sahip = args[0];
  if (!sahip)
    return message
      .reply(`Bir kullanıcı idsi girmelisin.`)
      .then(msg => msg.delete(5000));
const sebep = args.slice(1).join(" ");
  if (!sebep)
    return message
      .reply(`Bir sebep belirtmelisin.`)
      .then(msg => msg.delete(5000));
  let kanal = await db.fetch(`hgK9_${message.guild.id}`); 
  if (!kanal) return;
  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<@${sahip}> kullanıcının botu başarıyla reddedildi!`);
  message.channel.send(embed).then(msg => msg.delete(5000));
  const embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`Botunuz ${sebep} sebebinden reddedildi!`)
  const embed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(
    `:red_circle: | ${message.author} adlı yetkili tarafından <@${sahip}> adlı kullanıcının botu \`${sebep}\` sebebinden dolayı reddedldi!`
  );
  client.channels.cache.get(kanal).send(embed2); // Kanal ID
  let yetkilikanal = await db.fetch(`hgK2_${message.guild.id}`); 
  if (!yetkilikanal) return;
  const yetkili = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Reddedildi")
  .setDescription(`**Yetkili**\n${message.author}\n**Bot Sahibi**\n<@${sahip}>\n**Sebep**\n${sebep}`)
  client.channels.cache.get(yetkilikanal).send(yetkili);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  PermLevel: 0
};

 //youtube.com/xfixxyyy
//teşekkürler xFixxy

exports.help = {
  name: "reddet",
  description: "Bot ekleme başvurusu",
  usage: "bot"
};
