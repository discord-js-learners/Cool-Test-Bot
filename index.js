const { Client, Intents, MessageEmbed  } = require("discord.js");
const config = require('./config.json');
const embedHelp = new MessageEmbed()
        .setTitle('Commands')
        .setDescription('Here are the available commands:')
        .setColor('RANDOM')
        .addFields(
            { name: '`;about`', value: 'About this bot.' },
            { name: '`;ping`', value: 'pong!' },
            { name: '`;servers`', value: 'see how many server(s) is the bot in ' },
            { name: '`;invite`', value: 'Get the invite link for this bot.' },
            { name: '`;mcst`', value: 'Change the bot status to "Playing Minecraft"' },
            { name: '`;rbst`', value: 'Change the bot status to "Playing Roblox"' },
            { name: '`;csst`', value: 'Change the bot status to "Playing Csgo"' },
            { name: '`;rsst`', value: 'Change the status back to "Coded by shour"' },
            { name: '`;restart`', value: 'Restart The Bot' },
        )
        .setTimestamp();
    
    // out of if statement
function resetBot(channel) {
  channel.send('`retarting`')
  .then(msg => client.destroy())
  .then(() => client.login(config.TOKEN));
  channel.send('`logged in`')
}
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
    message.channel.send({ embeds: [embedHelp] });
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
  else if (message.content.startsWith(";restart")){
    resetBot(message.channel);
  }
  
});

client.login(config.TOKEN);
