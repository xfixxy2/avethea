const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775429750960160839/stiker.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430121393881138/EgeYAVUZ_1.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430129584832542/EgeYAVUZ_443.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430133376614440/EgeYAVUZ_441.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430142172463145/EgeYAVUZ_510.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430139332263986/EgeYAVUZ_437.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430154301210624/EgeYAVUZ_509.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430158529855568/EgeYAVUZ_521.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430173192486952/EgeYAVUZ_534.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430176250265650/EgeYAVUZ_541.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430211067707412/EgeYAVUZ_572.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430221625032704/EgeYAVUZ_574.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430222480015380/EgeYAVUZ_564.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430226791759892/EgeYAVUZ_581.gif?format=png",
    "https://media.discordapp.net/attachments/775330759048822814/775430229300346900/EgeYAVUZ_600.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430232567971860/EgeYAVUZ_601.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430242164408390/EgeYAVUZ_610.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430250284187698/EgeYAVUZ_622.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430253585104906/EgeYAVUZ_623.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430263571611669/EgeYAVUZ_626.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430268805971988/EgeYAVUZ_635.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430314000252949/EgeYAVUZ_662.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430354478563328/EgeYAVUZ_697.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430392789729350/a_45c3d225be9f99a757c7f14dbbdf1ee0.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430485160493056/a_56db79619bad7da95e8d8b79c742e61f.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775430514936512522/a_579a3130fbc587b5ebc2c6fbd6bbb1dc.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775448791255875615/image2.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775431723595989002/a_0c95f7c6d04aca30135248e5a73a449e.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775431727413198848/a_bd460ef1f4a11088c76085493a691c2b.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775431728135143504/a_c5f29f45b7801419b470062e3e06cd60.gif",
    "https://media.discordapp.net/attachments/775330759048822814/775431724875251794/a_9ef2c58dd315836f63f4750a65009c5f.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768822132934836254/a_3a64ebcb479d63345fc986c53c85a010.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768822110062903346/a_37acc8951cbad282d310a30609420b57.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768822081621065728/a_9eb75950e1a5254f474189c030bc89c7.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768822080506298388/chiesaprivate46.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768822060134694942/image0_4.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768821820048146482/a_65a9cde1defad45af774fda8cafdfd11.gif?format=png",
    "https://media.discordapp.net/attachments/768119000340496414/768821819733311508/a_7888748ee4922cf9752938fc8afbb842.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768744593448501278/3434.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768744560838311977/maske.gif",
    "https://media.discordapp.net/attachments/768119000340496414/768742937696665600/a_201d40725ab3c09fc3e83ba025c22ab3.gif",
    "https://media.discordapp.net/attachments/758814544519888976/776398846695047168/a_58b8a8e4718f6d1ffb9992f9b04c76a4.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786322623571296316/a_459754845c2254ee3eb454410cb16177.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786297634200485898/boy_gif_4.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786288710559465522/image0.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786280932915019846/a_d649a46aac560b8f4b5920c507f1cd49.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786277565546758174/image0-18.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786277562102972467/luisa.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786277546387701820/image0-259.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786277531384414289/image0-13-1.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786277511797276801/Erkek_Gif_45.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/786277507178823721/image0.gif",
