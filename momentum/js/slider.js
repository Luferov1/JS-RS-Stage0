import { greetingText } from "./greetings.js";

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let randomNum;

const getRundomNum = () => {
    randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

const setBg = (timeOfTheDay, number) => {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfTheDay}/${String(number).padStart(2, "0")}.jpg`;
    img.addEventListener('load', () => {
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfTheDay}/${String(number).padStart(2, "0")}.jpg')`;
      })
}

const getSlideNext = () => {
    randomNum === 20 ? randomNum = 1 : randomNum++;
    setBg(greetingText, randomNum);
}

const getSlidePrev = () => {
    randomNum === 1 ? randomNum = 20 : randomNum--;
    setBg(greetingText, randomNum);
}

getRundomNum();


slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
window.addEventListener('load', () => {
    setBg(greetingText, randomNum);
});