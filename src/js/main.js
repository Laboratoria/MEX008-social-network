document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(elems);
});

const loginSection = document.getElementById('login-section');
const videoSection = document.getElementById('video-section');
const loginText = document.getElementById('login-text');
const buttonCancel = document.getElementById('button-cancel');

loginText.addEventListener('click', () => {
  loginSection.classList.remove('esconder');
  videoSection.classList.add('esconder');
});


buttonCancel.addEventListener('click', () => {
  loginSection.classList.add('esconder');
  videoSection.classList.remove('esconder');
});

