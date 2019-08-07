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
let formRegister = document.forms.formRegister;
formRegister.addEventListener("submit", event => {
    event.preventDefault();
    firebase.auth()
        .createUserWithEmailAndPassword( //instrucción para crear una cuenta con correo y password
            // .signInWithEmailAndPassword es para logearte
            formRegister["email"].value, formRegister["password"].value)
        .then(
            ()=>console.log("todo bien"))
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            console.log(errorCode,"/",errorMessage);});
    }
);