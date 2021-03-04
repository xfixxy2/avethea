const Discord = require('discord.js')
exports.run = (client, message, args) => {
  if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(new Discord.MessageEmbed().setTitle('**`Kanalları Yönet` İzni sende yok.**'));

  message.channel.clone().then(channelNuke => {
    let position = message.channel.position;
    channelNuke.setPosition(position);
    const embed = new Discord.MessageEmbed()
    .setTitle('Başarılı Avethea Füze Attı!')
    .setDescription('Kanal Başarılı Bir Şekilde Kopyalandı.')
.setImage('https://media.discordapp.net/attachments/757155245125140481/774264775622000660/PATLAMA.gif')    
    .setColor('RED')
    channelNuke.send(embed)
    message.channel.delete();
  }); 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "nuke",
  description: "Better antispamdaki nuke komutu işte",
  usage: "nuke"
};