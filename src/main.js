"use strict";

import login from './views/login.js'
import register from './views/register.js'
import Intereses from './views/intereses.js'
import Muro from './views/muro.js'
import error404 from './views/error.js'
import navbar from './views/navbar.js'
import header from './views/header.js'

import utils from './views/utils.js'




const routes = {
    '/muro' : Muro,
    '/': login,
    '/login':login,
    '/register' : register,
    '/intereses': Intereses,
};

const router = async () => { // function always returns a promise

    // load view element
    //const header  = document.getElementById('header-container'); 
    const content = null || document.getElementById('container'); // If the first value is false, it checks the second value 
    
    // Render the header of the page
    //header.innerHTML = await Navbar.render(); // wait till the promise resolves
    //await Navbar.after_render();
    
    // Get the page from the hash of supported routes.
    let request = utils.parseRequestURL();
    // Parse the URL and if it has an id part, change it with the string ":id"
    // condition ? exprIfTrue : exprIfFalse 
    let parsedURL = (request.resource ? '/' + request.resource : '/') 
        + (request.id ? '/:id' : '') 
        + (request.verb ? '/' + request.verb : '');
        //console.log(parsedURL);
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : error404; 
    content.innerHTML = await page.render();
    await page.after_render();    
}

// Listen on hash change:
window.addEventListener('hashchange', router); // The event occurs when there has been changes to the anchor part of a URL
// Listen on page load:
window.addEventListener('load', router); // The event occurs when an object has loaded





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

//document.getElementById("pasar-registro").addEventListener("click",pasarRegistro);

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
//document.getElementById("btn-registro").addEventListener("click",registrar);

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
//document.getElementById("btn-login").addEventListener("click",ingresar);

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
//buttonCerrarSesion.addEventListener("click",cerrarSesion);

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





