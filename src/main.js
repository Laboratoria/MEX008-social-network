// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();
let pantallaInicioSesion = document.getElementById("pantalla-login");
let pantallaRegistro = document.getElementById("pantalla-registro");
let pantallaMuro = document.getElementById("pantalla-muro");
let pantallaIntereses = document.getElementById("pantalla-intereses");
const buttonCerrarSesion = document.getElementById("cerrar-sesion");
const buttonCerrarSesionDos = document.getElementById("cerrar-sesion-dos");

let pasarRegistro = () => {
    pantallaRegistro.style.display = "block";
    pantallaInicioSesion.style.display = "none";
}

document.getElementById("pasar-registro").addEventListener("click",pasarRegistro);

const registrar = () => {
    let mail = document.getElementById("email-registro").value;
    let password = document.getElementById("password-registro").value;

    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(verificar())
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}
document.getElementById("btn-registro").addEventListener("click",registrar);

const ingresar = () =>{
    let mail2 = document.getElementById("email-login").value;
    let password2 = document.getElementById("password-login").value;

    firebase.auth().signInWithEmailAndPassword(mail2, password2)
    .then(muro())
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}
document.getElementById("btn-login").addEventListener("click",ingresar);

const observadorDeSesion = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe usuario activo");
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log("no exite usuario activo");
        }
      });
}
observadorDeSesion();

const intereses =() =>{
    pantallaRegistro.style.display = "none";
    //aqui solo debe mostrarse la pantalla de intereses
    pantallaIntereses.style.display = "block";
}


const cerrarSesion = () =>{
    firebase.auth().signOut()
    .then( () => {
        console.log("sesion cerrada");
    })
    .catch( (error)=>{
        var errorMessage = error.message;
        console.log(errorMessage);
    })
}
buttonCerrarSesion.addEventListener("click",cerrarSesion);

const muro = () =>{
    pantallaInicioSesion.style.display = "none";
    pantallaIntereses.style.display = "none";
    console.log("mostar muro");
    pantallaMuro.style.display = "block";
}
buttonCerrarSesionDos.addEventListener("click",cerrarSesion);

const verificar = () =>{
    var user = firebase.auth().currentUser;
    user.sendEmailVerification()
    .then(function() {
    // Email sent.
    console.log("enviando correo ...");
    }).catch(function(error) {
    // An error happened.
    console.log(error);
    });
}





