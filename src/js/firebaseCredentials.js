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



firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    if (location.pathname == "/MEX008-social-network/src/views/login" || location.pathname == "/src/views/login") {
      console.log(user);
      // location.assign('wall.html');
    }
    // User is signed in.
  } else {
    if (location.pathname == "/MEX008-social-network/src/views/wall" || location.pathname == "/src/views/wall") {
      // location.replace('login.html');
      console.log('no hay usuario');
    }
    // No user is signed in.
  }
});
