const Discord = require('discord.js')//Modülümüzü tanımladık
exports.run = async(client, message) => {//Komutu çalıştıracak olan yer
let user = message.mentions.users.first()//Kullanıcı belirttik eğer kullanıcı etiketlersek onun avatarını eğer etiketlemez isek bizim avatarımızı göterece
if(user) {//eğer kullanıcı etiketlersek bunu gnderecek
const embed = new Discord.MessageEmbed()//Artık richembed yerine MessageEmbed() oldu bilginize
.setTitle(`Kullanıcının Avatarı`)//başlık
.setImage(user.avatarURL({dynamic:true}))//resimi gönderecek
.setColor(`BLACK`)//embed rengini ayarladık
message.channel.send(embed)//kanala mesajı gönderiyoruz
} else {//eğer etiketlemez isek bunu
const embed = new Discord.MessageEmbed()//Artık richembed yerine MessageEmbed() oldu bilginize
.setTitle(`<a:krmz:733809296545939506>Kullanıcının Avatarı`)//başlık
.setImage(message.author.avatarURL({dynamic:true}))//resimi gönderecek
.setColor(`BLACK`)//embed rengini ayarladık
message.channel.send(embed)//kanala mesajı gönderiyoruz
}
};
exports.conf = { // taamdır
enabled: true,//kapalı?
guildOnly: false, //sunucu özel?
aliases: ['pp',], //diğer adlar
permLevel: 0 //yetki
};
exports.help = {
name: 'avatar',//help komutu
description: '',//açıklaması
usage: ''//kullanımı
};
