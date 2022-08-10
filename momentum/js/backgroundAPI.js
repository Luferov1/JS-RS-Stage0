import { greetingText } from "./greetings.js";

let randomNumFlickr;

const getRundomNum = () => {
    randomNumFlickr = Math.floor(Math.random() * (98 - 1 + 1)) + 1;
}


const getLinkToImageUnsplash = async () => {
    const url = `https://api.unsplash.com/photos/random?query=${greetingText}&client_id=ohgBj7pJawD3svzL4eTKaxIBJj6tDroEaSQvxSE1vSU`;
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
}

const getLinkToImageFlickr = async () => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a977c9e1f7f873f5210ba5da696f9db0&tags=${greetingText}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    return data.photos.photo[randomNumFlickr].url_l;
}

getRundomNum();
// getLinkToImageUnsplash();
// getLinkToImageFlickr();