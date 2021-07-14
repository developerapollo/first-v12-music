const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
module.exports = {
  name: "drop",
  description: "Şarkıyı Sıradan Çıkarmaya Yarar",
  execute(client, message, args) {
if (message.guild.me.voice.channel !== message.member.voice.channel) {
        return message.channel.send("Botla Aynı Ses Kanalında Olman Gerek!");
      }
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setAuthor("**Bir sesli kanala gir knk :/**");
      return message.channe.send(embed);
    }

    const serverQueue = client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Kuyruk Boş");
      return message.channel.send(embed);
    }
    
     if(isNaN(args[0])) {
      embed.setAuthor("Lütfen Yalnızca Sayısal Değerler Kullanın")
      return message.channel.send(embed)
    }
   
    if(args[0] > serverQueue.songs.length) {
      embed.setAuthor("Bu şarkı bulunamıyor")
      return message.channel.send(embed)
    }
    
    
    serverQueue.songs.splice(args[0] - 1, 1)
    embed.setDescription("KUYRUKTAN BİR ŞARKI DÜŞÜRÜLDÜ")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed)
  }
};
