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
    message.channel.send("prefix is ; here are some commands = ping,servers,about,invite,mcst,rbst,csst  | Usage | ping = pong,servers = see how many servers is this bot in, about = About this bot,invite = Get invite link to this bot,mcst = set the status of the bot to Playing Minecraft,rbst = Set the status of this bot to playing roblox,csst = set the status of this bot to playing csgo,rsst = Resets the status back to Coded by shour");
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
  else if (message.content.startsWith(";mcst")){
    client.user.setActivity("Minecraft");
    message.channel.send("Bot status changed to Playing Minecraft")
  }
  else if (message.content.startsWith(";rbst")){
    message.channel.send("Bot status changed to playing roblox")
    client.user.setActivity("Roblox")
  }
  else if (message.content.startsWith(";csst")){
    client.user.setActivity("csgo")
    message.channel.send("Bot status changed to playing csgo")
  }
  else if (message.content.startsWith(";rsst")){
    message.channel.send("Status reseted back to Coded by shour")
    client.user.setActivity("Coded by shour"); 
  }
  
});

client.login(config.TOKEN);
