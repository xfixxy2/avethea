const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  const BaşHarfleriBüyükYapAMK = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
  .setDescription(`${message.member.roles.cache.filter(Revenge => Revenge.name !== "@everyone").map(Revenge => Revenge).join(' **|** ') ? message.member.roles.cache.filter(Revenge => Revenge.name !== "@everyone").map(Revenge => Revenge).join(' **|** ') : 'Hiç Rol Bulunmuyor.'}`)
  message.channel.send(BaşHarfleriBüyükYapAMK)

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rolbilgi'],
    permLevel: 0
}

exports.help = {
    name: 'rol-bilgi',
    description: 'rol bilgi.',
    usage: 'rolbilgi'
}