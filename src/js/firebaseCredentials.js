/* eslint-disable no-undef */
const firebaseConfig = {
  apiKey: "AIzaSyAKW0W_cu5qIAbz7VcMcuGgyAjw4iF3PAo",
  authDomain: "rs-cdmx-008.firebaseapp.com",
  databaseURL: "https://rs-cdmx-008.firebaseio.com",
  projectId: "rs-cdmx-008",
  storageBucket: "",
  messagingSenderId: "825933006118",
  appId: "1:825933006118:web:0bed8fd369a65220"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
  console.log(user);
} else {
  console.log(user);
  // No user is signed in.
}

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
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


