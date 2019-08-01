// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();


let pasarRegistro = () => {
    let pantallaRegistro = document.getElementById("pantalla-registro");
    pantallaRegistro.style.display = "block";
    let pantallaInicioSesion = document.getElementById("pantalla-login");
    pantallaInicioSesion.style.display = "none";
}

document.getElementById("pasar-registro").addEventListener("click",pasarRegistro);



