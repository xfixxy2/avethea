const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  const embed2 = new Discord.MessageEmbed()
  .setDescription('**please wait...**')
   let start = Date.now(); 
   let mesaj = await message.channel.send(embed2)
    let diff = (Date.now() - start); 
    let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`**Avethea Bot**\nmessage ping; **${diff}ms** \n\n **Avethea Bot**\nclient ping: **${API}ms**`)
        mesaj.edit(embed);  
    }, 5000) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: '',
  usage: ''
};