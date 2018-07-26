
const yargs = require('yargs');



const geocode = require('./geocode/geocode');
const temperature = require('./geocode/temperature');

const argv = yargs
	
	.options({
	a: {
		demand: true,
		alias : 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
})	
.help()
.alias('help','h')
.argv;

//console.log(argv);

geocode.geocodeAddress(argv.a, (errorMsg, results) => {
	
	if(errorMsg) {
		console.log(errorMsg);
	} else {
		console.log(JSON.stringify(results, undefined, 10));
		temperature.getTemperature(results.latitude, results.longitude, (errMsg, tempResults) => {

			if (errMsg) {
				console.log('Error calling the API.');
			} else {
				console.log(JSON.stringify(tempResults, undefined, 10));	
			}
			
		});
	} 
});


// const request = require('request');

// const fn = () =>  {

// 	request(
// 	{
// 	url: 'https://api.darksky.net/forecast/e8de24707d3bd8e3b4bc3250b5dfbefd/28.5821195,77.3266991',
// 	json: true
// }, (error, response, body) => {

// 	if (error) {
// 		callback('Unable to connect to google servers.')
// 	} else if (body.status === 'ZERO_RESULTS') {
// 		callback('Unable to find that address.');
// 	} else {

// 		console.log(body.currently.temperature);
// 	}



// });

// }

// fn();
	
// // // 