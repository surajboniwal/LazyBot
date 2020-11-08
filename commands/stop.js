const { OpusEncoder } = require('@discordjs/opus');

module.exports = {
	name: 'stop',
	description: 'Stop audio',
	execute(message) {
		stop(message.member.voice.channel);
		message.channel.send('Player stopped!');
	},
};

async function stop(voiceChannel) {
	if(voiceChannel != null){
		const connection = await voiceChannel.join();
		connection.disconnect();
	}
	
}