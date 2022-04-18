const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Coded by shour"); 
  
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith(";ping")) {
    message.channel.send("pong!");
    

  }
  else if (message.content.startsWith(";help")) {
    message.channel.send("prefix is ; here are some commands = ping,servers.about");
  }
  else if (message.content.startsWith(";servers")) {
      message.channel.send(`Currently in ${client. guilds. cache. size} servers`)
  }
  else if (message.content.startsWith(";about")) {
      message.channel.send("This is a discord bot made by shourgamer2#6474 for learning js")
  }
  
});

client.login("OTY1NTY1NDc5MTI3MjM2NjE4.Yl1C7Q.5ulYC29DOUsD7iHLoxLf6EcufJU");