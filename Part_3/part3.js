// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".

var displayText = document.querySelector('h1');

document.addEventListener('keypress', function () {
  displayText.innerHTML = event.key;
})
