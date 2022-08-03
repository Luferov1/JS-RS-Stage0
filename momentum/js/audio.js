import playList from "./playList.js";

const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.play-prev');
const nextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

let isPlaying = false;
let playNum = 0;

let start;
let finish;
let timePlayed = 0;

const audio = new Audio();

const setAudio = () => {
    audio.src = playList[playNum].src;
    audio.currentTime = timePlayed;

    const playListContainerItems = document.querySelectorAll('.play-item');
    playListContainerItems.forEach( item => item.classList.remove('item-active'));
    playListContainerItems[playNum].classList.add('item-active');

    if (!isPlaying) {
        playAudio();
    } else {
        pauseAudio();
    }

}

const playAudio = () => {
    start = Date.now();
    playButton.classList.add('pause');
    audio.play();
    isPlaying = true;
}

const pauseAudio = () => {
    finish = Date.now();
    playButton.classList.remove('pause');
    timePlayed += (finish - start) / 1000;
    console.log(timePlayed);
    audio.pause();
    isPlaying = false;
}

const createPlayList = () => {
    playList.forEach( (soundTrack) => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.innerHTML = soundTrack.title;
        playListContainer.append(li);
    })
}

const nextAudio = () => {
    playNum === 3 ? playNum = 0 : playNum++;
    timePlayed = 0;
    isPlaying = false;
    setAudio();
}

const prevAudio = () => {
    playNum === 0 ? playNum = 3 : playNum--;
    timePlayed = 0;
    isPlaying = false;
    setAudio();
}

createPlayList();

playButton.addEventListener('click', setAudio);
nextButton.addEventListener('click', nextAudio);
prevButton.addEventListener('click', prevAudio);
audio.addEventListener('ended', nextAudio);

