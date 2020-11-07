const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message=>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(command == 'gali'){
        client.commands.get(command).execute(message, args);
    }else if(command == 'avatar'){
        client.commands.get(command).execute(message);
    }else if(command == 'joke'){
        client.commands.get(command).execute(message,args);
    }else if(command == 'meme'){
        client.commands.get(command).execute(message,args);
    }else if(command == 'quote'){
        client.commands.get(command).execute(message);
    }else if(command == 'stop'){
        client.commands.get(command).execute(message);
    }else if(command == 'play'){
        client.commands.get(command).execute(message,args);
    }else if(command == 'p'){
        client.commands.get(command).execute(message,args);
    }
});

client.login(token);