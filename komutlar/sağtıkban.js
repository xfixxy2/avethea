 const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('⛔ Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  
    if (!args[0]) return message.channel.send('⛔ Sistemi kullanabilmek için: `'+client.x.prefix+'sağtıkban aç veya kapat`')

    if (args[0] == 'aç') {
		const kanal = message.mentions.channels.first()
        if (!kanal) return message.channel.send('kanal nerde orospıcçcoy')
        db.set(`koruma_${message.guild.id}`, 'acik')
		db.set(`korumakanal_${message.guild.id}`,kanal.id)
        message.channel.send(`Sağ Tık Ban sistemi açıldı.`)

    }
    if (args[0] == 'kapat') {
        db.set(`koruma_${message.guild.id}`, 'kapali')
		db.delete(`korumakanal_${message.guild.id}`)
        message.channel.send(`Sağ Tık Ban sistemi kapatıldı`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sağtıkban'],
    permLevel: 0
};

exports.help = {
    name: 'sağtıkban',
    description: '',
    usage: 'sağtıkban aç/kapat'
}; 