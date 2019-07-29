const signUp = document.getElementById('signgup-text');

signUp.addEventListener('click', () => {
  firebase.auth().signOut().then(function () {
    console.log('ususario saliendo');
    // Sign-out successful.
  }).catch(function (error) {
    console.log(error)
    // An error happened.
  });
})
