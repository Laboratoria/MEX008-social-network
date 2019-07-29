document.addEventListener('DOMContentLoaded', function () {
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


var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'wall.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'https://github.com/Jonhks/MEX008-social-network/blob/master/README.md',
  // Privacy policy url.
  privacyPolicyUrl: 'https://github.com/Jonhks/MEX008-social-network/blob/master/README.md'
};
ui.start('#firebaseui-auth-container', uiConfig);


// Initialize the FirebaseUI Widget using Firebase.

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

