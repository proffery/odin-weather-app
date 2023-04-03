const WEATHER_API_KEY = '3edcd2b2225748b2a0c84115230304'
const LOCATION_BY_OP_API_KEY = 'bdc_d421cee4e72e4bba8e17ae387919f89e'

async function getWeather(city) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`, {mode: 'cors'});
    const weatherData = await response.json();
    //console.log(weatherData);

  } catch(err) {
    console.log(err);
  }
}

async function getLocation() {
  try {
    const response = await fetch(`https://api.bigdatacloud.net/data/ip-geolocation?key=${LOCATION_BY_OP_API_KEY}`, {mode: 'cors'});
    const locationData = await response.json();
    //console.log(locationData.location.city);
    return locationData.location.city;

  } catch(err) {
    console.log(err);
  }
}

export {getWeather, getLocation};