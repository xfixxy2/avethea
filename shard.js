const { ShardingManager } = require("discord.js");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const shards = new ShardingManager("./bot.js", {
 //DarkCode
//DarkCode
  token: ayarlar.token,
//DarkCode
  totalShards: 2,
});
//DarkCode
const webhook = new Discord.WebhookClient(
  "KZaWx_8-eUNGD0Rbu2XIhWdgX0H3Q1nz",
  "772882865187979304"
);
//DarkCode
shards.on("launch", shard => {
  webhook.send(
    //DarkCode
`Bağlanamadik${shard.id +
      1} ID li Shard Discorddan Çıkış Yaptı `
  );
  setTimeout(() => {
    webhook.send(
      //DarkCode
`Baglaniyoruz${shard.id +
        1}  Sharda Bağlandım`
    );
  }, 7000);
});
//DarkCode
//DarkCode
//DarkCode
shards.on("message", (shard, msg) => {
  console.log(
    `[${new Date()
      .toString()
      .split(" ", 5)
      .join(" ")}] #${shard.id} | ${msg._eval} | ${msg._result}`
  );
});

shards.spawn()