const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/737296516774887505/bc500ed43e3593fcb9b10331ae644586.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737286213723226182/a_4a728888f25331995f9c61df26ffffdb.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737052176106520687/image1.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/737078026923409439/9190dc1cb39fa98fd9e12bb135aac545.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/737004415197904916/a_3bfd1dff4faab26f7a612a34cb2eb049.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948576739426385/1.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736928294414450718/ROF8OQvDmxytW.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948476520857650/5.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736588684270239774/ezgif-6-e83305d159d6.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948178855034955/anime_24.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736388428761137193/14Nqi9PD8H.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736388213421244477/Yblikw9Rj1.gif",
    "https://cdn.discordapp.com/attachments/694694884459937862/735947565966688306/a_d6e522c9e10db64260eccb3c3455733c.gif",
    "https://cdn.discordapp.com/attachments/697505578972348436/736388155229339708/zyJgqrsAUg.gif",
    "https://cdn.discordapp.com/attachments/775330769001775114/775432740933730355/200w.gif",
    "https://cdn.discordapp.com/attachments/775330769001775114/775432742275514378/2001w.gif",
    "https://cdn.discordapp.com/attachments/775330769001775114/775432744330854481/200122w.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433829435047966/EgeYAVUZ_165.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433832186249226/EgeYAVUZ_170.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433836560908318/EgeYAVUZ_175.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433846203744286/EgeYAVUZ_218.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433850356367370/EgeYAVUZ_221.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433860523098152/EgeYAVUZ_225.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433862502678619/EgeYAVUZ_224.gif?width=427&height=427",
    "https://media.discordapp.net/attachments/775330769001775114/775433866567090186/EgeYAVUZ_230.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433865245753344/EgeYAVUZ_239.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433872665870356/EgeYAVUZ_243.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433885524951060/EgeYAVUZ_323.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433898599120946/EgeYAVUZ_326.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433900406997063/EgeYAVUZ_327.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433902953070612/EgeYAVUZ_330.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433910061498418/EgeYAVUZ_331.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433912675205150/EgeYAVUZ_324.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433918236327966/EgeYAVUZ_242.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433918450106368/EgeYAVUZ_332.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433921601077248/EgeYAVUZ_333.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433932853477376/EgeYAVUZ_335.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433942467739648/EgeYAVUZ_341.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433952587677747/EgeYAVUZ_368.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775433953733640222/EgeYAVUZ_338.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775439641410273351/a_5f8a8e7cc387a3529de1616413a03be5.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775439646208426014/a_69d486d5af3b40209ed314febaa3b41f.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775439841546469406/image2.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775439851079073813/Miractan_Hatra-1.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775450415406776360/image0.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775450415801827328/image1.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775450416149299250/image2.gif",
    "https://media.discordapp.net/attachments/775330769001775114/775712401156079626/a_1c02c1ada2b6695f767c494322f23191.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768821426484412426/a_5a5863db2752fa3c7dbd30000f67c061.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768821430636380190/image0.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768821447844954172/image0_1.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768821482150297630/giyu.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768848007089094706/a_5ba9627f24c695381f06380b70f053fa.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768821320258945064/wHyrZ__15.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768821291369103410/wHyrZ__76.gif",
    "https://media.discordapp.net/attachments/768119009233076254/768742863000567848/a_6f823eab4aff20272e94d8fad99567b5.gif",
   "https://media.discordapp.net/attachments/608711485849337856/779656968851030036/a_8d66ffd1f58747b1996269c078c3f243.gif",
