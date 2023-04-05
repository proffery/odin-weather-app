import './style.css'
import logoImg from './img/106169566.jpg'
import {weather} from './apiFunctions.js'

const container = document.querySelector('.container');
const city = document.querySelector('.city');
const icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const country = document.querySelector('.country');


function setWeather(cityName) {
    weather.getWeather(cityName).then((value) => {
        country.textContent = value.country + ',';
        city.textContent = value.city + ':';
        icon.src = value.icon;
        icon.title = value.condition;
        temp.textContent = value.temp_c + '°C';
        console.log(value.city);
    });
}

setWeather('london');
