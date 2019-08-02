const mainH3 = document.getElementById("main-h3");
const mainBtn = document.getElementById("main-btn");

/* MODAL */
const trigger = document.querySelector(".trigger");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

const toogleModal = () => modal.classList.toggle("show-modal");

trigger.addEventListener("click", toogleModal);
closeButton.addEventListener("click", toogleModal);

window.addEventListener("click", event => {
  if (event.target === modal) {
    toogleModal();
  }
});


/*       ********       REGISTRO       *******       */

/* firebase configuration */
const firebaseConfig = {
    apiKey: "AIzaSyAsQpWY0Ahrlh7k7qlwX7guYJCZN3msj_U",
    authDomain: "together-click-5a5dd.firebaseapp.com",
    databaseURL: "https://together-click-5a5dd.firebaseio.com",
    projectId: "together-click-5a5dd",
    storageBucket: "",
    messagingSenderId: "134852128441",
    appId: "1:134852128441:web:b5711605e6ce435f"
};

/* initialize firebase */
firebase.initializeApp(firebaseConfig);


/* form: Regístrate (Sign up new users)*/
formRegister = document.forms.formRegister;
formRegister.addEventListener("submit", () => {
    event.preventDefault();
    firebase.auth()
        .createUserWithEmailAndPassword(
            formRegister["email"].value, formRegister["password"].value)
        .then(
            () => {
                console.log("BIENVENIDO");
                toogleModal();
                alert("Bienvenido, ya estás registrado. Ahora inicia sesión con tu cuenta");
            }
        )
        .catch(
            error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,"|",errorMessage);
                if (errorCode == "auth/weak-password") {
                    alert("La contraseña debe ser de al menos 6 caracteres");
                }
                else if (errorCode == "auth/email-already-in-use") {
                    alert("La dirección de correo ya está registrada");
                }
                else{
                    alert(errorMessage);
                }       
            }
        );
    }
);
