const Discord = require('discord.js')
const client = new Discord.Client();
const OJS = require("owop-js");
const Client = new OJS.Client({
    reconnect: true,
    controller: true
});

client.on("message", msg => {
  if(msg.content == "image") {
    msg.attachments.forEach(attachment => {
    const ImageLink = attachment.proxyURL
    Client.chat.send(msg.author.tag+" > "+ImageLink)
    });
  }
  else if(msg.author.id == "841358499400908830") return;
  else if(msg.channel.name == "owop-chat") {
    let msget = msg.content
    let msgete = msget.toString()
    if(msgete.startsWith("chhe")) return;
      else{
      Client.chat.send(`[D] ${msg.author.username} > ${msg.content}`)
    }
  }
})

Client.on("message", msg => {
	var msget = msg.toString()
    var message = msg
    if(msget.includes("[D]")) return;
    let channel1 = client.channels.cache.find(channel1 => channel1.name === `owop-chat`)
    if(!channel1) return;
    channel1.send(message)
    console.log(message)
});

client.login("ODQxMzU4NDk5NDAwOTA4ODMw.YJlmKQ.hljBaYkPwSEqGVdY1Tp8so7Kf4Q")