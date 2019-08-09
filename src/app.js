"use strict";
// Importando Views
import Welcome from './views/welcome.js';
import Error404 from './views/error.js';

// Importando Components
import NavBar from './components/header.js';
import Footer from './components/footer.js';

import Utils from './services/Utils.js'

//Lista de rutas soportadas. Cualquier otra arrojara un erroer 404

const routes = {
    '/': Welcome,
    '/Wall': Wall
};

// El código del enrutador. Toma una URL, verifica la lista de rutas admitidas y luego muestra la página de contenido correspondiente.

const router = async() => {
    // Elemento de vista de carga diferida:
    const content = null || document.getElementById('container');
    // Obtenemos el URL analizado de la barra de direcciones.
    let request = Utils.parseRequestURL()
        // Analizamos la URL y, si tiene una parte de ID, la cambiamos con la cadena ": id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
}



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);
//   });

//   var instance = M.Modal.getInstance(elem);
// "use strict";
// console.log('app.js ligado correctamente');
// container = document.getElementById('container');

// import Error from '../src/views/error.js';
// import Welcome from '../src/views/Welcome.js';
// container.innerHTML = Welcome.render();