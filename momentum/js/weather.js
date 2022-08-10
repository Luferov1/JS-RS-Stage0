import { language } from "./translation.js";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');

// city.value = 'Minsk';
async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=56b7a76c5cedb1443af49b2e2f0aa2ae&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        
        weatherError.textContent = '';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        if (language === 'en') {
            wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
        }
        if (language === 'ru') {
            wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
            humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
        }
    } catch(err) {
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
        if (language === 'en') weatherError.textContent = `Error! city not found for '${city.value}'!`;
        if (language === 'ru') weatherError.textContent = `Ошибка! город не найден для '${city.value}'!`;
    }

}

const setLocalStorage = () => {
    localStorage.setItem('city', city.value);
}

const getLocalStorage = () => {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    else {
        if (language === 'en') city.value = 'Minsk';
        if (language === 'ru') city.value = 'Минск';
    }
}

city.addEventListener('change', getWeather);
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', () => {
    getLocalStorage();
    getWeather();
});
