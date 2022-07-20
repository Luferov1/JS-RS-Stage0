console.log('1. +10 \n2. +20 \n3. +48\n4. +12 \n5. +20 \nmark: 100/100');

const container = document.getElementById('container');
const openButton = document.getElementById('open');
const menu = document.getElementById('burger-menu');
const closeButton = document.getElementById('close');
const links = document.getElementsByClassName('burger-menu-item');

const popupItems = [
document.querySelector('.popup-fb'), 
document.querySelector('.popup-gl'),
document.querySelector('.popup-firstline'),
document.querySelector('.popup-forgot-psw')
];

const header = document.querySelector('.popup-header');
const redirect = document.querySelector('.popup-redirection');
let popupStatus = 'login';
const loginButton = document.querySelector('.login-button');
const popup = document.querySelector('.popup');
const popupBackground = document.querySelector('.popup-background');

const openBurger = () => {
    menu.classList.toggle('burger-menu-open');
}

const closeBurger = () => {
    menu.classList.toggle('burger-menu-open');
} 

const changePopup = () => {
    if (popupStatus === 'login') {
        for (let item of popupItems) {
            item.classList.toggle('popup-hide');
            console.log(item.classList);
        }
        header.innerHTML = 'Create account';
        redirect.innerHTML = 'Already have an account? <span>Log in</span>';
        popupStatus = 'register';
        return
    }
    if (popupStatus === 'register') {
        for (let item of popupItems) {
            item.classList.toggle('popup-hide');
        }
        header.innerHTML = 'Log in to your account';
        redirect.innerHTML = 'Don\u0027t have an account? <span>Register</span>';
        popupStatus = 'login';
        return 
    }
}
const openPopup = () => {
    popup.classList.add('popup-open');
    document.body.classList.toggle('no-overflow');
    popupBackground.style.display = 'block';
}

const closePopUp = (event) => {
    if (event.target === popupBackground) {
        popup.classList.remove('popup-open');
        document.body.classList.toggle('no-overflow');
        popupBackground.style.display = 'none';
    }
}

openButton.addEventListener('click', openBurger);
closeButton.addEventListener('click', closeBurger);
for (let link of links) {
    link.addEventListener('click', closeBurger);
}

redirect.addEventListener('click', changePopup);
loginButton.addEventListener('click', openPopup);
document.addEventListener('click', closePopUp);


console.log('1. +48 \n2. +15 \n3. +20\nmark: 75/75');