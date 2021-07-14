//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Botun Pingini Gösterir",
  execute(client, message) {
    message.channel.send("Ping: "+client.ws.ping+"ms");
  }
};
