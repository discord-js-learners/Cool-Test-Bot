# Cool Test Bot
This is a cool bot which has some features 
invite the bot from here : https://discord.com/api/oauth2/authorize?client_id=965565479127236618&permissions=8&scope=bot

# Modify For Windows

 First of all clone this repo using [git](https://git-scm.com/) <br>
 ``` sh
 git clone https://github.com/discord-js-learners/Cool-Test-Bot
 ```
 then 
 make config.json and then write this : <br>
 ```json
 {
"TOKEN":"yourbottokenhere"
}
```
to hide it if you are using heruko or uploading the code to github put config.json in the gitignore it is already there because i put it in there aswell so i can hide it in here <br>
Go to [code](https://github.com/discord-js-learners/Cool-Test-Bot#code) to understand the code

# Modify For Linux
Make sure you have [node.js](https://nodejs.org/) installed or else it is not going to work the bash file will install git and then clone the repo and also install discord.js <br>
Go to [code](https://github.com/discord-js-learners/Cool-Test-Bot#code) to understand the code
```sh
wget https://discord-js-learners.github.io/Cool-Test-Bot/linux.sh
```
```sh
bash linux.sh
```
```sh
cd Cool-Test-Bot
```

```sh
node index.js
```
# Code
Require all the needed things
```javascript
const { Client, Intents, MessageEmbed  } = require("discord.js");
const config = require('./config.json');
```
Make the help embed
```javascript
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
```
restart functon
```javascript
function resetBot(channel) {
  channel.send('retarting')
  .then(msg => client.destroy())
  .then(() => client.login(config.TOKEN));
  channel.send('logged in')
}
```
Shutdown function
```javascript
 function shutdownbot(channel) {
    channel.send('The bot has been shutdown')
    .then(msg => client.destroy())
    
    

}
```
Make the client
```javascript
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
```
Client on ready function and add status
```javascript

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Coded by shour"); 
  
});
```
Making the messagecreate  async function for ;clear
```javascript
client.on('messageCreate', async (message) => {
```
Clear code
```javascript
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
```
messagecreate function for other commands
```javascript
client.on("messageCreate", (message) => {
```
Making the ;ping command
```javascript
if (message.content.startsWith(";ping")) {
    const clientPing = Math.abs((Date.now() - message.createdTimestamp)  ); // use division if needed
    message.channel.send(`Pong!  ping: ${clientPing} ms.`);
    

  }
```
Making the ;help command
```javascript
 else if (message.content.startsWith(";help")) {
    message.channel.send({ embeds: [embedHelp] });
  }
```
Making the ;servers command
```javascript
else if (message.content.startsWith(";servers")) {
      message.channel.send(`Currently in ${client. guilds. cache. size} servers`)
  }
```
Making the ;about command
```javascript
else if (message.content.startsWith(";about")) {
      message.channel.send("This is a discord bot made by shourgamer2#6474 for learning js")
  }
```
Making the ;invite command
```javascript
else if (message.content.startsWith(";invite")){
    message.channel.send("Here is the invite link for this bot:yourinvitelinkhere")
  }
```
Making the ;mcst command
```javascript
  else if (message.content.startsWith(";mcst")){
    client.user.setActivity("Minecraft");
    message.channel.send("Bot status changed to Playing Minecraft")
  }
```
Making the ;rbst command
```javascript
 else if (message.content.startsWith(";rbst")){
    message.channel.send("Bot status changed to playing roblox")
    client.user.setActivity("Roblox")
  }
```
Making the ;csst command
```javascript
  else if (message.content.startsWith(";csst")){
    client.user.setActivity("csgo")
    message.channel.send("Bot status changed to playing csgo")
  }
```
Making the ;rsst command
```javascript
  else if (message.content.startsWith(";rsst")){
    message.channel.send("Status reseted back to Coded by shour")
    client.user.setActivity("Coded by shour"); 
  }
```
Making the ;restart command
```javascript
  else if (message.content.startsWith(";restart")){
    resetBot(message.channel);
  }
```
Making the ;shutdown command
```javascript
  else if (message.content.startsWith(";shutdown")){
    shutdownbot(message.channel);
  }
  
  
});
```
Login to the bot
```javascript
client.login(config.TOKEN);

```
