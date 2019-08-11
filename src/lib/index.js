// aqui exportaras las funciones que necesites

// Registro por formulario //
const register = (nameRegister,emailRegister,passwordRegister,passwordConfirm) => {
  console.log('funciona formulario de ingreso');
  const nameUser= nameRegister.value;
  const emailUser= emailRegister.value;
  const passUser= passwordRegister.value;
  const confirmPassUser=passwordConfirm.value; 
  if (nameUser === ' '){
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
    alert('Tu contraseña no coincide')
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(emailUser, passUser)
  .then(console.log("Usuario registrado"))
  .then (() => goHome())
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('Tu contraseña es muy debil.');
    } 
    if (errorCode == 'auth/email-already-in-use') {
      alert('Este correo ya esta registrado');
    }
    else {

      alert(errorMessage);
    }
    //console.log(error);
  });
}

// Inicio de sesion con Correo y contraseña //
const emailPasswordLogIn = (emailLogin,passwordLogIn) => {
  console.log('Funciona correo y contraseña');
  const email= emailLogin.value;
  const password= passwordLogIn.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => goHome())
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Contraseña incorrecta');
    } 
    if (errorCode === 'auth/user-not-found') {
      alert('Usuario no registrado');
    } 
  
    else {
      alert(errorMessage);
    }
  });
}

// function sendEmailVerification() {
//   // [START sendemailverification]
//   firebase.auth().currentUser.sendEmailVerification().then(function() {
//     // Email Verification sent!
//     // [START_EXCLUDE]
//     alert('Email Verification Sent!');
//     // [END_EXCLUDE]
//   });
//   // [END sendemailverification]
// }

// function sendPasswordReset() {
//   var email = document.getElementById('email').value;
//   // [START sendpasswordemail]
//   firebase.auth().sendPasswordResetEmail(email).then(function() {
//     // Password Reset Email Sent!
//     // [START_EXCLUDE]
//     alert('Password Reset Email Sent!');
//     // [END_EXCLUDE]
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // [START_EXCLUDE]
//     if (errorCode == 'auth/invalid-email') {
//       alert(errorMessage);
//     } else if (errorCode == 'auth/user-not-found') {
//       alert(errorMessage);
//     }
//     console.log(error);
//     // [END_EXCLUDE]
//   });
//   // [END sendpasswordemail];
// }

// Ingreso por Google //
function googleSignIn() {
    if (!firebase.auth().currentUser) {
    console.log('funciona google')
    // [START createprovider]
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      const user = result.user;
      })
    .then (() => goHome())
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      if (errorCode === 'auth/email-already-in-use') {
        alert('Este email ya se encuentra registrado');
      } else {
        console.log(errorMessage);
      }
    });
  }
  else {
    firebase.auth().signOut();
}
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
    const user =  result.user;
  })
  .then (() => goHome ())
  .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      alert('Ya te has registrado con este email');
      // If you are using multiple auth providers on your app you should handle linking
      // the user's accounts here.
    } else {
      console.error(error);
    }
  });
}

//Cerrar sesion//
const signOut = () =>{
  firebase.auth().signOut()
  .then( () => {
    alert("SESION CERRADA");
  })
  .catch( (error)=>{
      var errorMessage = error.message;
      console.log(errorMessage);
  })
} 


//Redirige a Home//
const goHome = () =>{
  location.hash = '/home';
}

//Observador de sesion//
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("Usuario Activo");
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // if (!emailVerified) {
        //   document.getElementById('quickstart-verify-email').disabled = false;
        // }    
      } 
      else{
        console.log("No existe este usuario activo");
      }
    });
}
 
window.emailPasswordLogIn = emailPasswordLogIn;
window.register = register;
//window. googleSignIn = googleSignIn;
//window. facebookSignIn = facebookSignIn;
  