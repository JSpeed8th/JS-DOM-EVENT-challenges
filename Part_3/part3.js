
var text = document.querySelector('h1');

'use strict';

document.addEventListener('keypress', (event) => {
  const keyName = event.key;

  // alert('keypress event\n\n' + 'key: ' + keyName);
  text.innerHTML = '<h1>p</h1>';
});
