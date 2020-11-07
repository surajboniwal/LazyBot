const yts = require("yt-search");
const fs = require("fs");
const ytdl = require("ytdl-core");
const config = require('../config.json')
videos = [];

module.exports = {
  name: "play",
  description: "Audio Command!",
  async execute(message, args) {
    var query = args.join(" ");

    if(args.length == 1 && args[0] >= 1 && args[0] <= 5 && videos.length > 0){
        play(message.member.voice.channel, videos[args[0]-1].url);
        message.channel.send(`Playing ${videos[args[0]-1].name}`);
    }else if(args.length == 1 && args[0] >= 1 && args[0] <= 5 && videos.length == 0){
      message.channel.send(`First search for some songs by using '${config.prefix}<Song Name>'`);
    }
    else{
        showResults(query, message);
    }
    videos = [];
  },
};

async function showResults(query, message) {
  const results = await yts(query);
  const resultVideos = results.videos.slice(0, 5);
  resultVideos.forEach((result) => {
    videos.push({ name: result.title, url: result.url });
  });

  message.channel.send("Select song to play");
  message.channel.send(videos.map((name) => `- ${name.name}`));
}

async function play(voiceChannel, videoUrl) {
  const songInfo = await ytdl.getInfo(videoUrl);
  const song = {
    title: songInfo.title,
    url: songInfo.videoDetails.video_url,
  };
  const connection = await voiceChannel.join();
  const dispatcher = connection.play(ytdl(song.url, {filter: 'audioonly'}));

  dispatcher.on("start", () => {});
}
