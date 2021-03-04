const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/733640065200160768/737280791993779206/tenor_3.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280895995740210/tenor_7.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280900022140938/tenor_2.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280920800722984/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280921689915411/tenor_10.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280924563275776/tenor.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280929311096842/tenor_5.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280944016457748/tenor_1.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737280945195057193/tenor_6.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif",
    "https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif",
    "https://media.discordapp.net/attachments/775330765567164416/775449525095366686/EgeYAVUZ_620.gif",
    "https://media.discordapp.net/attachments/775330765567164416/775449513149595668/EgeYAVUZ_190.gif",
    "https://media.discordapp.net/attachments/775330765567164416/775449511555235880/EgeYAVUZ_81.gif",
    "https://media.discordapp.net/attachments/775330765567164416/775449527687577660/EgeYAVUZ_552.gif",
    "https://media.discordapp.net/attachments/775330765567164416/775449527447846912/EgeYAVUZ_542.gif",
    "https://media.discordapp.net/attachments/768119006988861480/768932924170174524/dasvan.gif",
    "https://media.discordapp.net/attachments/768119006988861480/768932969057484851/234234.gif?format=png",
    "https://media.discordapp.net/attachments/768119006988861480/768933002158931998/a_b80e817bdf4a21268caab89f88313246.gif",
    "https://media.discordapp.net/attachments/768119006988861480/768932899809918976/image0-26.gif",
    "https://media.discordapp.net/attachments/768119006988861480/768932876568887326/yFQ0ywscgobJK.gif",
    "https://media.discordapp.net/attachments/768119006988861480/768932842951933972/original_40.gif",
    "https://media.discordapp.net/attachments/768119006988861480/768932762530349086/db3e89d395b8e43613ecbbb1369a714a.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768707443785990204/a_9b1a6f79cafa46aca7c08954e931e6c4.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768149632425132052/31-1.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let rolls = new Discord.MessageEmbed()

    .setTitle("Animal Gif ;")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(rolls);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["gif-animal", "animal-gif", "gifanimal", "animalgif"],

  permLevel: 0
};

exports.help = {
  name: "animal",

  description: "rolls",

  usage: "animal"
};
