const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (require('quick.db').fetch(`dil_${message.author.id}`) == 'en')
	{
	 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`**${bans.size}** members banned.`))
        .catch(console.error);	
	}else {
		 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`Sunucunuzda **${bans.size}** Banlanmış Uye Bulunmakta.`))
        .catch(console.error);
	}
}

exports.conf = {
    enabled: true,
    runIn: ["bansay"],
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "bansay",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansay"
  }