const axios = require('axios');
const apikey = `cbf731f0dabb611571167f2ad21a9d03`;
const weatherStackURL = `http://api.weatherstack.com/current?access_key=` + apikey;

const forecast = (longitude, latitude, callback) => {
  axios
    .get(weatherStackURL + `&query=${latitude},${longitude}&units=m`, { response: 'json' })
    .then((response) => {
      if (response.error) return callback(error, undefined);

      const rb = response.data.current;
      
      callback(undefined, {
        location: response.data.location.name,
        description: `${rb.weather_descriptions[0]}. The weather is currently ${rb.temperature} with a ${rb.precip}% chance of rain`,
      });
    })
    .catch((error) => callback(error, undefined));
};

module.exports = {
  forecast: forecast,
};
