const Discord = require("discord.js")
const ms = require("quick.db")

module.exports.run = async (bot, message, args) => {
const db = require('quick.db')
    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Yapmak İçin Kick Members Yetkisine Sahip Olmalısın.")
    const mod = message.author;
        const modlog = db.fetch(`modlogKK_${message.guild.id}`)
  if (!modlog) return message.reply('Mod log kanalı ayarlamamışsınız.');
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send((`Kullanıcı Bulunamadı`))
    if (!user.roles.find(`name`, "Juke | Susturma")) return message.channel.send('Kişi Mutelenmemiş')
    let muterole = message.guild.roles.find(`name`, "Juke | Susturma");

    if (!muterole) {
        try {
           muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  
message.channel.send(`**${user.user.username}**, ${message.author} tarafından susturulması kaldırıldı!`)

     await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Eylem: Unmute')
            .addField('Kullanıcı', `<@${user.id}>`)
            .addField('Moderatör', `${mod}`)
            .setColor('RANDOM')
        return message.guild.channels.get(modlog).send(muteembed)
}

exports.conf = {
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "unmute",
    description: "Etiketlenen Kişinin Mutesini Geri Alır",
    usage:  "unmute [kullanıcı] [sebep]",
}