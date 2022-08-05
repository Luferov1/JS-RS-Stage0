import playList from "./playList.js";

const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.play-prev');
const nextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const soundtrackInfo = document.querySelector('.soundtrack-info');
const volumeButton = document.querySelector('.volume-container').firstElementChild;
const volumeProgressBar = document.querySelector('.volume-progress-bar-container');
const volumeProgress = document.querySelector('.volume-progress-bar');
const audioDuration = document.querySelector('.full-duration');
const volumeToddler = document.querySelector('.volume-toddler');

// volumeProgressBar.style.width = '50%';


let isPlaying = false;
let playNum = 0;
let hasVolume = true;

let start;
let finish;
let timePlayed = 0;
let containerWidth;

let volume = 0.5;

const audio = new Audio();
audio.volume = volume;

const setAudio = () => {
    audio.src = playList[playNum].src;
    audio.currentTime = timePlayed;
    soundtrackInfo.textContent = playList[playNum].title;
    audioDuration.textContent = playList[playNum].duration;

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

const setVolumeOnOff = () => {
    if (hasVolume) {
        hasVolume = false;
        volumeOff();
    } else {
        hasVolume = true;
        volumeOn();
    }
}

const volumeOn = () => {
    audio.volume = volume;
    volumeButton.classList.remove('volume-off');
    volumeButton.classList.add('volume-on');
    volumeProgress.style.width = `${volume * 100}%`;
    volumeToddler.style.left = `${(volume - 5 / containerWidth) * 100}%`
}

const volumeOff = () => {
    audio.volume = volume * 0;
    volumeButton.classList.remove('volume-on');
    volumeButton.classList.add('volume-off');
    volumeProgress.style.width = '0%';
    volumeToddler.style.left = '0%';
}

const setVolume = (event) => {
    // const target = event.target;
    containerWidth = volumeProgressBar.offsetWidth;
    const clickWidth = event.offsetX;
    volume = clickWidth / containerWidth;
    if (volume < 0.1) {
        volumeOff();
    } else if (volume > 0.9) {
        volumeOn();
        volumeProgress.style.width = '100%';
        volumeToddler.style.left = `${100 - (5 / containerWidth * 100)}%`;
    } else {
        volumeOn();
    }
}

createPlayList();

playButton.addEventListener('click', setAudio);
nextButton.addEventListener('click', nextAudio);
prevButton.addEventListener('click', prevAudio);
audio.addEventListener('ended', nextAudio);
volumeButton.addEventListener('click', setVolumeOnOff);
volumeProgressBar.addEventListener('click', setVolume);

