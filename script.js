let button = document.getElementById('toggleSizeButton');
let text = document.getElementById('text');
let isIncreased = false;  // Track whether the text size is increased

button.addEventListener('click', function() {
    if (isIncreased) {
        // Return to normal size
        text.style.fontSize = '16px';
    } else {
        // Increase text size
        text.style.fontSize = '24px';
    }

    // Toggle the state
    isIncreased = !isIncreased;
});