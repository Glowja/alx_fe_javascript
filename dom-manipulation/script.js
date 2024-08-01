// Array to store quote objects
let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Do or do not. There is no try.", category: "Motivation" },
    { text: "The journey of a thousand miles begins with one step.", category: "Wisdom" },
    // Add more quotes as needed...
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    // Update the DOM with the selected quote
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = `"${quote.text}" - Category: ${quote.category}`;
}

// Function to add a new quote to the array and update the DOM
function addQuote() {
    "createAddQuoteForm"
    const quoteTextInput = document.getElementById('newQuoteText');
    const categoryInput = document.getElementById('newQuoteCategory');
    
    const newQuoteText = quoteTextInput.value.trim();
    const newCategory = categoryInput.value.trim();

    if (newQuoteText && newCategory) {
        // Add the new quote to the quotes array
        quotes.push({ text: newQuoteText, category: newCategory });
        
        // Clear input fields
        quoteTextInput.value = '';
        categoryInput.value = '';
        
        // Show the newly added quote
        const quoteDisplay = document.getElementById('quoteDisplay');
        quoteDisplay.textContent = `"${newQuoteText}" - Category: ${newCategory}`;
    } else {
        alert('Please enter both a quote and a category.');
    }
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Display a random quote when the page loads
showRandomQuote().innerHTML=""
