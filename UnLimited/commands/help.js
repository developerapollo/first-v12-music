const { MessageEmbed } = require("discord.js")
const { readdirSync } = require("fs")
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "Müzik Komutlarını Listeler",
  execute (client, message, args) {
    
    
let embed = new MessageEmbed()
.setAuthor("UnLimited Help", client.user.displayAvatarURL())
.setThumbnail('https://cdn.discordapp.com/emojis/725423896517410959.gif?v=1')
.setColor(COLOR)
.setDescription(`${client.user.username} Botu Davet için [Tıklayın](https://discord.com/oauth2/authorize?client_id=712333332192428083&scope=bot&permissions=36719616)`)

let command = readdirSync("./commands")    

let i;
    for(i = 0; i < command.length; i++) {
      console.log(command[i])
      
      const cmd = client.commands.get(command[i].replace(".js", ""))
      embed.addField(`<:unlimited:721371250521407568> ;**${cmd.name}**`, cmd.description, true)
      
    }
    
    message.channel.send(embed)
    
    

    
    
    
  }
}