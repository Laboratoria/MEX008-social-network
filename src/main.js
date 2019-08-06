// Este es el punto de entrada de tu aplicacion
/* 
import { myFunction } from './lib/index.js';

myFunction(); */

/* Declaracion de variables */
let buttonSignIn = document.getElementById('button-sign-in');
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
/*Declaracion de funciones*/


function handleSignUp() {
    console.log("diste un clic")
    console.log(email);
    console.log(password);
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    } 
    /*Funcion para crear un nuevo usuario */
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
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error); 
      // [END_EXCLUDE]
     }); 
    // [END createwithemail] 
  }

/*Declaracion de eventos*/   
buttonSignIn.addEventListener('click',handleSignUp);

  