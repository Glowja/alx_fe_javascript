// Array to store quote objects
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Do or do not. There is no try.", category: "Motivation" },
    { text: "The journey of a thousand miles begins with one step.", category: "Wisdom" },
    // Add more quotes here...
];

// Function to show a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    console.log(`"${quote.text}" - Category: ${quote.category}`);
}

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const newQuoteText = quoteTextInput.value.trim();
        const newCategory = categoryInput.value.trim();

        if (newQuoteText && newCategory) {
            quotes.push({ text: newQuoteText, category: newCategory });
            console.log('New quote added:', newQuoteText, 'Category:', newCategory);
            form.reset(); // Reset the form after submission
        } else {
            console.error('Both fields are required.');
        }
    });

    // Append form to the body (or any other container)
    document.body.appendChild(form);

// Example usage
showRandomQuote(); // Display a random quote in the console
createAddQuoteForm(); // Create and display the form to add new quotes