"https://media.discordapp.net/attachments/608711485849337856/779495362447540274/a_5f9c8bd50fdaea66424066d23253357a.gif",
"https://media.discordapp.net/attachments/631918698285891634/781607454692868156/TRUE_LOVE_KATSUKI_BAKUGOU.gif",
"https://media.discordapp.net/attachments/631918698285891634/781607519583207504/Love__Harmony__Photo.gif",
"https://media.discordapp.net/attachments/631918698285891634/781774728037793822/da9a4871139cc41087b2575ddde77fd8.gif",
"https://media.discordapp.net/attachments/631918698285891634/781607587040591912/Hidden_Idol__Haikyuu_x_Reader_.gif",
"https://media.discordapp.net/attachments/631918698285891634/781607495604895764/The_33_Most_Beautiful_Anime_Girls_Who_Will_Catch_Your_Eye.gif",
"https://media.discordapp.net/attachments/631918698285891634/782204850363826176/a_028230698bff68de2a96c9f6f7bb2b92.gif",
"https://media.discordapp.net/attachments/631918698285891634/781969989631737886/original_2.gif",
"https://media.discordapp.net/attachments/631918698285891634/782220137318711306/a_be5ca3d615c9613f4a9b30d73e95dc70.gif",
"https://media.discordapp.net/attachments/631918698285891634/782220066841821205/11.gif",
"https://media.discordapp.net/attachments/631918698285891634/781969942525509682/tumblr_pcft736XWH1qb88xvo3_540.gif",
"https://media.discordapp.net/attachments/631918698285891634/781969867090952202/indir.gif",
"https://media.discordapp.net/attachments/608711485849337856/768796294185353216/tenor_31.gif",
"https://media.discordapp.net/attachments/767888317110419487/768240667377532968/a_f5295ae0e4256b6d19d0c26342f1433e.gif",
"https://media.discordapp.net/attachments/608711485849337856/769013955577774090/image0.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297620575223808/a_5f8a8e7cc387a3529de1616413a03be5.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297626102399006/a_69d486d5af3b40209ed314febaa3b41f.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297666187100180/a_522b5acbe55c1d050c8a4cdec37fa36d.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297682000150538/a_82929fe785a9778fbe9f0901eba8493b.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297714723717120/a_d6e522c9e10db64260eccb3c3455733c.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297768293629982/a_d632664abab94ac0acd4608d5b01726b.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297859113156608/image2.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297862816464927/Miractan_Hatra-1.gif",
"https://media.discordapp.net/attachments/780529491037388800/784297889555415111/sikimsiz.gif",
"https://media.discordapp.net/attachments/780529491037388800/784626316716670976/image0.gif",
"https://media.discordapp.net/attachments/780529491037388800/784906583704469504/s-b36bc48b383adcd24f16f92ff558d1219a14cc0b.gif?width=727&height=408",
"https://media.discordapp.net/attachments/780529491037388800/785145108164640798/image0.jpg",
"https://images-ext-1.discordapp.net/external/ZYWW1qOMbO-aK3XDVheYz5raG1VNq1CvkTq6en_C1tM/%3Fitemid%3D8453559/https/media1.tenor.com/images/2d2cac291c4e4391d64e611972c6b9fd/tenor.gif",
"https://images-ext-2.discordapp.net/external/qnDyEFKTkAvkdnRM7osAkslzXw6a7UWAWRfyE7_ybpw/%3Fitemid%3D5530585/https/media1.tenor.com/images/3ae29581574c3ead026ee0e5ad50a7da/tenor.gif",
"https://media.discordapp.net/attachments/780529491037388800/785290232831541288/image0.gif",
"https://media.discordapp.net/attachments/608711485849337856/786503361607368734/a_1cfcbc388e687a550c2c8d3d10f65e0a.gif",
"https://media.discordapp.net/attachments/608711485849337856/786503361838972958/38678df3f74c05fb720601477ed24bf8.gif",
"https://media.discordapp.net/attachments/608711485849337856/786505991918977044/anime_gif_2.gif",
"https://media.discordapp.net/attachments/608711485849337856/786505996709134346/anime_gif_1.gif",
"https://media.discordapp.net/attachments/608711485849337856/786505998033616937/anime_gif_3.gif",
"https://media.discordapp.net/attachments/608711485849337856/786506004362821632/anime5.gif",
"https://media.discordapp.net/attachments/608711485849337856/786506005214396426/anime_gif_5.gif?width=408&height=408",
"https://media.discordapp.net/attachments/608711485849337856/786514545283170324/image0.gif",
"https://media.discordapp.net/attachments/608711485849337856/786524065807990804/pp155.gif",
"https://media.discordapp.net/attachments/608711485849337856/786524066081275934/vipgif.gif",
"https://media.discordapp.net/attachments/608711485849337856/786524066437660692/image2-2.gif",
"https://media.discordapp.net/attachments/608711485849337856/786524067456221205/original_3.gif",
"https://media.discordapp.net/attachments/608711485849337856/786541945740066847/uurbne-1.gif",
"https://media.discordapp.net/attachments/608711485849337856/786541969857314856/c6bf841e3c00072e01d6872e3e0dd142-1.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543209919545394/Anime578.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543231789301760/Melis3a682.gif?width=408&height=408",
"https://media.discordapp.net/attachments/608711485849337856/786543279024898048/Melis78690.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543280392896562/Melis98650.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543287841718292/Melis769805.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543338265772069/Melis97854843.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543341747175444/Melis76349809.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543359543607306/Melis847584.gif",
"https://media.discordapp.net/attachments/608711485849337856/786543399733166090/Melis9065.gif",
"https://media.discordapp.net/attachments/608711485849337856/786573783036329994/a_30752272412aca5763b518079e68a8a1.gif",
"https://media.discordapp.net/attachments/608711485849337856/786573818738376734/a_45f0a9b458cbdb962038ff333f834612.gif",
"https://media.discordapp.net/attachments/608711485849337856/786573768184692746/a_0dca045b6fda04a9c476958745e2afc1.gif",
"https://media.discordapp.net/attachments/608711485849337856/786573865534095360/a_a8462e56fcdd948f8745299b80273ad5_-_Kopya.gif",
"https://media.discordapp.net/attachments/608711485849337856/786574311372226571/abbc738a63ac3a75aa7df0d1f325088f.gif",
"https://media.discordapp.net/attachments/608711485849337856/786574411267833916/a_9b1a6f79cafa46aca7c08954e931e6c4.gif",
"https://media.discordapp.net/attachments/608711485849337856/786574312513339423/a_f4acd2644031316d9e0ae1875ef5312f.gif",
"https://media.discordapp.net/attachments/608711485849337856/786574313829826560/efsaneh.gif?format=png",
"https://media.discordapp.net/attachments/608711485849337856/786574453647736832/a_25864ba225a5e82facec3b9ee7b728c0.gif",
"https://media.discordapp.net/attachments/608711485849337856/786574478825619456/a_47a804974a74b994d66bbc0389a12bae.gif",
"https://media.discordapp.net/attachments/608711485849337856/786574569170272256/a_e6bf99d13d3c81f36115992aa7b971db.gif",
"https://media.discordapp.net/attachments/608711485849337856/786583677316497428/a_2b58061e423d0ed65d2e1a3e77ed61f8.gif",
"https://media.discordapp.net/attachments/608711485849337856/786583677017653288/a_80133297a8a819f10e44ad8e95a5ff81.gif",
"https://media.discordapp.net/attachments/608711485849337856/786583676682502154/a_9fbf9c266bc5ea73da8f634d89624f98.gif",
"https://media.discordapp.net/attachments/608711485849337856/786583676367405056/a_522b5acbe55c1d050c8a4cdec37fa36d.gif",
"https://media.discordapp.net/attachments/608711485849337856/786583675902754816/a_b7011decdd1c826e543925c2e6390ee8.gif",
"https://media.discordapp.net/attachments/608711485849337856/786583675621081178/a_4773a01940005ed3b45a0ed6ff6c9540.gif?format=png",
"https://media.discordapp.net/attachments/608711485849337856/786595053032308786/legion_gif_11.gif",
"https://cdn.discordapp.com/attachments/694694884459937862/735621470969135217/sasuke_al_moj.gif",
 "https://media.discordapp.net/attachments/608711485849337856/791647521092665344/Cimeriesgif3.gif",
