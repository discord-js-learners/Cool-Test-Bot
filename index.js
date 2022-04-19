const { Client, Intents } = require("discord.js");
const config = require('./config.json');
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
    message.channel.send("prefix is ; here are some commands = ping,servers,about,invite");
  }
  else if (message.content.startsWith(";servers")) {
      message.channel.send(`Currently in ${client. guilds. cache. size} servers`)
  }
  else if (message.content.startsWith(";about")) {
      message.channel.send("This is a discord bot made by shourgamer2#6474 for learning js")
  }
  else if (message.content.startsWith(";invite")){
    message.channel.send("Here is the invite link for this bot: https://discord.com/api/oauth2/authorize?client_id=965565479127236618&permissions=8&scope=bot")
  }
  else if (message.content.startsWith(";status1")){
    client.user.setActivity("hi the ststus changed");
  }
  
});

client.login(config.TOKEN);
