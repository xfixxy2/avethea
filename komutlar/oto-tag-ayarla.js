const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
 if (db.fetch(`dil_${message.author.id}`) == 'en') {
	     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('you must have manage guild perm') 
     let mesaj = args.join(' ');
     if (!mesaj) return message.channel.send("please join tag"); 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
      await db.set(`ototag_${message.guild.id}`, mesaj)
	  	  const embed = new Discord.MessageEmbed()
        
  .setDescription("succesful!")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
 } else {
	     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     let mesaj = args.join(' ');
     if (!mesaj) return message.channel.send("Ototag ayarlamak için bir değer belirtmelisiniz. `a!oto-tag || - `"); 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
      await db.set(`ototag_${message.guild.id}`, mesaj)
	  	  const embed = new Discord.MessageEmbed()
        
  .setDescription(`Ototag Sistemi Başarıyla Açıldı Tag \`${mesaj}\` Olarak Ayarlandı!` + "\n\n Kapatmak için **`a!oto-tag-kapat`** Yazabilirsiniz! Ototag Kanal Ayarlamyı Unutmayın! **Not** Botun Rolu En üste olması lazım")
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send(embed);
 }

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['auto-tag'],
  permLevel: 3
};

exports.help = {
  name: 'oto-tag',
  description: 'nblm',
  usage: 'ototag'
};
