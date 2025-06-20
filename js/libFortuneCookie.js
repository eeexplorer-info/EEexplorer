// Build a Random Quote Generator using JavaScript
// https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript
// 20 Jun 2025

const generateQuote = function() {
    const quotes = [
    {quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.", author: "Albus Dumbledore"},
    {quote: "It is impossible to manufacture or imitate love.", author: "Horace Slughorn"},
    {quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.", author: "Luna Lovegood"},
    {quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "Sirius Black"},
    {quote: "Never trust anything that can think for itself if you can't see where it keeps its brain.", author: "Arthur Weasley"},
    {quote: "Every human life is worth the same, and worth saving.", author: "Kingsley Shacklebolt"},
    {quote: "Have a biscuit, Potter.", author: "Minerva McGonagall"},
    {quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", author: "Albus Dumbledore"},
    {quote: "Socks are Dobby's favorite, favorite clothes, sir!", author: "Dobby"},

    {quote: "Happiness is not something ready made. It comes from your own actions.", author:"Dalai Lama"}
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    // document.getElementById("quotes").innerHTML = "&quot " + quotes[arrayIndex].quote + " &quot";
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = "-- " + quotes[arrayIndex].author + " -- ";

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}


// =-=-=-=
// Rob Smith
// 11 Feb 2024

// Call up
//internal = <head> <script> javascript ; </script> </head>
//external = <script src="myScript.js"></script>

// Generate Random Number between 1 and 100
// Call up inside the HTML <script></script> tags
// function random(){
//     document.getElementById("one").innerHTML = Math.floor(Math.random() * 100)+1;
//     }


// Random Quote Generator
// https://codepen.io/kkoutoup/pen/zxmGLE
// Found: 240707
// Inspector found $(option) = unknown
// 240708
// Read: https://forum.freecodecamp.org/t/i-cant-trigger-anything-within-document-ready/191092
// Read: https://stackoverflow.com/questions/6341191/document-readyfunction-is-not-working
// maybe too: https://www.codeproject.com/Questions/1035444/javascript-document-ready-not-running


// =-=-=-=
/* Fortune Cookie generator */
/* Rob Smith */
/* 20 Jun 2025 */

// JavaScript code Example Random Quote Generator
// https://www.linkedin.com/pulse/javascript-code-example-random-quote-generator-javascript-code/
// it works
// const generateButton = document.getElementById("generateButton");
// const quoteElement = document.getElementById("quote");

// generateButton.addEventListener("click", generateRandomQuote);

// function generateRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     quoteElement.textContent = quotes[randomIndex];
// }

// const quotes = [
//     "The only way to do great work is to love what you do. -- Steve Jobs",
//     "Innovation distinguishes between a leader and a follower. -- Steve Jobs",
//     "Don't be afraid to give up the good to go for the great. -- John D. Rockefeller",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts. -- Winston Churchill",
//     "The future belongs to those who believe in the beauty of their dreams. -- Eleanor Roosevelt",
//     "Education is not the learning of facts but the training of the mind to think. -- Albert Einstein"
// ];