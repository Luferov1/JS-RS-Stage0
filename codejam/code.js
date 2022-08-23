const startGameButton = document.querySelector('.start-button');
const ancientsContainer = document.querySelector('.choose-container');
const resetButton = document.querySelector('.reset-button');
const diffContainer = document.querySelector('.diff-container');
const gameContainer = document.querySelector('.game-container');

const startGame = () => {
    startGameButton.classList.add('hidden');
    ancientsContainer.classList.remove('hidden');
    resetButton.classList.remove('hidden');
}

const resetAll = () => {
    startGameButton.classList.remove('hidden');
    ancientsContainer.classList.add('hidden');
    diffContainer.classList.add('hidden');
    gameContainer.classList.add('hidden');
    resetButton.classList.add('hidden');
}

const chooseAncient = (event) => {
    if (!event.target.classList.contains('ancient')) {
        return
    }
    ancientsContainer.classList.add('hidden');
    diffContainer.classList.remove('hidden');
}

const shuffleDeck = (event) => {
    if (!event.target.classList.contains('diff-button')) {
        return
    }
    diffContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

startGameButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetAll);
ancientsContainer.addEventListener('click', chooseAncient);
diffContainer.addEventListener('click', shuffleDeck)