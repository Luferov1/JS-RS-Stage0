const startGameButton = document.querySelector('.start-button');
const ancientsContainer = document.querySelector('.choose-container');
const resetButton = document.querySelector('.reset-button');

const startGame = () => {
    startGameButton.classList.add('hidden');
    ancientsContainer.classList.remove('hidden');
    resetButton.classList.remove('hidden');
}

const resetAll = () => {
    startGameButton.classList.remove('hidden');
    ancientsContainer.classList.add('hidden');
    resetButton.classList.add('hidden');
}

const chooseAncient = (event) => {
    if (!event.target.classList.contains('ancient')) {
        return
    }
    
}

startGameButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetAll);
ancientsContainer.addEventListener('click', chooseAncient)