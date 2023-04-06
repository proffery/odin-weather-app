import './style.css'
import logoImg from './img/106169566.jpg'
import magnify from './img/magnify.svg'
import background from './img/tealbluebackground.svg'
import {weather} from './apiFunctions.js'

const container = document.querySelector('.container');
const city = document.querySelector('.city');
const icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const country = document.querySelector('.country');
const submitButton = document.querySelector('.submit');
const inputCity = document.getElementById('input-city');
const from = document.querySelector('.form');
const feelTemp = document.querySelector('.feel-temp');
const windSpeed = document.querySelector('.wind-speed');
const windDirection = document.querySelector('.wind-direction');

function setWeather(cityName) {
    weather.getWeather(cityName).then((value) => {
        country.textContent = value.country + ',';
        city.textContent = value.city + ':';
        icon.src = value.icon;
        icon.title = value.condition;
        temp.textContent = value.temp_c + '°C';
        feelTemp.textContent = value.feelslike_c + '°C';
        windSpeed.textContent = value.wind_kph + 'km/h,';
        windDirection.textContent = value.wind_dir;
        console.log(value);
    });
}


submitButton.addEventListener('click', () => {
    setWeather(inputCity.value);
});
from.addEventListener('submit', (e) => {
    e.preventDefault();
    setWeather(inputCity.value);
});

setWeather();
