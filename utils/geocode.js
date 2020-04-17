const axios = require('axios').default;
const mapBoxApiKey = `pk.eyJ1Ijoic3Vib3RhaSIsImEiOiJjazh2czE5bzgwMnQzM25udzZ2NjJ0a3dxIn0.iIKZwixh8y8QrpJrwRFg5w`;

const geocode = (cityName, callback) => {
  cityName = encodeURIComponent(cityName);
  const mapBoxApiURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${mapBoxApiKey}&limit=1`;

  axios
    .get(mapBoxApiURL, { response: 'json' })
    .then((response) => {
      const features = response.data.features;

      callback(undefined, {
        longitude: features[0].geometry.coordinates[0],
        latitude: features[0].geometry.coordinates[1],
      });
    })
    .catch((error) => {
      callback(error, { latitude: 0, longitude: 0 });
    });
};

module.exports = {
  geocode: geocode,
};
