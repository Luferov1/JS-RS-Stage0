import blueCardsData from "./data/mythicCards/blue/index.js";
import brownCardsData from "./data/mythicCards/brown/index.js";
import greenCardsData from "./data/mythicCards/green/index.js";

const startGameButton = document.querySelector('.start-button');
const ancientsContainer = document.querySelector('.choose-container');
// const resetButton = document.querySelector('.reset-button');
const diffContainer = document.querySelector('.diff-container');
const gameContainer = document.querySelector('.game-container');
const chosenAncient = document.querySelector('.chosen-ancient');
const stages = document.querySelectorAll('.stage-block');
const activeCard = document.querySelector('.active-card');
const shirtCard = document.querySelector('.shirt-card');
const stageHeaders = document.querySelectorAll('.cards-left h2');

let cardsLeft = {};
let fullCardsDeck = [
    [...greenCardsData],
    [...brownCardsData],
    [...blueCardsData]
];

let playingDeck = [];
let drownOutCards = [];
let amount = [];
let stageOneDeck = [];
let stageTwoDeck = [];
let stageThreeDeck = [];

const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',
      firstStage: {
        greenCards: 1,
        brownCards: 2,
        blueCards: 1,
      },
      secondStage: {
        greenCards: 2,
        brownCards: 3,
        blueCards: 1,
      },
      thirdStage: {
        greenCards: 2,
        brownCards: 4,
        blueCards: 0,
      },
      setAncient: function () {
        chosenAncient.classList.add(`${this.id}`);
        cardsLeft.firstStage = Object.assign({}, this.firstStage);
        cardsLeft.secondStage = Object.assign({}, this.secondStage);
        cardsLeft.thirdStage = Object.assign({}, this.thirdStage);
      }
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',
      firstStage: {
        greenCards: 0,
        brownCards: 2,
        blueCards: 2,
      },
      secondStage: {
        greenCards: 1,
        brownCards: 3,
        blueCards: 0,
      },
      thirdStage: {
        greenCards: 3,
        brownCards: 4,
        blueCards: 0,
      },
      setAncient: function () {
        chosenAncient.classList.add(`${this.id}`);
        cardsLeft.firstStage = Object.assign({}, this.firstStage);
        cardsLeft.secondStage = Object.assign({}, this.secondStage);
        cardsLeft.thirdStage = Object.assign({}, this.thirdStage);
      }
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',
      firstStage: {
        greenCards: 0,
        brownCards: 2,
        blueCards: 1,
      },
      secondStage: {
        greenCards: 2,
        brownCards: 3,
        blueCards: 1,
      },
      thirdStage: {
        greenCards: 3,
        brownCards: 4,
        blueCards: 0,
      },
      setAncient: function () {
        chosenAncient.classList.add(`${this.id}`);
        cardsLeft.firstStage = Object.assign({}, this.firstStage);
        cardsLeft.secondStage = Object.assign({}, this.secondStage);
        cardsLeft.thirdStage = Object.assign({}, this.thirdStage);
      }
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',
      firstStage: {
        greenCards: 1,
        brownCards: 2,
        blueCards: 1,
      },
      secondStage: {
        greenCards: 3,
        brownCards: 2,
        blueCards: 1,
      },
      thirdStage: {
        greenCards: 2,
        brownCards: 4,
        blueCards: 0,
      },
      setAncient: function () {
        chosenAncient.classList.add(`${this.id}`);
        cardsLeft.firstStage = Object.assign({}, this.firstStage);
        cardsLeft.secondStage = Object.assign({}, this.secondStage);
        cardsLeft.thirdStage = Object.assign({}, this.thirdStage);
      }
    },
  ]

const getRandomNum = (max) => {
    return Math.floor(Math.random() * (max + 1));
}

const startGame = () => {
    startGameButton.classList.add('hidden');
    ancientsContainer.classList.remove('hidden');
    // resetButton.classList.remove('hidden');
}

// const resetAll = () => {
//     startGameButton.classList.remove('hidden');
//     ancientsContainer.classList.add('hidden');
//     diffContainer.classList.add('hidden');
//     gameContainer.classList.add('hidden');
//     resetButton.classList.add('hidden');

//     cardsLeft = {};
//     setTimeout( () => {
//         chosenAncient.classList.remove('azathoth');
//         chosenAncient.classList.remove('cthulhu');
//         chosenAncient.classList.remove('iogSothoth');
//         chosenAncient.classList.remove('shubNiggurath');
//     }, 1000)

//     cardsLeft = {};
//     fullCardsDeck = [
//         [...greenCardsData],
//         [...brownCardsData],
//         [...blueCardsData]
//     ];
    
//     playingDeck = [];
//     drownOutCards = [];
//     amount = [];
//     stageOneDeck = [];
//     stageTwoDeck = [];
//     stageThreeDeck = [];

