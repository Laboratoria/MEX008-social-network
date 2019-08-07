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
    let name = document.getElementById("register-name").value;

    if(name != "" & mail != "" & password != ""){

    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(()=>{
        alert("Usuario creado");
        verificar()
    })
    /*.then(verificar())*/
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
    }

    else{
        alert("Debes completar los campos");
    }
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
          //Este nos dice sei email esta verificado
          //console.log(user.emailVerified)
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
    alert("Ya casi terminas. Accede a tu correo para verificar tu cuenta");
    console.log("enviando correo ...");
    }).catch(function(error) {
    // An error happened.
    console.log(error);
    });
}

const btnGoogle = document.getElementById('btnGoogle');
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(user){
      alert("Google SignIn");
      console.log(user);
  }).catch(function(error){
      alert("error");
      console.log(error);
  })
}
btnGoogle.addEventListener("click", loginGoogle);



