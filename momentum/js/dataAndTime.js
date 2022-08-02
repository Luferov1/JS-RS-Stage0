import { showGreeting } from "./greetings.js";

const time = document.querySelector('.time');
const dateNow = document.querySelector('.date');


const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

const showDate = () => {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('en-Gb', options);
    dateNow.textContent = currentDate;
}

showTime();
