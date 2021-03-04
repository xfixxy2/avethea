const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://i.imgyukle.com/2020/12/24/aQlG6e.png",
"https://media.discordapp.net/attachments/608711487325995008/791641099823349760/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791641121175502848/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791642629913575444/image3.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791642630168903680/image4.jpg?width=606&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791642729972760616/image0.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791642730199121940/image1.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791642730420895745/image2.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791642898285592576/image0.jpg?width=431&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791642927378071572/image0.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791642951759167488/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791642976232275968/image0.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643006804951050/image0.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643034013138994/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643088513662996/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643127001645056/image0.jpg?width=457&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643208131936276/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643234241216522/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643256865423360/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643281775263755/image0.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643305489989642/image0.jpg?width=429&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643330626453504/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643418153189376/image0.jpg?width=431&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643418383613952/image1.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643466144284672/image1.jpg?width=427&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643717496078356/image1.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643717849055242/image2.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643718204784650/image3.jpg?width=429&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791643718566019082/image4.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791643798077177856/image0.jpg?width=427&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791646730433069066/image0.png",
"https://media.discordapp.net/attachments/608711487325995008/791646791832829972/image0.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791646818441887764/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791646849173028864/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791656624602873886/ackermnx_20201223_104.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656710720192512/ackermnx_20201223_94.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656711031226368/ackermnx_20201223_97.png?width=429&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656711492075540/ackermnx_20201223_98.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656711688814602/ackermnx_20201223_99.png?width=429&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656712196194334/ackermnx_20201223_100.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656712495038464/ackermnx_20201223_102.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656712833597440/ackermnx_20201223_101.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656713019064350/ackermnx_20201223_103.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656828698230784/ackermnx_20201223_79.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656828932194314/ackermnx_20201223_80.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656829289496576/ackermnx_20201223_81.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656829578248212/ackermnx_20201223_82.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656829943021608/ackermnx_20201223_83.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656830144217088/ackermnx_20201223_85.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791656830949654548/ackermnx_20201223_86.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791658936125095986/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791658967742808114/image0.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791658996019888148/image0.jpg?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791659055747039232/image0.jpg?width=761&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791556621644857404/KawaiiGirl.png?width=428&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791413733124866048/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791413129074442310/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791413139857735731/image0.png?width=761&height=428",
"https://media.discordapp.net/attachments/608711487325995008/791413118281711616/image0.jpg",
"https://media.discordapp.net/attachments/608711487325995008/791413099139694632/image0.jpg?width=351&height=428"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let rolls = new Discord.MessageEmbed()

    .setTitle("Anime woman pp ;")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(rolls);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["animew-pp", "anime woman", "animew", "anime pp"],

  permLevel: 0
};

exports.help = {
  name: "animew-pp",

  description: "rolls",

  usage: "animew-pp"
};
