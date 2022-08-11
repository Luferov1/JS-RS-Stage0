const popup = document.querySelector('.settings-popup');
const optionsButton = document.querySelector('.settings-container');
const popupBackground = document.querySelector('.background');

const openPopup = () => {
    popup.style.transform = 'translateY(110%)';
    popupBackground.classList.add('background-active');
}

const closePopup = () => {
    popup.style.transform = 'translateY(0%)';
    popupBackground.classList.remove('background-active');
}

// openPopup();
// closePopup();
