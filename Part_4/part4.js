// Create an HTML page with a form. The form should include inputs for a username, email, and password as well as a submit button.
// In a Javascript file, write code that does the following things:
// checks that the password is 12345678
// checks that the username contains at least one number
// if anything is wrong, send an alert message saying "incorrect"
// Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.

var username = document.querySelector('.userName');
var password = document.querySelector('.password');
var submit = document.querySelector('.submit');
var textBox = document.querySelector('h1');

submit.addEventListener('click', checkForm)

function checkForm() {
  if (checkUsername() && checkPassword()) {
    alert('You signed in successfully!')
    textBox.textContent = 'Génial!'
  } else {
    alert('Please try again')
    textBox.textContent = 'Désolé!'
  }
}

function checkPassword() {
  if (password.value == 12345678) {
    console.log('password is correct')
    return true
  }
};

function checkUsername() {
  var splitUser = username.value.split('')
  for (let i = 0; i < splitUser.length; i++) {
    if (splitUser[i] == 1 || splitUser[i] == 2 || splitUser[i] == 3 || splitUser[i] == 4 || splitUser[i] == 5 || splitUser[i] == 6 || splitUser[i] == 7 || splitUser[i] == 8 || splitUser[i] == 9) {
      console.log('username is correct')
      return true;
    }
  }
};