//     activeCard.style.backgroundImage = 'none';
//     shirtCard.classList.remove('shirt-card-ended');
//     shirtCard.innerHTML = '';
// }

const setStageValues = () => {
    const cardsLeftValues = [...Object.values(cardsLeft.firstStage), ...Object.values(cardsLeft.secondStage), ...Object.values(cardsLeft.thirdStage)]
    for (let i = 0; i < stages.length; i += 1) {
        stages[i].innerHTML = cardsLeftValues[i];
    }
}

const chooseAncient = (event) => {
    if (!event.target.classList.contains('ancient')) {
        return
    }

    if (event.target.classList.contains('azathoth')) {
        ancientsData[0].setAncient();
    }

    if (event.target.classList.contains('cthulhu')) {
        ancientsData[1].setAncient();
    }

    if (event.target.classList.contains('iogSothoth')) {
        ancientsData[2].setAncient();
    }

    if (event.target.classList.contains('shubNiggurath')) {
        ancientsData[3].setAncient();
    }

    setStageValues();
    ancientsContainer.classList.add('hidden');
    diffContainer.classList.remove('hidden');
}

const setUltraEasy = () => {
    for (let i = 0; i < fullCardsDeck.length; i += 1)
        playingDeck[i] = fullCardsDeck[i].filter( (item) => {
            return item.difficulty === 'easy';
        })
    const greensLeft = +stages[0].innerHTML + +stages[3].innerHTML + +stages[6].innerHTML - playingDeck[0].length;
    const normalGreensArr = fullCardsDeck[0].filter( item => item.difficulty === 'normal');
    let greenNumbers = [];

    while (greenNumbers.length < greensLeft) {
        greenNumbers.push(getRandomNum(normalGreensArr.length - 1));
        greenNumbers = [...new Set(greenNumbers)];
    }

    for (let i = 0; i < greensLeft; i += 1) {
        playingDeck[2].push(normalGreensArr[greenNumbers[i]]);
    }

    const brownsLeft = +stages[1].innerHTML + +stages[4].innerHTML + +stages[7].innerHTML - playingDeck[1].length;
    const normalBrownsArr = fullCardsDeck[1].filter( item => item.difficulty === 'normal');
    let brownNumbers = [];

    while (brownNumbers.length < brownsLeft) {
        brownNumbers.push(getRandomNum(normalBrownsArr.length - 1));
        brownNumbers = [...new Set(brownNumbers)];
    }

    for (let i = 0; i < brownsLeft; i += 1) {
        playingDeck[1].push(normalBrownsArr[brownNumbers[i]]);
    }
}

const setEasy = () => {
    for (let i = 0; i < fullCardsDeck.length; i += 1)
        playingDeck[i] = fullCardsDeck[i].filter( (item) => {
            return item.difficulty !== 'hard';
        })
}

const setNormal = () => {
    playingDeck = fullCardsDeck;
}

const setHard = () => {
    for (let i = 0; i < fullCardsDeck.length; i += 1)
        playingDeck[i] = fullCardsDeck[i].filter( (item) => {
            return item.difficulty !== 'easy';
        })
}

const setUltraHard = () => {
    for (let i = 0; i < fullCardsDeck.length; i += 1)
        playingDeck[i] = fullCardsDeck[i].filter( (item) => {
            return item.difficulty === 'hard';
        })

    const greensLeft = +stages[0].innerHTML + +stages[3].innerHTML + +stages[6].innerHTML - playingDeck[0].length;
    const normalGreensArr = fullCardsDeck[0].filter( item => item.difficulty === 'normal');
    let greenNumbers = [];

    while (greenNumbers.length < greensLeft) {
        greenNumbers.push(getRandomNum(normalGreensArr.length - 1));
        greenNumbers = [...new Set(greenNumbers)];
    }

    for (let i = 0; i < greensLeft; i += 1) {
        playingDeck[2].push(normalGreensArr[greenNumbers[i]]);
    }

    const brownsLeft = +stages[1].innerHTML + +stages[4].innerHTML + +stages[7].innerHTML - playingDeck[1].length;
    const normalBrownsArr = fullCardsDeck[1].filter( item => item.difficulty === 'normal');
    let brownNumbers = [];

    while (brownNumbers.length < brownsLeft) {
        brownNumbers.push(getRandomNum(normalBrownsArr.length - 1));
        brownNumbers = [...new Set(brownNumbers)];
    }

    for (let i = 0; i < brownsLeft; i += 1) {
        playingDeck[1].push(normalBrownsArr[brownNumbers[i]]);
    }
}

