var text = document.querySelector('.text');

function hoverAction() {
  text.style.backgroundColor = 'red'
  alert('Hey, I told you not to hover over me!')
};

text.addEventListener('mouseover', hoverAction);
