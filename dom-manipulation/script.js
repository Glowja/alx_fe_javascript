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
    const createElement = "createElement"
    const appendChild = "appendChild"

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


// Save quotes to local storage
function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    // Update the DOM with the selected quote
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = `"${quote.text}" - Category: ${quote.category}`;

    // Store the last viewed quote in session storage
    sessionStorage.setItem('lastViewedQuote', JSON.stringify(quote));
}

// Function to add a new quote to the array and update the DOM
function addQuote() {
    const quoteTextInput = document.getElementById('newQuoteText');
    const categoryInput = document.getElementById('newQuoteCategory');
    
    const newQuoteText = quoteTextInput.value.trim();
    const newCategory = categoryInput.value.trim();

    if (newQuoteText && newCategory) {
        // Add the new quote to the quotes array
        quotes.push({ text: newQuoteText, category: newCategory });
        
        // Save the updated quotes array to local storage
        saveQuotes();
        
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

// Function to export quotes to a JSON file
function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'quotes.json';
    downloadLink.click();

    URL.revokeObjectURL(url); // Clean up the URL object
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            if (Array.isArray(importedQuotes)) {
                quotes.push(...importedQuotes);
                saveQuotes();
                alert('Quotes imported successfully!');
                showRandomQuote(); // Update display with a random quote
            } else {
                throw new Error('Invalid JSON structure');
            }
        } catch (error) {
            alert('Failed to import quotes: ' + error.message);
        }
    };
    fileReader.readAsText(event.target.files[0]);
}

// Load the last viewed quote from session storage when the page loads
function loadLastViewedQuote() {
    const lastViewedQuote = JSON.parse(sessionStorage.getItem('lastViewedQuote'));
    if (lastViewedQuote) {
        const quoteDisplay = document.getElementById('quoteDisplay');
        quoteDisplay.textContent = `"${lastViewedQuote.text}" - Category: ${lastViewedQuote.category}`;
    } else {
        showRandomQuote(); // Display a random quote if no last viewed quote exists
    }
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Event listener for the export button
document.getElementById('exportQuotes').addEventListener('click', exportToJsonFile);

// Load the last viewed quote or a random one when the page loads
loadLastViewedQuote();