const drawCards = () => {
    amount = [
        +stages[0].innerHTML + +stages[3].innerHTML + +stages[6].innerHTML,
        +stages[1].innerHTML + +stages[4].innerHTML + +stages[7].innerHTML,
        +stages[2].innerHTML + +stages[5].innerHTML + +stages[8].innerHTML
    ]
    
    for (let i = 0; i < 3; i += 1) {
        let numbers = [];

        while (numbers.length < amount[i]) {
            numbers.push(getRandomNum(playingDeck[i].length - 1));
            numbers = [...new Set(numbers)];
        }
        const cardsArr = [];
        for (let j = 0; j < numbers.length; j += 1) {
            cardsArr.push(playingDeck[i][numbers[j]]);
        }
        drownOutCards = [...drownOutCards, cardsArr];
    }
}

const prepareStages = () => {
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < stages[i].innerHTML; j++) {
            stageOneDeck.push(drownOutCards[i][j]);
        }
    }

    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < stages[i + 3].innerHTML; j++) {
            stageTwoDeck.push(drownOutCards[i][j + +stages[i].innerHTML]);
        }
    }

    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < stages[i + 6].innerHTML; j++) {
            stageThreeDeck.push(drownOutCards[i][j + +stages[i+3].innerHTML]);
        }
    }
}

const shuffleDeck = (event) => {
    if (!event.target.classList.contains('diff-button')) {
        return
    }

    if (event.target.id === 'ultra-easy') {
        setUltraEasy();
    }

    if (event.target.id === 'easy') {
        setEasy();
    }

    if (event.target.id === 'normal') {
        setNormal();
    }

    if (event.target.id === 'hard') {
        setHard();
    }

    if (event.target.id === 'ultra-hard') {
        setUltraHard();
    }

    drawCards();
    prepareStages();
    diffContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
}

const playCard = () => {
    if (+stages[0].innerHTML + +stages[1].innerHTML + +stages[2].innerHTML !== 0) {
        activeCard.style.backgroundImage = 'none';
        const number = getRandomNum(stageOneDeck.length - 1);
        const playingCard = stageOneDeck.splice(number, 1)[0];
        activeCard.style.backgroundImage = `url(assets/MythicCards/${playingCard.color}/${playingCard.id}.png)`;
        
        if (playingCard.color === 'green') {
            cardsLeft.firstStage.greenCards--;
        } else if (playingCard.color === 'brown') {
            cardsLeft.firstStage.brownCards--;
        } else {
            cardsLeft.firstStage.blueCards--;
        }
        setStageValues();
    }

    else if (+stages[3].innerHTML + +stages[4].innerHTML + +stages[5].innerHTML !== 0) {
        stageHeaders[0].classList.add('cards-left-ended');
        activeCard.style.backgroundImage = 'none';
        const number = getRandomNum(stageTwoDeck.length - 1);
        const playingCard = stageTwoDeck.splice(number, 1)[0];
        activeCard.style.backgroundImage = `url(assets/MythicCards/${playingCard.color}/${playingCard.id}.png)`;
        
        if (playingCard.color === 'green') {
            cardsLeft.secondStage.greenCards--;
        } else if (playingCard.color === 'brown') {
            cardsLeft.secondStage.brownCards--;
        } else {
            cardsLeft.secondStage.blueCards--;
        }
        setStageValues();
    }

    else if (+stages[6].innerHTML + +stages[7].innerHTML + +stages[8].innerHTML !== 0) {
        stageHeaders[1].classList.add('cards-left-ended');
        activeCard.style.backgroundImage = 'none';
        const number = getRandomNum(stageThreeDeck.length - 1);
        const playingCard = stageThreeDeck.splice(number, 1)[0];
        activeCard.style.backgroundImage = `url(assets/MythicCards/${playingCard.color}/${playingCard.id}.png)`;
        
        if (playingCard.color === 'green') {
            cardsLeft.thirdStage.greenCards--;
        } else if (playingCard.color === 'brown') {
            cardsLeft.thirdStage.brownCards--;
        } else {
            cardsLeft.thirdStage.blueCards--;
        }
        setStageValues();
    }
    
    if (+stages[6].innerHTML + +stages[7].innerHTML + +stages[8].innerHTML === 0) {
        stageHeaders[2].classList.add('cards-left-ended');
        shirtCard.classList.add('shirt-card-ended');
        shirtCard.innerHTML = 'Карт не осталось';
    }
}

startGameButton.addEventListener('click', startGame);
// resetButton.addEventListener('click', resetAll);
ancientsContainer.addEventListener('click', chooseAncient);
diffContainer.addEventListener('click', shuffleDeck);
shirtCard.addEventListener('click', playCard);

console.log('В первоначальной версии существовала кнопка сброса, однако иногда она почему-то крашила клиент (при повторном замешивании карт). Поэтому для удобства проверящих я ее убрал. Чтобы сделать новыый расклад просто обновите страницу');