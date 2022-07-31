const container = document.querySelector('.container');
const showHidePwd = Array.from(document.querySelectorAll('.showHide'));
const allPasswordFields = Array.from(document.querySelectorAll('.password'));
const signUpText = document.querySelector('.signup-link');
const loginText = document.querySelector('.login-link');
const form = document.querySelector('.signUp');
const userInput = document.querySelector('#user-input');
const emailInput = document.querySelector('#email-input');
const passInput = document.querySelector('#pass-input');
const confirmInput = document.querySelector('#confirm-input');


// toggling the password on and off and changing the icon
showHidePwd.forEach(ele => {
  ele.addEventListener('click', () => {
    allPasswordFields.forEach(field => {
      if(field.type === 'password') {
        field.type = 'text'

        showHidePwd.forEach(item => {
          item.classList.replace('uil-eye-slash', 'uil-eye')
        })
      }else {
        field.type = 'password'
        showHidePwd.forEach(item => {
          item.classList.replace('uil-eye', 'uil-eye-slash')
        })
      }
    })
  })
})


// adding active class to change the form from a login one to a register one and vice versa
signUpText.addEventListener('click', () => {
  container.classList.add('active')
})

loginText.addEventListener('click', () => {
  container.classList.remove('active')
})


// for form validation on submit
form.addEventListener('submit', e => {
  e.preventDefault();

  checkInput();
})


// checking if input is not empty before submission.
function checkInput() {
  const userValue = userInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passValue = passInput.value.trim();
  const confirmValue = confirmInput.value.trim();

  if(userValue === '') {
    setErrorFor(userInput, 'Name cannot be blank')
  }else {
    setSuccessFor(userInput)
  }

  if(emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank')
  }else if(!isEmail(emailValue)) {
    setErrorFor(emailInput, 'Email is not valid');
  }else {
    setSuccessFor(emailInput)
  }

  if(passValue === '') {
    setErrorFor(passInput, 'Password cannot be blank')
  }else if(passValue.length < 8) {
    setErrorFor(passInput, 'Password must be at least 8 characters long.')
  }else if(passValue !== confirmValue) {
    setErrorFor(passInput, 'Password don\' match.')
  }else {
    setSuccessFor(passInput)
  }

  if(confirmValue === '') {
    setErrorFor(confirmInput, 'Password cannot be blank')
  }else if(passValue !== confirmValue) {
    setErrorFor(confirmInput, 'Password don\' match.')
  }else {
    setSuccessFor(confirmInput)
  }
}


// setting error
function setErrorFor(input, msg) {
  const formControl = input.parentElement;
  const smalltag = formControl.querySelector('small');

  smalltag.innerText = msg;

  formControl.classList.add('error')
}

// setting the success
function setSuccessFor(input) {
  const formControl = input.parentElement;
  const smalltag = formControl.querySelector('small');

  formControl.classList.replace("error", 'success')
}

// email validation
function isEmail(email) {
  const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regEx.test(email);
}