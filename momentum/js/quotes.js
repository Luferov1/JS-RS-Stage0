import { language } from "./translation.js";
import { submitButton } from "./options.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');

let randomNum;

const getRundomNum = () => {
    randomNum = Math.floor(Math.random() * (101 - 0 + 1)) + 0;
}

async function getQuote() {
    if (language.value === 'en') {
        const url = 'https://rolling-scopes-school.github.io/luferov1-JSFEPRESCHOOL2022Q2/momentum/assets/json/quotes.json';
        const res = await fetch(url);
        const data = await res.json();
        
        getRundomNum();
        quote.textContent = `"${data.quotes[randomNum].quote}"`;
        author.textContent = data.quotes[randomNum].author;
    }

    if (language.value === 'ru') {
        const url = 'https://rolling-scopes-school.github.io/luferov1-JSFEPRESCHOOL2022Q2/momentum/assets/json/quotesRu.json';
        const res = await fetch(url);
        const data = await res.json();
        
        getRundomNum();
        quote.textContent = `"${data.quotes[randomNum].quote}"`;
        author.textContent = data.quotes[randomNum].author;
    }
}

changeQuoteButton.addEventListener('click', getQuote);
submitButton.addEventListener('click', getQuote);
window.addEventListener('load', getQuote);
