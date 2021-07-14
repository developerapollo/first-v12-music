const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");


module.exports = {
  name: "resume", 
  description: "Bekletilen Şarkıyı Devam Ettirtir",
  execute (client, message, args) {
if (message.guild.me.voice.channel !== message.member.voice.channel) {
        return message.channel.send("Botla Aynı Ses Kanalında Olman Gerek!");
      }
    let embed = new MessageEmbed()
.setColor(COLOR);

      const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("BİR SESLİ :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  embed.setAuthor("✅ | Resumed the Paused Song")
   embed.setThumbnail(client.user.displayAvatarURL())
  return message.channel.send(embed)
 }
    embed.setDescription("There is nothing paused that i can resume")
    message.channel.send(embed)
    
  }
}