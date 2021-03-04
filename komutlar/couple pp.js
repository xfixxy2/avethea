const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://media.discordapp.net/attachments/608711481969868811/788070994539315220/96df7633f95ebbde4aa7226cd821d724.jpg?width=227&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788071005897752626/dfa80a3315d31a46b2a536defcd36b78.jpg?width=407&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788071018928799776/ff5f41f205fad2a4d1a11e466ce886c8.jpg?width=231&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788071033521176606/e757cdfaff2a79587afa8e7c75693f5d.jpg?width=325&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788082843573288970/Screenshot_20201206_194751.png?width=414&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788082927463694417/4ebe0111b6eda7df39bf959a499628b9.png?width=323&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083114420338718/46c637ed5d8b4ab453e905431fd90391.png?width=404&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083209266004008/898d2fe7656fe71553d9864afa48d153.png?width=404&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083324471476224/93ab436dde10518c1ede5257c0bc9bec.png?width=413&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083432315289610/a0d4e52d465fb9584166fc00b520ef3b.png?width=331&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083476330840074/bcedde8ce3ee5d9457a4716e8b046cbc.png?width=379&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083572715683840/84a10941-caf4-4830-99a6-d45b923ebd50.png?width=360&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083642726875166/36dd79aa58545069a91267f84942ddf0.png?width=331&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083757504135188/d40b7f4560002cc2912bf98fe3867ca1.png?width=378&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083839322816512/dc534b6434f2b3dc5ab761e553b8effe.png?width=411&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083881625649253/1705885aabddd84e43c64a4855bbcddb.png?width=404&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083937033191474/97673f0e89c1abfa2ffd8b06ebbf7324.png?width=410&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788083997170335764/30eca62622129dc841e513a8b50e8540.png?width=333&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788084062987485194/27d9c3c1c878f1968b7d3a9e7a0d4f79.png?width=269&height=403",
    "https://media.discordapp.net/attachments/608711481969868811/788084127349604432/957beaf35fc8020fc5997b88fde49ed7.png?width=404&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788084191929171968/28bc577e86905fdcd86e12b6992b34da.png?width=312&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788084287881740338/d2d90eb58b8e342f038d85499c0ac64d.png?width=268&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788084446716756048/2a8c8fea34aa785ef2fe2af267a56c39.png?width=413&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788084535858036786/unknown.png?width=328&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788084815953788958/a6da4aedc28e0abf445d14c54b2bf947.png?width=408&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788084840556658688/a15b01c482ca7836fa93d48131584f89.png?width=399&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788084963634446406/84cdf6d8ca692e5c2aa6243ae6531c63.png?width=323&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085067805098014/0dc95789f8faf6478e00fc80f9366022.png?width=303&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085128538488852/c4856a712e160f3f194115a6e81ce099.png?width=203&height=403",
	"https://media.discordapp.net/attachments/608711481969868811/788085209299288115/a593e737fc0a794f1799517fe4b3d099.png?width=232&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085258662051891/55ac3720e8d0821955b068a7f906b296.png?width=296&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085378392391710/7270d5386fbd32a31cfeabaf44a41853.png?width=417&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085430310141992/ac896d72fa4a046f87a72d508dc9f6e8.png?width=418&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085487272853536/5a7aac152d6c23093fb10fec7211ab48.png?width=308&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085521553293352/couple18.png",
	"https://media.discordapp.net/attachments/608711481969868811/788085581552156692/image0-1.png?width=364&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788085615052324894/couplepp7.png",
	"https://media.discordapp.net/attachments/608711481969868811/788097364937408572/image0.jpg",
	"https://media.discordapp.net/attachments/608711481969868811/788097368791973898/image0.jpg?width=404&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788097376068829204/image0.jpg?width=374&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788110496003391518/a541f78a4e943fc6df9ed98c385a9784.png",
    "https://media.discordapp.net/attachments/608711481969868811/788283075002892318/5841c4ca38d8cabeebd70c01fbf0bb42.jpg",
	"https://media.discordapp.net/attachments/608711481969868811/788295255794515968/33b7c09839cd6b3a848fb98f493c26af.jpg?width=214&height=404",
    "https://media.discordapp.net/attachments/608711481969868811/788283151155331102/f5d6d89efa8794428e809ea4c9c2c6a6.jpg",
	"https://media.discordapp.net/attachments/608711481969868811/788295258731184129/ffa6a9e21fd7efcd0506cfc7f8690da3.jpg?width=269&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788295260983132191/798d86eb2f4bb3a03bbbd5730ac1c005.jpg?width=303&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788295263058919434/1deb3b84d2d327981f1865d666de31bb.jpg?width=269&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788295738450247680/6d6110068721ab2e5475dde8e01b6b4d.jpg?width=404&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788295739586904064/4bb91877eb9ed80928438dc5e1cb653d.jpg?width=323&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788295742339022858/3475d69fef7ba5ec9771f3b3e8ada400.jpg?width=332&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788295758779645962/032cf6efc61ec6a1ffe15fc33a6d7755.jpg?width=408&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312012685574174/image0.jpg?width=378&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312019354386442/image0.jpg?width=327&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312025461162054/image0.jpg?width=390&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312033753301002/image0.jpg?width=404&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312054598598676/image0.jpg?width=349&height=403",
	"https://media.discordapp.net/attachments/608711481969868811/788312061699817482/image0.jpg?width=292&height=403",
	"https://media.discordapp.net/attachments/608711481969868811/788312066607546368/image0.jpg?width=303&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312073289072650/image0.jpg?width=407&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312077676707851/image0.jpg?width=412&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312105056600114/image0.jpg?width=324&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312165349720094/image0.jpg?width=307&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312192583598080/image0.jpg?width=303&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788312203518279680/image0.jpg",
	"https://media.discordapp.net/attachments/608711481969868811/788313308545417216/image0.jpg?width=347&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788313316350099496/image0.jpg?width=323&height=404",
	"https://media.discordapp.net/attachments/608711481969868811/788283025456103465/699e43c481664e6fed1280ddffd9a068.jpg",
	"https://media.discordapp.net/attachments/608711481969868811/788282987455316008/93afaf8773e08b82e04785ad1e00f30b.jpg",
	"https://media.discordapp.net/attachments/608711481969868811/788282928533995550/8ad74ed0a4b597daa94f61565ec99fc6.jpg?width=326&height=404"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let rolls = new Discord.MessageEmbed()

    .setTitle("Couple pp;")

    .setColor("BLACK")

    .setFooter(`${message.author.tag} `, message.author.avatarURL)

    .setImage(replies[result]);

  message.channel.send(rolls);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["couple-pp", "couple-pp", "pp-couple", "couplepp"],

  permLevel: 0
};

exports.help = {
  name: "couple-pp",

  description: "rolls",

  usage: "couple-pp"
};
