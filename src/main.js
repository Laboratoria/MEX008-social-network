// Este es el punto de entrada de tu aplicacion
/* 
import { myFunction } from './lib/index.js';

myFunction(); */

/********************* Declaracion de variables **************************/
let buttonRegister = document.getElementById('button-register');
let buttonLogin = document.getElementById('button-login');
let google = document.getElementById('google');


/***********************Declaracion de funciones****************************/

/*---------Funcion  para registrarse con contraseña y correo---------*/ 
function handleSignUp() {
  console.log("diste un clic")
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
    console.log(email);
    console.log(password);
    if (email.length < 4) {
      alert('Por favor ingrese un cuenta de correo valida');
      return;
    }
    if (password.length < 4) {
      alert('La contraseña debe de tener minimo 6 caracteres');
      return;
    } 
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('El password es muy debil.');
      } else {
        alert(errorMessage);
      }
      console.log(error); 
      // [END_EXCLUDE]
     }); 
    // [END createwithemail] 
    show("aside");
    hide("content");
  }

/*----------Iniciar sesion con email y constraseña------------*/
function toggleSignIn() {
  alert('fghjkl');
    //if (firebase.auth().currentUser) {
      // [START signout]
      //firebase.auth().signOut();
      // [END signout]
    //} else {
      var email = document.getElementById('email-login').value;
      
      var password = document.getElementById('password-login').value;
     /*  if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      } */
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password)

      .then(console.log("Tu correo es: "+ email))
      .catch( function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
       /*  console.log(error); */
      

      });

     

    }
  
 // }

/*---------Funcion para registrarse con google--------*/ 

/*     /* Function called when clicking the Login/Logout button.*/
    // [START buttoncallback]
    //function toggleSignIn() {
      //if (!firebase.auth().currentUser) {
        // [START createprovider]
        //var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
       // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // [END addscopes]
        // [START signin]
        //firebase.auth().signInWithPopup(provider)
        //.then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          // The signed-in user info.
          //var user = result.user;
          // [START_EXCLUDE]
          //document.getElementById('quickstart-oauthtoken').textContent = token;
          // [END_EXCLUDE]
        //}).catch(function(error) {
          // Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
          // The email of the user's account used.
          //var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          // [START_EXCLUDE]
          //if (errorCode === 'auth/account-exists-with-different-credential') {
           // alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
         // } else {
            ///console.error(error);
         // }
          // [END_EXCLUDE]
        ///});
        // [END signin]
     /// } else {
        // [START signout]
        //firebase.auth().signOut();
        // [END signout]
     // }
      // [START_EXCLUDE]
      //document.getElementById('quickstart-sign-in').disabled = true;
      // [END_EXCLUDE]
   // }
    // [END buttoncallback] */



/*---------*Funcion ocultar-------*/
const hide = id => document.getElementById(id).classList.add("hide");

/*-----------Funcion mostrar------*/
const show = id => document.getElementById(id).classList.remove("hide");


/**********************Declaracion de eventos************************/   
buttonRegister.addEventListener('click',handleSignUp);
buttonLogin.addEventListener('click',toggleSignIn);
/* google.addEventListener('click',toggleSignIn); */
