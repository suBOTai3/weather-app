const axios = require('axios');
const apikey = `eb08658461d688844d69fd39ab61fc11`;
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
