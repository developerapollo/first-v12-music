const { MessageEmbed } = require("discord.js")




module.exports = {
  name: "stats",
  description: "Bot Hakkında Detayları Gösterir",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor("BLACK")
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`STATS AND INFORMATION`, client.user.displayAvatarURL())
    .setDescription(`Benim Adım **${client.user.username}** ve Ben Müzik Çalan Bir Botum.`)
    .addField("SERVERS", client.guilds.cache.size, true)
    .addField("ID", client.user.id, true)
    .addField("PRESENCE", client.user.presence.activities[0], true)
    .addField("UPTIME", client.uptime, true)
    .addField("STATUS", client.user.presence.status, true)
    .addField("TOTAL MEMBERS", client.users.cache.size)
 console.log(client.user.presence)
    message.channel.send(embed)
  }
};
