var request = require('request');



module.exports = {
	name: 'meme',
	description: 'Random programming jokes!',
	execute(message, args) {

        let options = {
            url: 'https://meme-api.herokuapp.com/gimme/'+args,
            method: 'GET'
        }
       
        request(options, (err, response, body) => {
            if(!err && response.statusCode == 200){
                const obj = JSON.parse(body);
                message.channel.send(obj.url);
            }
            else{
                message.channel.send('Achha topic bhejo yaar');
            }
            

        });
	},
};