// Build a Random Quote Generator using JavaScript
// https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript
// 20 Jun 2025

const generateQuote = function() {
    const quotes = [
        {quote: "A book is not just a collection of pages; it's a passport to other worlds, a time machine, and a lifelong companion.", author: "Anonymous"},
        {quote: "A clown on a thrown is still a clown... a king in rags is still a king...", author: "Anonymous"},
        {quote: "A toxic environment is more likely to change you than you change it. Get out of it.", author: "Anonymous"},
        {quote: "A wise person once told me, let people do what they wanna do, so you see what they would rather do. That will answer all the questions you have.", author: "Anonymous"},
        {quote: "A world afraid of questions is a world afraid of progress.", author: "Anonymous"},
        {quote: "Anyone can make the simple complicated. Creativity is making the complicated simple.", author: "Anonymous"},
        {quote: "Climb mountains not so the world can see you, but so you can see the world.", author: "Anonymous"},
        {quote: "Deep conversations with the right people are priceless.", author: "Anonymous"},
        {quote: "Discipline is doing what needs to be done, even if you don't want to do it.", author: "Anonymous"},
        {quote: "Don't be afraid to be yourself, the right people will appreciate your authenticity.", author: "Anonymous"},
        {quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Anonymous"},
        {quote: "Don't practice until you get it right. Practice until you can't get it wrong.", author: "Anonymous"},
        {quote: "Everyone is a testing environment. Some people are lucky enough to have a totally separate environment to run in.", author: "Anonymous"},
        {quote: "Excuses make today easy but make tomorrow hard. Discipline makes today hard but it makes tomorrrow easy", author: "Anonymous"},
        {quote: "If you get tired, learn to rest, don't quit.", author: "Anonymous"},
        {quote: "Life is not qualified by fluent English, branded clothes or a rich lifestyle. It is measured by the number of faces who smile when they hear your name.", author: "Anonymous"},
        {quote: "Life is understood looking backwards but it must be lived looking forward.", author: "Anonymous"},
        {quote: "Look back and be grateful. Look forward and be hopeful. Look around and be helpful.", author: "Anonymous"},
        {quote: "Look back. Move forward.", author: "Anonymous"},
        {quote: "Teaching is not just about passing on skills; it's about nurturing confidence, discipline, and a love for learning—no matter how small the student.", author: "Anonymous"},
        {quote: "The best teachers are those who show you where to look, but don't tell you what to see.", author: "Anonymous"},
        {quote: "Time and good friends are two things that become more valuable the older you get.", author: "Anonymous"},
        {quote: "Two things define you, your patience when you have nothing, your attitude when you have everything.", author: "Anonymous"},
        {quote: "What the elders see, others can't see while standing on their toes.", author: "Anonymous"},
        {quote: "When you read a line that is so well-written, you just close the book and stare at the wall for a minute.", author: "Anonymous"},
        {quote: "When you want to give up, remember why you started.", author: "Anonymous"},
        {quote: "Wise men learn from fools than fools from the wise.", author: "Anonymous"},
        {quote: "You can't control the direction of the wind, but you can adjust your sails.", author: "Anonymous"},
        {quote: "Just learn how to get stuff done.", author: "Barack Obama"},
        {quote: "Power lies not in what you say, but what you do.", author: "Barack Obama"},
        {quote: "Beware of little expenses; a small leak will sink a great ship.", author: "Benjamin Franklin"},
        {quote: "By failing to prepare, you are preparing to fail.", author: "Benjamin Franklin"},
        {quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin"},
        {quote: "Remember not only to say the right thing in the right place, but far more difficult still, to leave unsaid the wrong thing at the tempting moment.", author: "Benjamin Franklin"},
        {quote: "Some people die at 25 and aren't buried until 75.", author: "Benjamin Franklin"},
        {quote: "Progress is impossible without change; and those who cannot change their minds cannot change anything.", author: "Bernard Shaw"},
        {quote: "Knowledge isn't power until it's applied.", author: "Dale Carnegie"},
        {quote: "It takes a wise man to discover a wise man.", author: "Diogenes"},
        {quote: "Trust yourself and your instincts. Sometimes you are your best teacher.", author: "Donnie Yen"},
        {quote: "People carry their own downfall through their own tongues.", author: "Egyptian Proverb"},
        {quote: "The man that helps others will be helped by others in his time of need.", author: "Egyptian Proverb"},
        {quote: "He who has peace of mind disturbs neither himself nor another.", author: "Epicurius"},
        {quote: "At the end of the game, the king and the pawn go back in the same box.", author: "Italian Proverb"},
        {quote: "Of what does not concern you, say nothing good or bad.", author: "Italian Proverb"},
        {quote: "Life is not always a matter of holding goods cards, but sometimes, playing a poor hand well.", author: "Jack London"},
        {quote: "A truth can be walked naked, but a lie always needs to be dressed.", author: "Khalil Gibran"},
        {quote: "Never build, but always plant: in the case of the first, nature will destroy the creation of your work, but in the case of the second, nature will help you, causing growth in everything you planted.", author: "Leo Tolstoy"},
        {quote: "In nature there is no effect without cause; once the cause is understood there is no need to test it by experience.", author: "Leonard da Vinci"},
        {quote: "Learn how to see. Realize that everything connects to everything else.", author: "Leonard da Vinci"},
        {quote: "Learning never exhausts the mind.", author: "Leonard da Vinci"},
        {quote: "Nothing strengthens authority so much as silence.", author: "Leonard da Vinci"},
        {quote: "Success lies in relentless execution of the basics.", author: "Leonard da Vinci"},
        {quote: "Time stays long enough for anyone who will use it.", author: "Leonard da Vinci"},
        {quote: "Balance is Good, Karate Good. Everything Good. Balance Bad, Better Packup. Go Home. Balance is Key.", author: "Mr. Miyagi"},
        {quote: "A temper is a good thing to have provided one does not try to give it to someone else.", author: "Napoleon Hill"},
        {quote: "A truly big man never tries to impress others with his bigness and never tries to keep up with the Joneses.", author: "Napoleon Hill"},
        {quote: "Discipline comes through self control. This means that you must control all negative qualities. Before you can control conditions, you must first control yourself. Self-mastery is the hardest job you will ever tackle. If you do not conquer self, you will be conquered by self.", author: "Napoleon Hill"},
        {quote: "Good credit is a great asset provided it is not overused.", author: "Napoleon Hill"},
        {quote: "If you must speak ill of another, do not speak it - write it in the sand near the water's edge.", author: "Napoleon Hill"},
        {quote: "No man ever becomes so successful that he doesn't appreciate a kindly word of commendation for work well done.", author: "Napoleon Hill"},
        {quote: "Self-praise is a credit only when it consists of deeds helpful to others and not of mere words.", author: "Napoleon Hill"},
        {quote: "The man who listens more than he talks generally knows more than the man who talks more than he listens.", author: "Napoleon Hill"},
        {quote: "The moment anyone accepts favors, he is in debt to the one granting them. Sooner or later the debt must be paid.", author: "Napoleon Hill"},
        {quote: "You can always tell a man who thinks he is smarter than others, but you can't tell him much.", author: "Napoleon Hill"},
        {quote: "The universities do not teach all things ... so a doctor must seek out old wives, gypsies, sorcerers, wandering tribes, old robbers, and such outlaws and take lessons from them. A doctor must be a traveller . . . Knowledge is experience.", author: "Paracelsus"},
        {quote: "We should not speak so that it is possible for the audience to understand us, but so that it is impossible for them to misunderstand us.", author: "Quintilian"},
        {quote: "The reading of all good books is like a conversation with the finest minds of past centuries.", author: "Rene Descartes"},
        {quote: "To know what people really think, pay attention to what they do, rather than what they say.", author: "Rene Descartes"},
        {quote: "Learn, unlearn, relearn: Growth is a journey, embrace change, step beyond your comfort zone, evolve your understanding.", author: "ShuriDojo"},
        {quote: "Quiet people have the loudest mind.", author: "Stephen Hawking"},
        {quote: "Do what you can, with what you have, where you are.", author: "Theodore Rosevelt"},
        {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", author: "Thomas A. Edison"},
        {quote: "We have two ears and one mouth so that we can listen twice as much as we can speak.", author: "Zeno"}
    
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