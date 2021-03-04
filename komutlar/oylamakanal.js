const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (db.fetch(`dil_${message.author.id}`) == 'en') {
	 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: you must have administrator perm.')
     let oylamakanali = message.mentions.channels.first();
     if (!oylamakanali) return message.channel.send(':no_entry: please mention channel')
    db.set(`okanal_${message.guild.id}`, oylamakanali.id)
     message.channel.send(`succesful!`)
} else {
	 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Oylama kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let oylamakanali = message.mentions.channels.first();
     if (!oylamakanali) return message.channel.send(':no_entry: Oylama kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `a!oylama-kanal #kanal`')
    db.set(`okanal_${message.guild.id}`, oylamakanali.id)
     message.channel.send(`Kanal ${oylamakanali} olarak ayarlandı!`)
}
     
   }
   

    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oylamakanal','votingchannel'],
    permLevel: 2,
    kategori: "yetkili"
}

exports.help = {
    name: 'oylama-kanal',
    description: 'Oylama kanalını seçmenize yarar',
    usage: 'oylama-kanal'
}