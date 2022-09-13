const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#c4');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

// const togglePswd = document.querySelector('#togglePswd');
// const password1 = document.querySelector('#c5');

// togglePswd.addEventListener('click', function () {
//   // toggle the type attribute
//   const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
//   password1.setAttribute('type', type);
//   // toggle the eye slash icon
//   this.classList.toggle('fa-eye-slash');
// });