const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');

let randomNum;

const getRundomNum = () => {
    randomNum = Math.floor(Math.random() * (101 - 0 + 1)) + 0;
}

async function getQuote() {
    const url = '../assets/json/quotes.json';
    const res = await fetch(url);
    const data = await res.json();
    
    getRundomNum();
    quote.textContent = `"${data.quotes[randomNum].quote}"`;
    author.textContent = data.quotes[randomNum].author;
}

getQuote();

changeQuoteButton.addEventListener('click', getQuote);