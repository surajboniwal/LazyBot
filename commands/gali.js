module.exports = {
	name: 'gali',
	description: 'Gali Command!',
	execute(message, args) {
		var x = Math.floor(Math.random() * 10); 
		var galli = ['chutiya','lodu','gandu','bsdk','jhantu','bc','Jhatpadoda','chaadipadu','padmakodu','himmat']  
		message.channel.send(`${galli[x]} ${args[0]}`);
	},
};