"https://media.discordapp.net/attachments/780505736022327358/786309875436879903/a_8dbb3a7ceac329d99288b7ab3e9d9284.gif",
"https://media.discordapp.net/attachments/780505736022327358/786309648797532170/a_9d655381f9ac102af3bdd7cbc83c4a89.gif",
"https://media.discordapp.net/attachments/780505736022327358/786309437350215680/man_104.gif",
"https://media.discordapp.net/attachments/780505736022327358/786309222006652978/1344.gif",
"https://media.discordapp.net/attachments/780505736022327358/786309018170818560/a_7e9dca2b21f9fa706cea87299734f42e.gif?format=png",
"https://cdn.discordapp.com/attachments/785140532690550824/785238900909277254/tenor.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/783728931119169556/a_2cd01f83fc2433a243f61da223e56cf0.gif",
"https://media.discordapp.net/attachments/608711476219478045/782610922018439169/a_4b5d73c486ce0b3165ab4c7a029ac016.gif",
"https://media.discordapp.net/attachments/608711476219478045/782604400233283594/amcalarwego.gif",
"https://media.discordapp.net/attachments/608711476219478045/782603684142907402/image0_3.gif",
"https://images-ext-1.discordapp.net/external/aoIGNWwxVs-fW6YXUftevvZUVj81op4fsBUiSJ3g9os/https/media.discordapp.net/attachments/608711476219478045/782603026463719424/75.gif",
"https://media.discordapp.net/attachments/608711476219478045/782599878596624384/legion_gif_190.gif",
"https://media.discordapp.net/attachments/608711476219478045/782599876939612160/legion_gif_63.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223824409591828/a_5e91213a3b54dce07ba189a54b5b55a5_1.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223964516778034/a_5732ed42aee7d2f7fff02f8df51fcc3d.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223805803134996/a_37a7b9b8289e5d218abf87b95e77060d.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223786006413322/92.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223666766151700/a_ca696684660bebe2617ce110c73d9d2b-1.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223363988652054/137.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223189723054100/image2_4.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223131581612032/1494633075_ragnar.gif",
"https://media.discordapp.net/attachments/608711476219478045/782223001423970314/giphy_2.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/761127702047752212/a_50d1d6195a8dcdaaa896be4a87bd904e.gif",
"https://cdn.discordapp.com/attachments/631918688773079078/761191603573489664/a_af462899fcb6e98defab9b97c6b0f02b.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/760975934588584026/Arda821.gif",
"https://cdn.discordapp.com/attachments/608711476219478045/761221913263341638/54.gif",
"https://media.discordapp.net/attachments/631918688773079078/781176493581402132/Bugrahan_Hasar_16.gif",
"https://tenor.com/view/smoking-smoke-alone-thinking-aftermath-gif-13449429",
"https://media.discordapp.net/attachments/608711476219478045/786480208626057216/Eda20.gif",
"https://media.discordapp.net/attachments/608711476219478045/786480289160495156/image0.gif",
"https://media.discordapp.net/attachments/608711476219478045/786480295141834752/Sacyla_oynyan_ve_mik.gif",
"https://media.discordapp.net/attachments/608711476219478045/786480323160178698/sar_arka_plan.gif",
"https://media.discordapp.net/attachments/608711476219478045/786480325068193802/a_c2af80c924df3226b65f35cadc4f7950.gif",
"https://media.discordapp.net/attachments/608711476219478045/786480327853604914/sar_sacl_pp_11.gif",
"https://media.discordapp.net/attachments/608711476219478045/786480354029993994/Sigara_Duman.gif",
"https://media.discordapp.net/attachments/608711476219478045/786489082536263710/neon.gif",
"https://media.discordapp.net/attachments/608711476219478045/786507658009116672/a_f00297c1225dfd22052acc19499126be.gif",
"https://media.discordapp.net/attachments/608711476219478045/786522310902415360/tenor.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527588146872350/a_d61314f1f3d43bad8c4a2f11323313de.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527589720260608/luzekmglerlg.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527595889819659/a_8d9edba5510a4986b810de1d45bc1bec.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527598427373578/a_d019e3b86063d46f72356577049f406a.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527598594359306/a_3aa02a7e8bb403d222b98692164c1a6f.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527603069943848/a_daf3ca64f0a4e9febd8b388c813183e0.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527609651068968/27.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527640190058527/a_19e2e3616893a7772efa835b8af26efd.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527650918826014/a_9383960f1f45c71e5dcc248267452cfa.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527655926693928/a_6f86bb5d717f34d4ef46f7f5f875c362.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527662088257606/a_dc3b7059e64ffcd4fc49ce72089680cb.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527663979626536/a_713d2cc128b6a1ab0ded44e5f1f1ca34.gif",
"https://media.discordapp.net/attachments/608711476219478045/786527668660207616/deliren.gif",
"https://media.discordapp.net/attachments/608711476219478045/786549800626552852/a_f0b4f0adb8937879feb5c3bb5df5da60.gif",
"https://media.discordapp.net/attachments/608711476219478045/786549871636119582/lolii_3.gif",
"https://media.discordapp.net/attachments/608711476219478045/786549988648812584/7gif_5.gif",
"https://media.discordapp.net/attachments/608711476219478045/786550063869722684/a_7a770a5218c4f8e60dd729757326b5ce.gif",
"https://media.discordapp.net/attachments/608711476219478045/786550247647346688/a_86848cf73f0d44d2fe0973b926b975c6.gif",
"https://media.discordapp.net/attachments/608711476219478045/786550412203261952/a_c13c4f5eeaba921825bbedecbbe5f7b6.gif",
"https://media.discordapp.net/attachments/608711476219478045/786550509837484042/a_e8db62144a4f3ed7fd65284e7d34747b.gif",
"https://media.discordapp.net/attachments/608711476219478045/786552682302144552/deezy8.gif",
"https://media.discordapp.net/attachments/608711476219478045/786552784064610354/deezy19.gif",
"https://media.discordapp.net/attachments/608711476219478045/786552964721410048/deezy35.gif",
"https://media.discordapp.net/attachments/608711476219478045/786552972841713664/deezy26.gif",
"https://media.discordapp.net/attachments/608711476219478045/786552988164554762/deezy23.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553043298418698/deezy5.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553105805213726/deezy2.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553116849864714/deezy9.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553158418563082/deezy21.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553410711322630/deezy46.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553605351407616/deezy1.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553613975027752/deezy13.gif",
"https://media.discordapp.net/attachments/608711476219478045/786553638826541056/deezy22.gif",
"https://media.discordapp.net/attachments/608711476219478045/786554714258014208/a_a3fd006bbe676d7a94aa9b0d0cb4c04d.gif",
"https://media.discordapp.net/attachments/775330759048822814/775448790944710687/image1.gif"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let rolls = new Discord.MessageEmbed()

    .setTitle("Man Gif ;")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(rolls);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["gif-man", "man-gif", "gifman", "mangif"],

  permLevel: 0
};

exports.help = {
  name: "man",

  description: "rolls",

  usage: "man"
};