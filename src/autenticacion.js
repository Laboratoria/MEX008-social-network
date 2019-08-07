window.onload = inicializar;
let autenticacion;

const inicializar () => {
    autenticacion = document.getElementById("auth-login");
    autenticacion.addEventListener("login-submit", autentificar, false);
}
 
const autentificar (event) => {
    let user = event.target.mail-login-m.value;
    let password = event.target.pwd-login-m.value;
    firebase.auth().signInWithEmailAndPassword(user, password)
    .then(function(result){
        alert("Autenticacion correcta")
    })
    .catch(function(error) {
        alert("No jaló")
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
}

