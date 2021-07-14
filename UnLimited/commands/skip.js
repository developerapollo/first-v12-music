const { MessageEmbed } = require("discord.js")
const connections = new Map();
const { COLOR } = require("../config.json");


module.exports = {
  name: "skip",
  aliases: "geç",
  description: "Şarkıyı Geçer",
  async execute(client, message, args) {
    
if (message.guild.me.voice.channel !== message.member.voice.channel) {
        return message.channel.send("Botla Aynı Ses Kanalında Olman Gerek!");
      }
    
let embed = new MessageEmbed()
.setColor(COLOR);


    const { channel } = message.member.voice;

 
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("BİR SES KANALINDA OLMAN GEREKİYO :/")
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
const vote = message.client.vote.get(message.guild.id)
    if (!serverQueue) {
      embed.setAuthor("Geçicek şarkı bulamadım panmpa :/")
      return message.channel.send(embed);

    }
	
    
    const vcvote = Math.floor(message.guild.me.voice.channel.members.size / 2)
    const okie = Math.floor(message.guild.me.voice.channel.members.size / 2 - 1)
    console.log(message.guild.me.voice.channel.members.size)
     if(!message.member.hasPermission("ADMINISTRATOR")) {
       if(vote.vote > okie) {
         serverQueue.connection.dispatcher.end();
    embed.setDescription("OYLAMA - SKIP | Şarkı Geçiliyor <:unlimited:721371250521407568>")
    embed.setAuthor(message.guild.name ,('https://cdn.discordapp.com/avatars/708058576417194046/330ddc44ab06f7e086f8ac5cabcde891.webp'))
    return message.channel.send(embed);
       }
       
       if(vote.voters.includes(message.author.id)) {
         return message.channel.send("Bu şarkıya zaten oy verdin")
       }
       
       if(vcvote === 2) {
          serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Şarkı Geçiliyor <:unlimited:721371250521407568>")
    embed.setAuthor(message.guild.name ,('https://cdn.discordapp.com/avatars/708058576417194046/330ddc44ab06f7e086f8ac5cabcde891.webp'))
    return message.channel.send(embed);
       }
       
       
       
vote.vote++
       vote.voters.push(message.author.id)
       return message.channel.send(`Şarkının Atlanması için Oy Verdiniz, ancak ${Math.floor(vcvote - vote.vote)} kadar oya ihtiyacımız var`)
    
     
     
     
     }

    serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Şarkı Geçiliyor <:unlimited:721371250521407568>")
    embed.setAuthor(message.guild.name ,('https://cdn.discordapp.com/avatars/708058576417194046/330ddc44ab06f7e086f8ac5cabcde891.webp'))
    message.channel.send(embed);
  }
};
