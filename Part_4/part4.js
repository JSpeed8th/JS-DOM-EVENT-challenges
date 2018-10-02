var username = document.querySelector('.userName');
var password = document.querySelector('.password')
var submit = document.querySelector('.submit');

submit.addEventListener('click', checkForm)

function checkForm() {
  if (checkPassword() == true && checkUsername() == true) {
    alert('You signed in successfully!')
  } else {
    alert('Please try again')
  }
}

function checkPassword() {
  if (password.value == 1234) {
    return true
  } else {
    console.log('password is incorrect')
  }
}

function checkUsername() {
  var splitUser = username.value.split('')
  for (let i = 0; i < splitUser.length; i++) {
    if (splitUser[i] == 1 || splitUser[i] == 2 || splitUser[i] == 3 || splitUser[i] == 4 || splitUser[i] == 5 || splitUser[i] == 6 || splitUser[i] == 7 || splitUser[i] == 8 || splitUser[i] == 9) {
      return true;
    }
  }
}
