const request = require('request');



var getTemperature = (lat, lng, callback) => {

	request({
		url: `https://api.darksky.net/forecast/e8de24707d3bd8e3b4bc3250b5dfbefd/${lat}, ${lng}`,
		json: true
	}, (error, response, body) => {

		if (error) {
		callback('Unable to connect to google servers.')
	} else {
		callback(undefined, {
			temperature: body.currently.temperature,
			humidity: body.currently.humidity
		});
	}

	});
};

module.exports.getTemperature = getTemperature;