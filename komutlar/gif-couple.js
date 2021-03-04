const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/694694675679936585/737306643355664384/image02.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737306628528930816/a_1b0b9e83a11f0e8280c5409e85dc6ecf.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737306606068564108/image0_7.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737306593485651979/image01.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737306585470074890/20.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737305042096488478/image03.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737305094038749224/a_788eee9ad77c81e7406d1c06c75de1a1.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737305150607327255/larissa56.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737305158668517486/image0.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737305302352789554/image0-4.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737306359330111548/gif_dc_dc_dc.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/736981583474589777/a_48d8e6c6b3ab9bdc3d27e9dc7bfbee53.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737305354270015628/a_b77c51a4aa5bc3460d375f415dec1507.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737304729444679730/a_73dea0b44c5e1f57bdbbfc036b7cf3dc.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737304802501066862/image0-2.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737109543263404132/image0.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737066393694109718/a_d8f145cc1f4ad05bf97a118f64d673ff.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737066415877652490/image0_8.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/737013297336942603/a_37397898637eca6eae7458899b12826c.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/736898861913604156/image0-10.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/736898644808040538/a_e4931ce8b4c41a2f4bb15c51dfd0b898.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/736898505427386378/f6bd4fa420a9d8ce58c6519a90bc8bc0.gif",
    "https://cdn.discordapp.com/attachments/694694675679936585/736898257925570600/a_1e816625dd242018b144b924043a7933.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775429814307127306/a_39ad5ec661e615be2ccf347096ca6f7d.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775430935721279518/EgeYAVUZ_436.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775430937004474438/EgeYAVUZ_7.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775430940381937725/EgeYAVUZ_504.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775430946131935232/EgeYAVUZ_440.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431311660810250/a_2da2f3f0bbfb3726f751d1e31e313839.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775430951957168178/EgeYAVUZ_669.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431315880804362/image0-9.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431317386166322/a_a2883485a9a592b5c2262c0df6a44f7d.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431318392668160/a_2c8c5635377c5f582880c57f203eb558.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431324143583262/a_70c892d0f545ba21c1963bec69a6372c.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431328362790952/a_1ceeede595be3ccf10ef16b3c8e759e1.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775449258881974332/image0.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775449259196809256/image1.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775449259632885810/image2.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431750154977300/image1.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775431748636901406/image0.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775430948543135744/EgeYAVUZ_615.gif",
    "https://media.discordapp.net/attachments/775330761540370432/775430949466931270/EgeYAVUZ_585.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964993878065152/luisa7-3.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964993878065152/luisa7-3.gif?format=png",
    "https://media.discordapp.net/attachments/768119002639106089/768965030677839872/a_5bb63b0131898cf4e58eb1259f495691.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964811794415636/a_47854b2be502025cae273e1eea8c2e3a.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964838483034132/Soul2-1.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964899295592468/564e4w.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964917461516378/image0-109.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964980367425576/234567.gif",
    "https://media.discordapp.net/attachments/768119002639106089/768964963825614848/luisa68.gif",
  "https://cdn.discordapp.com/attachments/608711480346542102/781835462133415946/4gJD.gif",
"https://cdn.discordapp.com/attachments/608711480346542102/781828337072865310/67D393FF-F384-4351-84EF-ADA9CB41D650.gif",
"https://cdn.discordapp.com/attachments/608711480346542102/781822070127460372/Eda42.gif",
"https://cdn.discordapp.com/attachments/608711480346542102/781803796833501205/a_6674055c1a79612c2d5823cba5ee135e.gif",
"https://media.discordapp.net/attachments/726203257189433385/783719877474648074/image0_7-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786522617544441856/nsaaaa.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524367298232350/a_d3b241bc0d501746b1142a16dd337463.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524371439190016/a_7c9f086beb220477372797f971633b85.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524370767314965/a_8b3183ebad9fbf6e398ba2d94d0919c5.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524401176674324/a_1bfc64ec6dc727952cc6d709c0887d1b.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524402711527435/a_3d5e8b8d08b7fc306861502039d6d95f.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524431899295754/xati_18.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524445635379220/a_38cd1543c9fdc96f6a2783ee04ba6d07.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524445615325194/ppp.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524454297534494/sev13.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524455232995348/image0.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524455294861322/sew_16.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524462626766869/31.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524464661528586/a_6dad96af6cffba97f003517739d87249.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524482281406484/a_f72e5f9c7cb3f78c0d85dd1cc7e35d30.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524482776596490/Jx93bKx0C5.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524483904471070/a_e07aa100532f429e95043d807565e1b9.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524483145170944/cp2.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524503277961246/87281199_161080602017183_580967495330804181_n_1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524510684839946/couple-2.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524516762910730/a_5aa199db963f2441a3e2e27c3c24b11a.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524516708646972/a_d4a582680ba95887dfb240a48a63e443.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524532256800778/a_9a4f7b19e4f61d88e48b63f9e5bb3c6b.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524535406854144/a_0a00902a15f9500b5e411840e6b6968a.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524546126839848/image2.gif?format=png",
"https://media.discordapp.net/attachments/608711480346542102/786524547260219442/UwU_11.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524548077846528/couple3.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524552737849344/image4.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524555849629696/20200606_231600.gif",
"https://media.discordapp.net/attachments/608711480346542102/786524554369564672/a_5b947b9ca2ac9a58fc6f4d5096838230-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539620866326568/couplegif42-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539629972946994/a_e51fdaaae285cacfeadbb2d5958c8c3d-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539647236833300/20200823_012822-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539653275975700/11111-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539670154510336/a_a16876ff0e4e414a2e6f95deff647531-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539682783297546/hr_2-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539698201952276/a_a8596528d26f7620b7508bb0b6246bc6-1.gif",
"https://media.discordapp.net/attachments/608711480346542102/786539723749326858/54-2.gif",
"https://media.discordapp.net/attachments/608711480346542102/786541023014551562/image0_3_1.gif",
"https://media.discordapp.net/attachments/726203257189433385/783719773250912276/dukeniacouple.gif",
"https://cdn.discordapp.com/attachments/694694675679936585/736897942342074428/a_8634244b88f7dc8eebbf416640489ef2.gif"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let rolls = new Discord.MessageEmbed()

    .setTitle("Couple Gif ;")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(rolls);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["gif-couple", "couple-gif", "gifcouple", "couplegif"],

  permLevel: 0
};

exports.help = {
  name: "couple",

  description: "rolls",

  usage: "couple"
};
