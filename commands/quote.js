var request = require('request');



module.exports = {
	name: 'quote',
	description: 'Random programming quotes!',
	execute(message) {

        let options = {
            url: 'https://programming-quotes-api.herokuapp.com/quotes/random/lang/en',
            method: 'GET'
        }
       
        request(options, (err, response, body) => {
            if(!err && response.statusCode == 200){
                const obj = JSON.parse(body);
                message.channel.send(obj.en);
            }
            else{
                message.channel.send('Achha topic bhejo yaar');
            }
            

        });
	},
};