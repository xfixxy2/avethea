const Discord = require('discord.js');
const client = new Discord.Client(); //Dcs Ekibi
const moment = require('moment');

exports.run = (client, message) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${moment().format('**DD/MM/YYYY**')}`);
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tarih','gün','th','date'],
  permLevel: 0
}; //Dcs Ekibi

exports.help = {
  name: 'tarih',
  description: 'Tarihi ve saati gösteririr.',
  usage: 'tarih'
};