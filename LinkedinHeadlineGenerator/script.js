function displayHeadline() {
    const headlineInput = document.getElementById('headline-input').value;
    const headlineOutput = document.getElementById('headline-output');

    // You can add emojis to specific words or phrases in the headline
     // Define a dictionary of word-to-emoji mappings
     const wordToEmoji = {
        'LinkedIn': 'LinkedIn 👨‍💼',
        'developer': 'developer 👩‍💻',
        'awesome': 'awesome 😎',
        'hello': 'hello 👋',
        'world': 'world 🌎',
        'programming': 'programming 💻',
        'coding': 'coding 🧑‍💻',
        'coffee': 'coffee ☕',
        'inspiration': 'inspiration 💡',
        'happy': 'happy 😃'
    };

    // Replace words with emojis based on the dictionary
    const headlineWithEmojis = headlineInput.replace(/LinkedIn|developer|awesome/g, matched => {
        return wordToEmoji[matched] || matched;
    });

    headlineOutput.textContent = headlineWithEmojis;
}
