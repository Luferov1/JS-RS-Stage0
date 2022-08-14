import { greetingText } from "./greetings.js";
import { getRundomNumFlickr, rundomNumFlickr, maximum, getLinkToImageUnsplash, getLinkToImageFlickr } from "./backgroundAPI.js";
import { options } from "./options.js";
import { submitButton } from "./options.js";
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let randomNum = {
    value: 0
};

const getRundomNum = () => {
    randomNum.value = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

const setBg = (timeOfTheDay, number) => { 
        if (options.imageSource === 'git') {
            const img = new Image();
            img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfTheDay}/${String(number).padStart(2, "0")}.jpg`;
            img.addEventListener('load', () => {
                document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfTheDay}/${String(number).padStart(2, "0")}.jpg')`;
              })
        } else if (options.imageSource === 'upl') {
            getLinkToImageUnsplash();
        } else {
            getLinkToImageFlickr();
        }
}

const getSlideNext = () => {
    if (options.imageSource === 'git') {
        randomNum.value === 20 ? randomNum.value = 1 : randomNum.value++;
        setBg(greetingText, randomNum.value);
    } else if (options.imageSource === 'upl') {
        setBg(greetingText, randomNum.value);
    } else {
        rundomNumFlickr.value === maximum ? rundomNumFlickr.value = 1 : rundomNumFlickr.value++;
        setBg(greetingText, randomNum.value);
    }
}

const getSlidePrev = () => {
    if (options.imageSource === 'git') {
        randomNum.value === 1 ? randomNum.value = 20 : randomNum.value--;
        setBg(greetingText, randomNum.value);
    } else if (options.imageSource === 'upl') {
        setBg(greetingText, randomNum.value);
    } else {
        rundomNumFlickr.value === 1 ? rundomNumFlickr.value = maximum : rundomNumFlickr.value--;
        setBg(greetingText, randomNum.value);
    }
}

getRundomNum();


slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
submitButton.addEventListener('click', () => {
    setBg(greetingText, randomNum.value);
});

window.addEventListener('load', () => {
    setBg(greetingText, randomNum.value);
});



