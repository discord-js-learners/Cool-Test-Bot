const { Client, Intents, MessageEmbed  } = require("discord.js");
const config = require('./config.json');

const embedHelp = new MessageEmbed()
        .setTitle('Commands')
        .setDescription('Here are the available commands:')
        .setColor('RANDOM')
        .addFields(
            { name: '`;about`', value: 'About this bot.' },
            { name: '`;ping`', value: 'pong! and the ping of the bot' },
            { name: '`;servers`', value: 'see how many server(s) is the bot in ' },
            { name: '`;invite`', value: 'Get the invite link for this bot.' },
            { name: '`;mcst`', value: 'Change the bot status to "Playing Minecraft"' },
            { name: '`;rbst`', value: 'Change the bot status to "Playing Roblox"' },
            { name: '`;csst`', value: 'Change the bot status to "Playing Csgo"' },
            { name: '`;rsst`', value: 'Change the status back to "Coded by shour"' },
            { name: '`;restart`', value: 'Restart The Bot' },
            { name: '`;clear`', value: 'clears the whole channel' },
            { name: '`;shutdown`', value: 'Stops the bot' },
          
        )
        .setTimestamp();
    
    // out of if statement
function resetBot(channel) {
  channel.send('retarting')
  .then(msg => client.destroy())
  .then(() => client.login(config.TOKEN));
  channel.send('logged in')
}
  function shutdownbot(channel) {
    channel.send('The bot has been shutdown')
    .then(msg => client.destroy())
    
    

}
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Coded by shour"); 
  
});

client.on('messageCreate', async (message) => {
  // ...
   if (message.content === ";clear") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('you don\'t have the permission for that.');
    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.channel.send('I don\'t have the permission for that.');
    
    try {
        await message.channel.clone().then(ch => {
            ch.setPosition(message.channel.position);
            ch.send('All messages removed').then(message => {setTimeout(() => message.delete(), 5000);});
        });
        await message.channel.delete();
    } catch (err) {
        console.error(err);
    }
  }
  // ...
})

// ...

client.on("messageCreate", (message) => {
  if (message.content.startsWith(";ping")) {
    const clientPing = Math.abs((Date.now() - message.createdTimestamp)  ); // use division if needed
    message.channel.send(`Pong!  ping: ${clientPing} ms.`);
    

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
  else if (message.content.startsWith(";shutdown")){
    shutdownbot(message.channel);
  }
  
  
});

client.login(config.TOKEN);
