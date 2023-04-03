const WEATHER_API_KEY = '3edcd2b2225748b2a0c84115230304'

async function getWeather(sity) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${sity}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData.location.country);

  } catch(err) {
    console.log(err);
  }
}

export default getWeather;