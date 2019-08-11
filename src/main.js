// Este es el punto de entrada de tu aplicacion
import {login} from './views/login.js';
//Prueba boton

myFunction();

// //A
// const startButton = document.getElementById('start-button');

// //A-Comienzo haciendo una función (Sigue A)
// const nodoOfPresentationMobile = () => {
//     //console.log('Funciona');

//     //Creando nodo del dom solo para presentación de vista mobile

//     //Identificar primer padre
//     let nodoPadre = document.getElementsByTagName('section')[0];

//     console.log(nodoPadre);

//     //Identificar hijo

//     let primerHijo = document.getElementsByTagName('div')[1];
//     console.log(primerHijo);

//     //Eliminar hijo antes de insertar nuevo
//     nodoPadre.removeChild(primerHijo);

//     //Imprimir nuevo nodo
//     //Paso 1: Crear elementos
//     let nuevoElemento = document.createElement('div');
//     //Paso 2: Crear tipo de nodo
//     let textoDelElemento = document.createTextNode('Prueba');
//     //Paso 3: Prueba de acceso
//     let pruebaSegundoElemento = document.getElementsByTagName('div')[1];
//     console.log(pruebaSegundoElemento);
//     //Paso 4: Ligar padre con hijo
//     nuevoElemento.appendChild(textoDelElemento);
//     nuevoElemento.setAttribute('id','showPresentation');
// };

// //Eventos que escuchan un click
// //A
// startButton.addEventListener('click', nodoOfPresentationMobile);

// Creando rutas y archivos JS

import all from "./views/all.js"
import login from "./views/login"
import perfil from "./views/perfil"

const routes = {
      '/'           : login
    , '/register'   : registro 
    , '/profile'    : perfil
    , '/error'      : error404
};
 
// 

//Aquí el controlador 
const router = async () => {
    // 
    const content = null || document.getElementById('container_page');
    const footer = null || document.getElementById('footer-container')
    // 
    const request = Utils.parseRequestURL();
    //
     let parsedUrl = (request.resource ? '/' + request.resource : '/'); + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    //obtener la página desde el hash
    let page = routes [parsedUrl] ? routes[parsedUrl] : error404;
    content.innerHTML = await page.render();
    await page.after_render();
}

//llamando objeto y escuchando hash

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

parseRequestUrl : () => {
    let url = location.hash.slice(1) || '/';
    let r = url.split('/');
    let request = {
        
    };
};

