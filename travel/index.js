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
const submitPopup = document.querySelector('.form-button');
const accountButton = document.querySelector('.account');
const slider = document.querySelector('.destinations-slider');

const openBurger = () => {
    menu.classList.toggle('burger-menu-open');
    popupBackground.style.display = 'block';
    document.body.classList.toggle('no-overflow');
}

const closeBurger = (event) => {
    if (event.target === accountButton) {
        menu.classList.toggle('burger-menu-open');
        document.body.classList.toggle('no-overflow');
    }
    else {
        menu.classList.toggle('burger-menu-open');
        popupBackground.style.display = 'none';
        document.body.classList.toggle('no-overflow');
    }
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
    document.querySelector('#login').value = '';
    document.querySelector('#password').value = '';    
}

const closePopUp = (event) => {
    if (event.target === popupBackground || event.target === submitPopup) {
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
submitPopup.addEventListener('click', () => {
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;
    alert(`login: ${login}\npassword: ${password}`);
})
accountButton.addEventListener('click', openPopup);

slider.addEventListener('click', (event) => {
 
    const pageWidth = container.offsetWidth;

    if (event.target === document.querySelector('.destinations-slider') ) return;
    const target = event.target.closest('.destinations-slider-container');
    const sliderItems = document.querySelectorAll('.destinations-slider-container');
    const sliderItemWidth = target.clientWidth;
    const radios = document.querySelector('.destinations-radio').children;
    let slide = 0;
    let index = 0;
    if (pageWidth > 390) {
        for (let item of sliderItems) {
            item.id = `${index}`;
            index++;
        }

        if (target.id === '3') {
            const replacedItem = document.getElementById('0');
            slider.append(replacedItem);
        }

        if (target.id === '1') {
            const replacedItem = document.getElementById('5');
            slider.prepend(replacedItem);
        }

        console.log(slider.firstElementChild);
        if (slider.firstElementChild.classList.contains('usa')) {
            for (let item of radios) {
                item.classList.remove('destinations-radio-current-on');
                item.classList.add('destinations-radio-current-off');
            }   
                const radioItem = document.querySelector('.radio2');
                radioItem.classList.remove('destinations-radio-current-off');
                radioItem.classList.add('destinations-radio-current-on');
        }

        if (slider.firstElementChild.classList.contains('spain')) {
            for (let item of radios) {
                item.classList.remove('destinations-radio-current-on');
                item.classList.add('destinations-radio-current-off');
            }   
                const radioItem = document.querySelector('.radio3');
                radioItem.classList.remove('destinations-radio-current-off');
                radioItem.classList.add('destinations-radio-current-on');
        }

        if (slider.firstElementChild.classList.contains('japan')) {
            for (let item of radios) {
                item.classList.remove('destinations-radio-current-on');
                item.classList.add('destinations-radio-current-off');
            }   
                const radioItem = document.querySelector('.radio1');
                radioItem.classList.remove('destinations-radio-current-off');
                radioItem.classList.add('destinations-radio-current-on');
        }
    }
   
})





   // console.log(event.target.getBoundingClientRect().height === 800);


    // const sliderWidth = target.closest('.destinations-slider').clientWidth;
    // const padding = (sliderWidth - sliderItemWidth * 5 ) / 4;
    // let item = target.getBoundingClientRect();
    // const itemCoords = {
    //     top: item.top + window.pageYOffset,
    //     right: item.right + window.pageXOffset,
    //     bottom: item.bottom + window.pageYOffset,
    //     left: item.left + window.pageXOffset
    // };
    
    // Math.max(
    //     document.body.scrollWidth, document.documentElement.scrollWidth,
    //     document.body.offsetWidth, document.documentElement.offsetWidth,
    //     document.body.clientWidth, document.documentElement.clientWidth
    //   ) ;
        // const partOfItemOnPage = (pageWidth - padding * 2 - sliderItemWidth) / 2;
console.log('1. +48 \n2. +15 \n3. +20\nmark: 75/75');