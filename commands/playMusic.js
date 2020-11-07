

const fs = require('fs');

const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    description: 'Audio Command!',
    async execute(message, args) {
        const songInfo = await ytdl.getInfo(args[0]);
        const song = {
            title: songInfo.title,
            url: songInfo.videoDetails.video_url,
        };
        console.log(song.url);
        // message.channel.send(`${song.title[0]} has been added to the queue!`);
        play(message.member.voice.channel,song);
        message.channel.send('Playing Audio');
    },
};

async function play(voiceChannel,song) {
    const connection = await voiceChannel.join();
    const dispatcher = connection.play(ytdl(song.url)).on("finish", () => {
        message.channel.send(' Done Playing Audio');
    })

    dispatcher.on('start', () => {

    });

}