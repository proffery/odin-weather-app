const weather = (() => {
  const WEATHER_API_KEY = '3edcd2b2225748b2a0c84115230304'
  const LOCATION_BY_OP_API_KEY = 'bdc_d421cee4e72e4bba8e17ae387919f89e'
  
  async function getWeather(city) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`, {mode: 'cors'});
      const weatherObj = await response.json();
      let cleanWeatherObj = await getData(weatherObj);
      return cleanWeatherObj;
  
    } catch(err) {
      const location = await getLocation()
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`, {mode: 'cors'});
      const weatherObj = await response.json();
      let cleanWeatherObj = await getData(weatherObj);
      return cleanWeatherObj
    }
  }
  
  async function getLocation() {
    try {
      const response = await fetch(`https://api.bigdatacloud.net/data/ip-geolocation?key=${LOCATION_BY_OP_API_KEY}`, {mode: 'cors'});
      const locationData = await response.json();
      return locationData.location.city;
  
    } catch(err) {
      console.log(err.message);
    }
  }
  
  function getData(data) {
    const tempObj = JSON.stringify({
      city: data.location.name,
      country: data.location.country,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      wind_kph: data.current.wind_kph,
      wind_mph: data.current.wind_mph,
      wind_dir: data.current.wind_dir
    });

    return JSON.parse(tempObj)
  }

  return {getWeather};

})();

export {weather};