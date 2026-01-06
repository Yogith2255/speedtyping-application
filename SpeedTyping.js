const randomtext = document.getElementById("quoteDisplay");
const timer = document.getElementById("timer");
const result = document.getElementById("result");
const textarea = document.getElementById("quoteInput");

let intervalId;
let counter = 0;

function getQuote() {
    fetch("https://apis.ccbp.in/random-quote")
        .then(response => response.json())
        .then(data => {
            randomtext.textContent = data.content;
            startTimer();
        });
}

function startTimer() {
    clearInterval(intervalId); 
    counter = 0; 
    timer.textContent = counter;

    intervalId = setInterval(() => {
        counter++;
        timer.textContent = counter;
    }, 1000);
}

function submitTest() {
    if (textarea.value.trim() === randomtext.textContent.trim()){
        clearInterval(intervalId);
        result.textContent = "You typed in " + counter + " seconds";
    } else {
        result.textContent = "You typed the wrong text";
    }
}

function resetTest() {
    clearInterval(intervalId);
    textarea.value = "";
    result.textContent = "";
    getQuote();
}

getQuote();