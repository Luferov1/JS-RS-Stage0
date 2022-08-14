import { language } from "./translation.js";
import { greetingText } from "./greetings.js";

const popup = document.querySelector('.settings-popup');
const optionsButton = document.querySelector('.settings-container');
const popupBackground = document.querySelector('.background');
const closePopupButton = document.querySelector('.close-button');
const checkboxes = document.querySelectorAll('.checkbox');
export const keywordsInput = document.querySelector('.API-input');
export const submitButton = document.querySelector('.submit-button');

export let options;

const hideArr = [
    document.querySelector('.player'), 
    document.querySelector('.weather'), 
    document.querySelector('.time'),
    document.querySelector('.date'),
    document.querySelector('.footer'),
    document.querySelector('.greeting-container'),
    document.querySelector('.to-do-container')
]

const openPopup = () => {
    popup.style.transform = 'translateY(110%)';
    popupBackground.classList.add('background-active');
}

const closePopup = () => {
    popup.style.transform = 'none';
    popupBackground.classList.remove('background-active');
}

const addTick = (event) => {
    if (!event.target.classList.contains('checkbox')) return;
    const checkboxContainer = event.target.parentNode.parentNode;

    if (checkboxContainer.classList.contains('language-input-container') 
    || checkboxContainer.classList.contains('API-input-container')) {

        for (let i = 0; i < checkboxContainer.children.length; i++) {
            checkboxContainer.children[i].firstElementChild.classList.remove('active');
        }
        event.target.classList.add('active');
    } else {
        event.target.classList.toggle('active');
    }
    if (event.target.closest('.API-input-container')) {
        if (!event.target.closest(".git-container")) {
            keywordsInput.classList.remove('hide');
        } else {
            keywordsInput.classList.add('hide');
        }
    }
}

const changeOptions = () => {
    if (checkboxes[0].classList.contains('active')) options.language = 'en';
    if (checkboxes[1].classList.contains('active')) options.language = 'ru';
    if (checkboxes[2].classList.contains('active')) options.imageSource = 'git';
    if (checkboxes[3].classList.contains('active')) options.imageSource = 'upl';
    if (checkboxes[4].classList.contains('active')) options.imageSource = 'flc';
    if (checkboxes[5].classList.contains('active')) options.hidden.audio = true;
    else options.hidden.audio = false;
    if (checkboxes[6].classList.contains('active')) options.hidden.weather = true;
    else options.hidden.weather = false;
    if (checkboxes[7].classList.contains('active')) options.hidden.watch = true;
    else options.hidden.watch = false;
    if (checkboxes[8].classList.contains('active')) options.hidden.date = true;
    else options.hidden.date = false;
    if (checkboxes[9].classList.contains('active')) options.hidden.quotes = true;
    else options.hidden.quotes = false;
    if (checkboxes[10].classList.contains('active')) options.hidden.greeting = true;
    else options.hidden.greeting = false;
    if (checkboxes[11].classList.contains('active')) options.hidden.todo = true;
    else options.hidden.todo = false;
    
    if (options.imageSource !== 'git') keywordsInput.classList.remove('hide');

    language.value = options.language;

    language.value === 'en' ? translatePopupToEn() : translatePopupToRu();

    hideBlock();

    closePopup();

}

const setLocalStorage = () => {
    localStorage.setItem('options', JSON.stringify(options));
}

const getLocalStorage = () => {
    if(localStorage.getItem('options')) {
        options = JSON.parse(localStorage.getItem('options'));

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].classList.remove('active');
        }

        if (options.language === 'en') checkboxes[0].classList.add('active');
        else checkboxes[1].classList.add('active');

        if (options.imageSource === 'git') checkboxes[2].classList.add('active');
        else if (options.imageSource === 'upl') checkboxes[3].classList.add('active');
        else checkboxes[4].classList.add('active');

        let counter = 5;
        for (let key in options.hidden) {
            if (options.hidden[key] === true)  checkboxes[counter].classList.add('active');
            counter++;
        }

    }
    else {
        options  = {
            language: 'en',
            imageSource: 'git',
            hidden: {
                audio: false,
                weather: false,
                watch: false,
                date: false,
                quotes: false,
                greeting: false,
                todo: false
            }
        }
    }
}

