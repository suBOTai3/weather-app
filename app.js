const gc = require('./utils/geocode');
const forecast = require('./utils/forecast');
const cityName = process.argv[2];

console.clear();

gc.geocode(cityName, (error, { longitude, latitude }) => {
  if (error) return console.log(error);

  forecast.forecast(longitude, latitude, (error, { description, location }) => {
    
    console.log(location, description);

  });
});