"https://media.discordapp.net/attachments/608711485849337856/791647567838183444/Cimeriesgif4.gif",
"https://media.discordapp.net/attachments/608711485849337856/791647687124582440/Cimeriesgif6.gif",
"https://media.discordapp.net/attachments/608711485849337856/791647742211784724/Cimeriesgif8.gif",
"https://media.discordapp.net/attachments/608711485849337856/791647788348735498/Cimeriesgif9.gif",
"https://media.discordapp.net/attachments/608711485849337856/791647843672129566/Cimeriesgif10.gif",
"https://media.discordapp.net/attachments/608711485849337856/791647890019188766/Cimeriesgif11.gif",
"https://media.discordapp.net/attachments/608711485849337856/791647934004330526/Cimeriesgif12.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648007501905950/Cimeriesgif13.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648019690815518/Cimeriesgif14.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648062212145172/Cimeriesgif15.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648146463391764/Cimeriesgif17.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648190955913246/Cimeriesgif18.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648243750273064/Cimeriesgif19.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648276386414592/Cimeriesgif20.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648328450048060/Cimeriesgif21.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648373030518784/Cimeriesgif22.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648478165073920/Cimeriesgif24.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648497027645440/Cimeriesgif25.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648550076547102/Cimeriesgif26.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648579767762984/Cimeriesgif27.gif",
"https://media.discordapp.net/attachments/608711485849337856/791648675972907069/Cimeriesgif28.gif"
 ];

  let result = Math.floor(Math.random() * replies.length);

  let rolls = new Discord.MessageEmbed()

    .setTitle("Anime Gif ;")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(rolls);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["gif-anime", "anime-gif", "gifanime", "animegif"],

  permLevel: 0
};

exports.help = {
  name: "anime",

  description: "rolls",

  usage: "anime"
};
