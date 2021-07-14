const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  aliases: "ses",
  description: "Müziğin Ses Seviyesini Değiştirir",
  execute(client, message, args) {
 if (message.guild.me.voice.channel !== message.member.voice.channel) {
        return message.channel.send("Botla Aynı Ses Kanalında Olman Gerek!");
      }   
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Müziğin sesini değiştirme izniniz yok")
    }
    

    
    let embed = new MessageEmbed().setColor(COLOR);

    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("SES KANALINDA OLMANIZ GEREKİYOR :/")
      return message.channel.send(embed);
    }
    
     const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Bot hiçbir şey çalmıyor")
      return message.channel.send(embed);
    }
    
    if(!args[0]) {
      embed.setAuthor(`Şuanki Ses Seviyesi: ${serverQueue.volume}`)
      return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("Lütfen Yalnızca Sayısal Değerler Kullanın")
      return message.channel.send(embed)
    }
    
    if(args[0] > 200) {
      embed.setAuthor("Ses Seviyesi 200 sınırını geçersen öleceksin :)")
      return message.channel.send(embed)
    }
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setDescription(`Seted Volume to ${args[0]}`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
  }
};
