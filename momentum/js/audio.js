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
const durationNow = document.querySelector('.duration-now');
const volumeToddler = document.querySelector('.volume-toddler');

const durationProgressBar = document.querySelector('.progress-bar-container');
const durationProgress = document.querySelector('.progress-bar');
const durationToddler = document.querySelector('.progress-bar-toddler');

// volumeProgressBar.style.width = '50%';


let isPlaying = false;
let playNum = 0;
let hasVolume = true;

let start;
let finish;
let timePlayed = 0;
let containerWidth;

let progressBarWidth

let secs;
let mins;
let timeOut;
let time = 0;
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
    setDurationNow();
}

const pauseAudio = () => {
    finish = Date.now();
    playButton.classList.remove('pause');
    timePlayed += (finish - start) / 1000;
    audio.pause();
    isPlaying = false;
    clearTimeout(timeOut);
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
    time = 0;
    clearTimeout(timeOut);
    setAudio();
}

const prevAudio = () => {
    playNum === 0 ? playNum = 3 : playNum--;
    timePlayed = 0;
    isPlaying = false;
    time = 0;
    clearTimeout(timeOut);
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
    if (event.target.classList.contains('volume-toddler')) return;
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

const setDurationNow = () => {

    time = audio.currentTime;
    mins = Math.floor(time / 60);
    secs = Math.floor(time - mins * 60);
    mins = String(mins);
    secs = String(secs);
    mins.length < 2 ? mins = mins.padStart(2, '0') : null;
    secs.length < 2 ? secs = secs.padStart(2, '0') : null;
    durationNow.textContent = `${mins}:${secs}`;
    moveProgressBar();
    timeOut = setTimeout(setDurationNow, 1000);
}

const moveProgressBar = () => {
    const arr = audioDuration.textContent.split(':');
    const progresBarProgress = arr[0] * 60 + +arr[1];
    durationProgress.style.width = `${audio.currentTime / progresBarProgress * 100}%`;
    durationToddler.style.left = `${audio.currentTime / progresBarProgress * 100}%`;
}

const setProgressBar = (event) => {
    if (event.target.classList.contains('progress-bar-toddler')) return;
    progressBarWidth = durationProgressBar.offsetWidth;
    const clickWidth = event.offsetX;
    const arr = audioDuration.textContent.split(':');
    const progresBarProgress = arr[0] * 60 + +arr[1];
    timePlayed = clickWidth / progressBarWidth * progresBarProgress;
    audio.currentTime = timePlayed;
    moveProgressBar();
}

createPlayList();


playButton.addEventListener('click', setAudio);
nextButton.addEventListener('click', nextAudio);
prevButton.addEventListener('click', prevAudio);
audio.addEventListener('ended', nextAudio);
volumeButton.addEventListener('click', setVolumeOnOff);
volumeProgressBar.addEventListener('click', setVolume);
durationProgressBar.addEventListener('click', setProgressBar);

