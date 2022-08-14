import { greetingText } from "./greetings.js";
import { keywordsInput } from "./options.js";

// let randomNumFlickr;
export let maximum;

export const getRundomNumFlickr = (max) => {
    rundomNumFlickr.value =  Math.floor(Math.random() * (max + 1));
}

export let rundomNumFlickr = {
}

export const getLinkToImageUnsplash = async () => {
    try {
        let url;
        if (keywordsInput == false) url = `https://api.unsplash.com/photos/random?query=${greetingText}&client_id=ohgBj7pJawD3svzL4eTKaxIBJj6tDroEaSQvxSE1vSU`;
        else url = `https://api.unsplash.com/photos/random?query=${keywordsInput.value}&client_id=ohgBj7pJawD3svzL4eTKaxIBJj6tDroEaSQvxSE1vSU`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    
        const img = new Image();
        img.src = data.urls.regular;
        img.addEventListener('load', () => {
            document.body.style.background = `url('${data.urls.regular}')`
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
        })
    }
    catch {
        alert(`No ${keywordsInput.value} images found or hourly request limit exceeded`)
    }
}

export const getLinkToImageFlickr = async () => {
    try {
        let url;
        if (keywordsInput.value == false) url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a977c9e1f7f873f5210ba5da696f9db0&tags=${greetingText}&extras=url_l&format=json&nojsoncallback=1`;
        else url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a977c9e1f7f873f5210ba5da696f9db0&tags=${keywordsInput.value}&extras=url_l&format=json&nojsoncallback=1`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        const max = data.photos.photo.length - 1;
        maximum = max;
        if (rundomNumFlickr.value  == null) getRundomNumFlickr(max);
    
        
        const img = new Image();
        const adr = data.photos.photo[rundomNumFlickr.value].url_l
        img.src = adr;
        img.style.width = '100%';
        img.addEventListener('load', () => {
            document.body.style.background = `url('${adr}')`;
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundRepeat = 'no-repeat';
        })
    }
    catch {
        alert(`No ${keywordsInput.value} images found`)
    }
    // return data.photos.photo[getRundomNumFlickr(max)].url_l;
}

const setLocalStorage = () => {
    localStorage.setItem('keywords', keywordsInput.value)
}

const getLocalStorage = () => {
    if (localStorage.getItem('keywords')) keywordsInput.value = localStorage.getItem('keywords');
}


window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);