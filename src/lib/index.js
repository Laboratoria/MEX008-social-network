// aqui exportaras las funciones que necesites
const goHome = () =>{
  location.hash = '/home';
}

// Ingreso por Correo y contraseña //
const emailPasswordLogIn = (emailLogin,passwordLogIn) => {
  console.log('Funciona correo y contraseña');
  const email= emailLogin.value;
  const password= passwordLogIn.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => goingProgile())
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
  });
}



// Ingreso por formulario //
const register = (nameRegister,emailRegister,passwordRegister,passwordConfirm) => {
  console.log('funciona formulario de ingreso');
  const nameUser= nameRegister.value;
  const emailUser= emailRegister.value;
  const passUser= passwordRegister.value;
  const confirmPassUser=passwordConfirm.value; 

  if (nameUser === ''){
    alert ('Por favor ingresa tu nombre');
    return;
  }
  if (emailUser.length < 4){
    alert ('Este e-mail no es válido');
    return;
  }
  if (passUser.length < 6){
    alert ('Tu contraseña debe por lo menos tener 6 caracteres');
    return;
  }
  if (passUser !== confirmPassUser){
    alert('Tu contraseñas no coinciden')
    return;
  }

// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(() => goHome())
//     .catch(function(error) {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//     console.log(email);
//     console.log(password);

//     });
// email - password.html
}


// Ingreso por Google //
function googleSignIn() {
  // if (!firebase.auth().currentUser) {
    console.log('funciona google')
    // [START createprovider]
  const provider = new firebase.auth.GoogleAuthProvider();
  //  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      const user = result.user;
      
      }).then (() => goHome())
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
//       if (errorCode === 'auth/account-exists-with-different-credential') {
//       alert('You have already signed up with a different auth provider for that email.');
//         // If you are using multiple auth providers on your app you should handle linking
//         // the user's accounts here.
//       } else {
//         console.error(error);
//      }
  
     });
//   } else {
    
//     firebase.auth().signOut();
//   }
// /*       document.getElementById('quickstart-sign-in').disabled = true; */
}


// Ingreso por facebook //
const facebookSignIn=()=>{
  console.log('funciona facebook')
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).then (() => goHome ())
  .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}


window.emailPasswordLogIn = emailPasswordLogIn;
window.register = register;
window. googleSignIn = googleSignIn;
window. facebookSignIn = facebookSignIn;
