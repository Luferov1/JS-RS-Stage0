const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

export let greetingText = '';


export const showGreeting = () => {
    const date = new Date();
    const hours = date.getHours();
    greetingText = getTimeOfTheDay(hours);
    greeting.textContent = `Good ${greetingText}`
}

export const getTimeOfTheDay = (hours) => {
    return hours >= 0 && hours < 6 ? 'night' :
    hours >= 6 && hours < 12 ? 'morning' :
    hours >= 12 && hours < 18 ? 'afternoon' :
    'evening';
}

const setLocalStorage = () => {
    localStorage.setItem('name', name.value);
}

const getLocalStorage = () => {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
