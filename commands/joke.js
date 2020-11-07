var request = require('request');

let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
}




module.exports = {
	name: 'joke',
	description: 'Random programming jokes!',
	execute(message, args) {
       
        request(options, (err, response, body) => {
            if(!err && response.statusCode == 200){
                const obj = JSON.parse(body);
                message.channel.send(obj.joke);
            }
            

        });
	},
};