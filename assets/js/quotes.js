// assets/js/quotes.js
const quotes = [
    {
        text: "Education is the key to empowerment and progress.",
        author: "Pratibha Patil"
    },
    {
        text: "A nation's progress depends on how it treats its women.",
        author: "Pratibha Patil"
    },
    {
        text: "Service to humanity is service to God.",
        author: "Pratibha Patil"
    },
    {
        text: "The true measure of a society is how it cares for its vulnerable.",
        author: "Pratibha Patil"
    },
    {
        text: "Leadership is not about power, but about responsibility.",
        author: "Pratibha Patil"
    },
    {
        text: "Every girl child deserves the right to dream and achieve.",
        author: "Pratibha Patil"
    },
    {
        text: "Democracy thrives when every voice is heard.",
        author: "Pratibha Patil"
    },
    {
        text: "Peace and progress go hand in hand.",
        author: "Pratibha Patil"
    },
    {
        text: "The Constitution is not just a document, it's a commitment.",
        author: "Pratibha Patil"
    },
    {
        text: "We must build bridges, not walls.",
        author: "Pratibha Patil"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const quoteContainer = document.getElementById('random-quote');
    const authorContainer = document.getElementById('quote-author');
    
    if (quoteContainer && authorContainer) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        
        quoteContainer.textContent = randomQuote.text;
        authorContainer.textContent = `- ${randomQuote.author}`;
    }
});