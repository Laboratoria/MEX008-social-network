// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.autocomplete');
    let instances = M.Autocomplete.init(elems);
  });