// Este es el punto de entrada de tu aplicacion
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
    const encabezado  = null || document.getElementById('header');
    const content = null || document.getElementById('container'); 
    const footer = null || document.getElementById('div-footer');
    
    // Get the page from the hash of supported routes.
    let request = utils.parseRequestURL();
    // Parse the URL and if it has an id part, change it with the string ":id"
    // condition ? exprIfTrue : exprIfFalse 
    let parsedURL = (request.resource ? '/' + request.resource : '/') 
        + (request.id ? '/:id' : '') 
        + (request.verb ? '/' + request.verb : '');
    
        // Render the header of the page
        
    if((parsedURL != '/login') & (parsedURL != '/')){
     encabezado.innerHTML = await header.render(); // wait till the promise resolves
     await header.after_render();
    }
    
    if((parsedURL != '/login') & (parsedURL != '/') & (parsedURL != '/register')){
      footer.innerHTML = await navbar.render();
      await navbar.after_render();
    }
       // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : error404; 
    content.innerHTML = await page.render();
    await page.after_render();    
}

// Listen on hash change:
window.addEventListener('hashchange', router); // The event occurs when there has been changes to the anchor part of a URL
// Listen on page load:
window.addEventListener('load', router); // The event occurs when an object has loaded

const observadorDeSesion = () =>{
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("existe usuario activo");
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          //Este nos dice sei email esta verificado
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          console.log(uid);
          var providerData = user.providerData;

          console.log(location.hash)
          
          if (location.hash === "#/login" || location.hash === "" && user.emailVerified) {
            location.hash = "#/muro";
          } 
        //   // ...

        } else {
          // User is signed out.
          // ...
          console.log("no exite usuario activo");
        }
      });
}
observadorDeSesion();












