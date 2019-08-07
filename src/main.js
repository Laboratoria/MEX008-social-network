// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();


document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
});


const firebaseConfig = {
    apiKey: "AIzaSyAqOeJJsfipJhhu3xonhhh2G4XYmog8lvI",
    authDomain: "superb-ethos-249021.firebaseapp.com",
    databaseURL: "https://superb-ethos-249021.firebaseio.com",
    projectId: "superb-ethos-249021",
    storageBucket: "",
    messagingSenderId: "900630117910",
    appId: "1:900630117910:web:897141f2088152a4"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

db.collection("user").add({
        usuario: "Viviana",
        mail: "vivianaberron@gmail.com",
        password: "perrito"
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });


// let provider = new firebase.auth.GoogleAuthProvider();
// let provider = new firebase.auth.FacebookAuthProvider();
// auth.currentUser.linkWithRedirect(provider);
// firebase.auth().getRedirectResult().then(function(result) {
//     if (result.credential) {
//         // Accounts successfully linked.
//         let credential = result.credential;
//         let user = result.user;

//         // ...
//     }
// }).catch(function(error) {
//     // Handle Errors here.
//     // ...
// });