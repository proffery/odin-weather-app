import './style.css'
import logoImg from './img/106169566.jpg'
import { getWeather, getLocation } from './apiFunctions';

console.log(getWeather(`${getLocation()}`));
//getLocation();
