'use strict';

// SECCIONES DE HUERTAPP//

// TEMPLATES //

import Register     from './templates/register.js';
import Home         from './templates/home.js';
import About        from './templates/about-us.js';
import Store        from './templates/store.js';
import Events       from './templates/events.js';
import Error404     from './templates/error.js';
import Utils        from './templates/utils.js';

// COMPONENTES //

import Navbar       from './components/navbar.js';
import Aside        from './components/aside.js';

// LISTA DE RUTAS //
// List of supported routes. 
// Any url other than these routes will throw a 404 error

const routes = {
    '/'             : Register
    , '/home'       : Home
    , '/about-us'   : About
    , '/store'      : Store
    , '/events'     : Events
}

// Router takes a URL, checks against the list of supported routes and then renders the corresponding content page

const router = async () => {    // function always returns a promise

    //load view element
    const header = document.getElementById('header-container');
    const content = document.getElementById('content');
    const aside = document.getElementById('aside');

    header.innerHTML = await Navbar.render(); // wait till the promise resolves
    await Navbar.after_render();

    let request = Utils.parseRequestURL();
    // Parse the URL and if it has an id part, change it with the string ":id"
    // condition ? exprIfTrue : exprIfFalse
    
    let parsedURL = (request.resource ? '/' + request.resource : '/')
    + (request.id ? '/:id' : '')
    + (request.verb ? '/' + request.verb : '');

    console.log(parsedURL);
     console.log(typeof(parsedURL));
    if (parsedURL !== '/')
    {
        /* header.innerHTML = await Navbar.render(); // wait till the promise resolves
        await Navbar.after_render(); */
    
        aside.innerHTML = await Aside.render();
        await Aside.after_render();
    } 
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead

    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();
}

//OBSERVADOR DE SESION
// function initApp() {
//     // Listening for auth state changes.
//     // [START authstatelistener]
//     firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         // User is signed in.
//         console.log("Usuario Activo");
//         // var displayName = user.displayName;
//         // var email = user.email;
//         // var emailVerified = user.emailVerified;
//         // var photoURL = user.photoURL;
//         // var isAnonymous = user.isAnonymous;
//         // var uid = user.uid;
//         // var providerData = user.providerData;
//         // if (!emailVerified) {
//         //   document.getElementById('quickstart-verify-email').disabled = false;
//         // }    
//       } 
//       else{
//         console.log("No existe este usuario");
//       }
//     });
// }

// Listen on hash change:
window.addEventListener('hashchange', router); // The event occurs when there has been changes to the anchor part of a URL
// Listen on page load:
window.addEventListener('load', router); // The event occurs when an object has loaded





 