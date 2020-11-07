module.exports = {
	name: 'gali',
	description: 'Gali Command!',
	execute(message, args) {
		message.channel.send(`Args ${args}`);
	},
};