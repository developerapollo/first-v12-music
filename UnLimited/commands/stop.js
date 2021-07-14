const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");



const discord = require("discord.js");

module.exports = {
  name: "stop",
  aliases: "dur",
  description: "Bot Tüm Şarkıları Durdurur ;)",
  execute(client, message, args) {
 if (message.guild.me.voice.channel !== message.member.voice.channel) {
        return message.channel.send("Botla Aynı Ses Kanalında Olman Gerek!");
      }   
    
let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("SES KANALINDA OLMANIZ GEREKİYOR :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Durdurabileceğim hiçbir şey çalmıyor")
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
