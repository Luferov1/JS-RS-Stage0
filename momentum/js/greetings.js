import { language } from "./translation.js";


const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

export let greetingText = '';

export const showGreeting = (language) => {
    const date = new Date();
    const hours = date.getHours();
    if (language === 'en') {
        greetingText = getTimeOfTheDayEn(hours);
        name.placeholder = '[Enter name]';
        greeting.textContent = `Good ${greetingText}`
    } 
    if (language === 'ru') {
        greetingText = getTimeOfTheDayEn(hours);
        name.placeholder = '[Введите имя]';
        greeting.textContent = getTimeOfTheDayRu(hours);
    }
}

export const getTimeOfTheDayEn = (hours) => {
    return hours >= 0 && hours < 6 ? 'night' :
    hours >= 6 && hours < 12 ? 'morning' :
    hours >= 12 && hours < 18 ? 'afternoon' :
    'evening';
}

const getTimeOfTheDayRu = (hours) => {
    return hours >= 0 && hours < 6 ? 'Доброй ночи' :
    hours >= 6 && hours < 12 ? 'Доброе утро' :
    hours >= 12 && hours < 18 ? 'Добрый день' :
    'Добрый вечер';
}

const setLocalStorage = () => {
    localStorage.setItem('name', name.value);
}

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

showGreeting(language);

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
