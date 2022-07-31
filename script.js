const container = document.querySelector('.container');
const showHidePwd = Array.from(document.querySelectorAll('.showHide'));
const allPasswordFields = Array.from(document.querySelectorAll('.password'));
const signUpText = document.querySelector('.signup-link');
const loginText = document.querySelector('.login-link');


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


signUpText.addEventListener('click', () => {
  container.classList.add('active')
})

loginText.addEventListener('click', () => {
  container.classList.remove('active')
})