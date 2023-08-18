document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote-text');
    const getQuoteButton = document.getElementById('get-quote-button');
  
    const inspirationalQuotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      // Add more quotes here
    ];
  
    getQuoteButton.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
      const quote = inspirationalQuotes[randomIndex];
      quoteElement.textContent = quote;
      chrome.storage.local.set({ lastQuote: quote });
    });
  
    chrome.storage.local.get('lastQuote', (data) => {
      const lastQuote = data.lastQuote;
      if (lastQuote) {
        quoteElement.textContent = lastQuote;
      }
    });
  });
  
  
  
  