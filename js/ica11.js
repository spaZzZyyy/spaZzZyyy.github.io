const btn = document.querySelector("#js-new-quote");

btn.addEventListener("click", () => getQuote());

function getQuote() {
    fetch(APIendPoint, {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: JSON.stringify,
        Cache: 'default'
      })
    .then(res => {
        if (res.ok) {
            console.log(res)
        } else {
            console.log("ERROR")
            alert("ERROR")
        }
    }) 
    .then(data => {
        displayQuote(data)
    })  
}

const APIendPoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
const quoteText = document.querySelector("#js-quote-text");

function displayQuote(quote) {
    quoteText.textContent = quote;
}