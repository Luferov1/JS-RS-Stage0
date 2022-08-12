import { language } from "./translation.js";

const popup = document.querySelector('.settings-popup');
const optionsButton = document.querySelector('.settings-container');
const popupBackground = document.querySelector('.background');
const closePopupButton = document.querySelector('.close-button');
const checkboxes = document.querySelectorAll('.checkbox');
export const submitButton = document.querySelector('.submit-button');

let options;
// export let options = {
//     language: 'en',
//     imageSource: 'git',
//     hidden: {
//         audio: false,
//         weather: false,
//         watch: false,
//         date: false,
//         quotes: false,
//         greeting: false,
//         todo: false
//     }
// }
// let notcomfirmedOptions 

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
}

const changeOptions = () => {
    if (checkboxes[0].classList.contains('active')) options.language = 'en';
    if (checkboxes[1].classList.contains('active')) options.language = 'ru';
    if (checkboxes[2].classList.contains('active')) options.imageSource = 'git';
    if (checkboxes[3].classList.contains('active')) options.imageSource = 'upl';
    if (checkboxes[4].classList.contains('active')) options.imageSource = 'flc';
    if (checkboxes[5].classList.contains('active')) options.hidden.audio = true;
    if (checkboxes[6].classList.contains('active')) options.hidden.weather = true;
    if (checkboxes[7].classList.contains('active')) options.hidden.watch = true;
    if (checkboxes[8].classList.contains('active')) options.hidden.date = true;
    if (checkboxes[9].classList.contains('active')) options.hidden.quotes = true;
    if (checkboxes[10].classList.contains('active')) options.hidden.greeting = true;
    if (checkboxes[11].classList.contains('active')) options.hidden.todo = true;
    
    language.value = options.language;
    console.log(options);

    language.value === 'en' ? translatePopupToEn() : translatePopupToRu();
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

    document.querySelector('.audio-hider').lastElementChild.innerHTML = 'Аудио';
    document.querySelector('.weather-hider').lastElementChild.innerHTML = 'Погода';
    document.querySelector('.watch-hider').lastElementChild.innerHTML = 'Часы';
    document.querySelector('.date-hider').lastElementChild.innerHTML = 'Дата';
    document.querySelector('.quotes-hider').lastElementChild.innerHTML = 'Цитаты';
    document.querySelector('.greeting-hider').lastElementChild.innerHTML = 'Приветствие';
    document.querySelector('.todo-hider').lastElementChild.innerHTML = 'Задачи';
    submitButton.innerHTML = 'Подтвердить'
}

const translatePopupToEn = () => {
    optionsButton.lastElementChild.innerHTML = 'Settings';

    document.querySelector('.settings-header').innerHTML = 'Settings';
    document.querySelector('.language-header').innerHTML = 'Choose language';
    document.querySelector('.en-container').lastElementChild.innerHTML = 'English';
    document.querySelector('.ru-container').lastElementChild.innerHTML = 'Russian';

    document.querySelector('.API-header').innerHTML = 'Choose image source';
    document.querySelector('.hider-header').innerHTML = 'Choose what to hide';

    document.querySelector('.audio-hider').lastElementChild.innerHTML = 'Audio';
    document.querySelector('.weather-hider').lastElementChild.innerHTML = 'Weather';
    document.querySelector('.watch-hider').lastElementChild.innerHTML = 'Watch';
    document.querySelector('.date-hider').lastElementChild.innerHTML = 'Date';
    document.querySelector('.quotes-hider').lastElementChild.innerHTML = 'Quotes';
    document.querySelector('.greeting-hider').lastElementChild.innerHTML = 'Greeting';
    document.querySelector('.todo-hider').lastElementChild.innerHTML = 'To-Do list';
    
    submitButton.innerHTML = 'Submit';
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




// localStorage.clear()
