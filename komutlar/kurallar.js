const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

//oguzhan agabeyim rica etsem sende bana bir kod ismarlasan , aradigim kod ayarlamali v12 rol koruma maini

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .addField(
          "Hata",
          `•\`a!kurallar\`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmaniz gerekir**.`
        ));
  let guild = message.guild;
  const kurallar = new Discord.MessageEmbed()
  .setColor("AQUA")
  .setDescription(`
> **<:book:769800162422816778> |  ${guild.name} Sunucusu Içi Kurallari**
> 
> **<a:krmz:733809296545939506> | Herhangi Bir Yol Ile** (\`DM\`,\`Chat Vs.\`) **Baska Sunucunun Reklamini Yapmak**,
> 
> **<a:krmz:733809296545939506> | Sesli Ve Yazi Kanallarinda** \`Küfür Etmek\` veya \`Argo Kelimeler\` **Kullanmak**, 
> 
> **<a:krmz:733809296545939506> | Yazi Kanallarinda** \`Flood\` , \`Spam\` , \`Capslock\` **Kullanmak**,
> 
> **<a:krmz:733809296545939506> | Sunucumuzda** \`Tartisma\` ve \`Kiskirtma\` **Yapmak**,
> 
> **<a:krmz:733809296545939506> | Bot Komutlarini __sohbet__ Odasinda Kullanmak**,
> 
> **<a:krmz:733809296545939506> | Yasadiginiz Olaylari Sunucumuza Yansitmak**,
> 
> **<a:krmz:733809296545939506> | Ses ve Yazi Kanallarinda Üyeleri** \`Kandirmak\`,\`Trollemek\`, \`Spamlamak\`.
> 
> 
> **<a:krmz:733809296545939506> | Kesinlikle Yasakdir**.
> 
> **<a:krmz:733809296545939506> | Bu Kurallardan Herhangi Birini Ihlal Etmeniz Durumunda Gereken Islemler Gerçeklestirilecektir**.
> 
> **<a:krmz:733809296545939506> | Sunucuya Katilan Herkes Bu Kurallari Okumus Sayilir**! 
> **<a:krmz:733809296545939506>** | **${guild.name}** \`Yöneticileri\` **Bu Kurallari Istedigi Zaman Degistirme Hakkina Sahiptir**!
> 
> <a:krmz:733809296545939506> | @everyone & @here`)
    message.channel.send(kurallar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hazir-kurallar","rules"],
  permLevel: 0
};

exports.help = {
  name: "kurallar",
  description: "",
  usage: ""
};