const translatePopupToRu = () => {
    optionsButton.lastElementChild.innerHTML = 'настройки';

    document.querySelector('.settings-header').innerHTML = 'Настройки';
    document.querySelector('.language-header').innerHTML = 'Выберите язык';
    document.querySelector('.en-container').lastElementChild.innerHTML = 'Английский';
    document.querySelector('.ru-container').lastElementChild.innerHTML = 'Русский';

    document.querySelector('.API-header').innerHTML = 'Выберите источник изображений';
    document.querySelector('.hider-header').innerHTML = 'Выберите что скрыть';
    document.querySelector('.API-input').placeholder = 'Ключевые слова';

    document.querySelector('.audio-hider').lastElementChild.innerHTML = 'Аудио';
    document.querySelector('.weather-hider').lastElementChild.innerHTML = 'Погода';
    document.querySelector('.watch-hider').lastElementChild.innerHTML = 'Часы';
    document.querySelector('.date-hider').lastElementChild.innerHTML = 'Дата';
    document.querySelector('.quotes-hider').lastElementChild.innerHTML = 'Цитаты';
    document.querySelector('.greeting-hider').lastElementChild.innerHTML = 'Приветствие';
    document.querySelector('.todo-hider').lastElementChild.innerHTML = 'Задачи';
    submitButton.innerHTML = 'Подтвердить';

    document.querySelector('.to-do-container h3').innerHTML = 'Список целей';
    document.querySelector('.goal-adder').innerHTML = 'Новая цель';
}

const translatePopupToEn = () => {
    optionsButton.lastElementChild.innerHTML = 'Settings';

    document.querySelector('.settings-header').innerHTML = 'Settings';
    document.querySelector('.language-header').innerHTML = 'Choose language';
    document.querySelector('.en-container').lastElementChild.innerHTML = 'English';
    document.querySelector('.ru-container').lastElementChild.innerHTML = 'Russian';

    document.querySelector('.API-header').innerHTML = 'Choose image source';
    document.querySelector('.hider-header').innerHTML = 'Choose what to hide';
    document.querySelector('.API-input').placeholder = 'Key words';

    document.querySelector('.audio-hider').lastElementChild.innerHTML = 'Audio';
    document.querySelector('.weather-hider').lastElementChild.innerHTML = 'Weather';
    document.querySelector('.watch-hider').lastElementChild.innerHTML = 'Watch';
    document.querySelector('.date-hider').lastElementChild.innerHTML = 'Date';
    document.querySelector('.quotes-hider').lastElementChild.innerHTML = 'Quotes';
    document.querySelector('.greeting-hider').lastElementChild.innerHTML = 'Greeting';
    document.querySelector('.todo-hider').lastElementChild.innerHTML = 'To-Do list';
    
    submitButton.innerHTML = 'Submit';

    document.querySelector('.to-do-container h3').innerHTML = 'To-Do list';
    document.querySelector('.goal-adder').innerHTML = 'New To-Do';
}

const hideBlock = () => {
    for (let i = 0; i < hideArr.length; i++) {
        if (Object.values(options.hidden)[i] === true) hideArr[i].classList.add('blockHider');
        else hideArr[i].classList.remove('blockHider');
    }
}

const setOptions = () => {
    getLocalStorage();
    changeOptions();
}

optionsButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupBackground.addEventListener('click', closePopup);
popup.addEventListener('click', addTick);
submitButton.addEventListener('click', changeOptions);

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', setOptions);

console.log(
    '1) +15\n2) +10\n3) +20\n4) +15\n5) +10\n6) +15\n7) +17\n8) +15\n9) +9\n10) +20\n11) +10\ntotal: 157/150'
)