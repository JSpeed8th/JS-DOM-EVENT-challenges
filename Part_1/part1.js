var text = document.querySelector('p')
var buttonOne = document.querySelector('#button1')
var buttonTwo = document.querySelector('#button2')

function responseOne() {
  text.textContent = "I'm right!"
}

function responseTwo() {
  text.textContent = "No, I'm right!"
}

buttonOne.addEventListener('click', responseOne)
buttonTwo.addEventListener('click', responseTwo)
