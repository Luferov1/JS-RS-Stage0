import { greetingText } from "./greetings.js";

// let randomNumFlickr;
export let maximum;

export const getRundomNumFlickr = (max) => {
    rundomNumFlickr.value =  Math.floor(Math.random() * (max + 1));
}

export let rundomNumFlickr = {
}



export const getLinkToImageUnsplash = async () => {
    const url = `https://api.unsplash.com/photos/random?query=${greetingText}&client_id=ohgBj7pJawD3svzL4eTKaxIBJj6tDroEaSQvxSE1vSU`;
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
    // return data.urls.regular;
    // console.log(data.urls.regular)
}

export const getLinkToImageFlickr = async () => {
    
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a977c9e1f7f873f5210ba5da696f9db0&tags=${greetingText}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    const max = data.photos.photo.length - 1;
    maximum = max;
    if (rundomNumFlickr.value  == null) getRundomNumFlickr(max);

    
    const img = new Image();
    const adr = data.photos.photo[rundomNumFlickr.value].url_l
    img.src = adr;
    img.addEventListener('load', () => {
        document.body.style.background = `url('${adr}')`;
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    })
    // return data.photos.photo[getRundomNumFlickr(max)].url_l;
}


// getLinkToImageUnsplash();
// getLinkToImageFlickr();