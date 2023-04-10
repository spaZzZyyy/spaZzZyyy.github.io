const btn = document.querySelector("#js-new-quote");
const quoteText = document.querySelector("#js-quote-text");
const soundBtn = document.querySelector("#js-sound")

getQuote();
btn.addEventListener("click", () => getQuote());
soundBtn.addEventListener("click", () => readQuote());

function getQuote() {
    fetch("https://quotable.io/random")
    .then(res => res.json())
    .then(result =>{
        console.log(result)
        displayQuote(result.content);
    });
}

function displayQuote(quote) {
    quoteText.textContent = quote;
}

function readQuote() {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.textContent}`);
    speechSynthesis.speak(utterance);
}