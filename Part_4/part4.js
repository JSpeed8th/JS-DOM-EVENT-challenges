var userName = document.querySelector('.userName')
var password = document.querySelector('.password')
var submit = document.querySelector('.submit')


function passwordResult(password) {
  if (password !== 12345678) {
    return false
  } else {
    return true
  }
}

function splitUsername(userName) {
  var splitUser = userName.split('')
  userNameResult(splitUser)
}

function userNameResult(userName) {
  var number = []
  for (let i = 0; i < userName.length; i++) {
    for (let x = 1; x < 10; x++) {
      if (userName[i] == x) {
        number.push(userName[i])
      }
    }
  }
  console.log(number)
  checkUsername(number)
}

function checkUsername(userName) {
  if (userName !== []) {
    true
  } else {
    false
  }
}

function checkInput(password, userName) {
  if (passwordResult(password) && splitUsername(userName)) {
    alert('true');
  } else {
    alert('Incorrect')
  }
}

submit.addEventListener('click', checkInput)
