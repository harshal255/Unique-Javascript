const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

const toasts = document.getElementById("toasts");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
    createNotification();
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);

// Predefined arrays for toast messages and types
const toastArray = ['Quote Copied!', 'Quote Copied!', 'Quote Copied!', 'Quote Copied!', 'Quote Copied!'];
const types = ['success'];

// Function to create and display toast notifications
function createNotification(message = null, type = null) {
    // Create a new div element for the toast notification
    const notIf = document.createElement('div');
    notIf.classList.add('toast'); // Add the 'toast' class for styling
    notIf.classList.add(type ? type : getRandomTypes()); // Add a type class (random if not provided)

    // Set the text content of the toast (random message if not provided)
    notIf.innerText = message ? message : getRandomMessage();
    toasts.appendChild(notIf); // Append the toast to the toast container

    // Remove the toast after 3 seconds
    setTimeout(() => {
        notIf.remove();
    }, 3000);
}

// Function to get a random message from the predefined array
function getRandomMessage() {
    return toastArray[Math.floor(Math.random() * toastArray.length)];
}

// Function to get a random type from the predefined types array
function getRandomTypes() {
    return types[Math.floor(Math.random() * types.length)];
}
