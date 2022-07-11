console.log('1. +10 \n2. +20 \n3. +48\n4. +12 \n5. +20 \nmark: 100/100');

const container = document.getElementById('container');
const openButton = document.getElementById('open');
const menu = document.getElementById('burger-menu');
const closeButton = document.getElementById('close');
const links = document.getElementsByClassName('burger-menu-item');

const open = () => {
    menu.classList.toggle('burger-menu-open');
}

const close = () => {
    menu.classList.toggle('burger-menu-open');
} 

openButton.addEventListener('click', open);
closeButton.addEventListener('click', close);
for (let link of links) {
    link.addEventListener('click', close);
}

console.log('1. +48 \n2. +15 \n3. +20\nmark: 75/75');