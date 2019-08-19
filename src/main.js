var firebaseConfig = {
    apiKey: "AIzaSyAqOeJJsfipJhhu3xonhhh2G4XYmog8lvI",
    authDomain: "superb-ethos-249021.firebaseapp.com",
    databaseURL: "https://superb-ethos-249021.firebaseio.com",
    projectId: "superb-ethos-249021",
    storageBucket: "gs://superb-ethos-249021.appspot.com/",
    messagingSenderId: "900630117910",
    appId: "1:900630117910:web:897141f2088152a4"
};
// Initialize functions firebase
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var db = firebase.firestore();
var storage = firebase.storage();
// var storageRef = firebase.storage().ref('posted_photos/' + file.name);

// UI
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    // Other config options...
});
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            db.collection("post").orderBy('hora')
                .onSnapshot(function(data) {
                    // console.log('bvgjvg');

                    printPost(data);
                });
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/#/wall',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: 'https://ledahuerta.github.io/MEX008-social-network/',
    // Privacy policy url.
    privacyPolicyUrl: 'https://ledahuerta.github.io/MEX008-social-network/'
};


// Funcion que crea el post y guarda al usuario logueado en una variable que podemos manipular despues
let addPost = () => {
    // Asignamos un 'Guard' que indique si un usuario esta logueado y toda la informacion que tenemos de el
    firebase.auth().onAuthStateChanged((user) => {
        // User is signed in.
        if (user.uid) {
            // console.log(user);
            // Declaramos el textArea y obtenemos su valor
            let postTxt = document.getElementById('post-txt').value;
            if (postTxt != '') {
                let issueRoot = document.getElementById('issue-root');
                issueRoot.innerHTML = '';
                //creamos una funcion que agregue el post a la base de datos en firestore con los campos: usuario, nombre, post content y hora
                db.collection("post").add({
                        usuario: user.uid,
                        nombre: user.displayName,
                        postContent: postTxt,
                        hora: new Date()
                    }).then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        document.getElementById('post-form').reset();
                        db.collection("post").doc(docRef.id).update({
                                postId: docRef.id
                            }).then(function(docRef) {
                                console.log("Document successfully updated!");
                            })
                            .catch(function(error) {
                                console.error("Error writing document: ", error);
                            });
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
            } else {
                const issueRoot = document.getElementById('issue-root');
                issueRoot.innerHTML = 'Por favor escribe algo';
            }


        } else {
            // No user is signed in.
            console.log("no hay usuario logueado")

        }
    });
}



// creamos una funcion que obtenga actualizaciones en tiempo real
db.collection("post").orderBy('hora')
    .onSnapshot(function(data) {
        // console.log('bvgjvg');

        printPost(data);
    });

// Si el uid existe entonces guarda al user que esta logueado en localStorage y convierte el objeto en un string que pueda alojarse en localStorage
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        // console.log(user);
    } else {
        console.log('no hay usuario logueado')
    }
})



// let getPost = (idPost) => {
//     if (idPost != '') {
//         actualPost = db.collection("post").doc(idPost);
//         actualPost.get().then(function(doc) {
//             if (doc.exists) {
//                 console.log("Document data:", doc.data());
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//             }
//         }).catch(function(error) {
//             console.log("Error getting document:", error);
//         });
//     }
// }



// const btnSmt = document.getElementById('print-button');













// //initialize ui config
// ui.start('#firebaseui-auth-container', uiConfig);
// //Activa modal
// document.addEventListener('DOMContentLoaded', () => {
//     let elems = document.querySelectorAll('.modal');
//     let instances = M.Modal.init(elems);
// });




// export const addPostSubmit = (ev) => {
//     ev.preventDefault();
//     firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//             let textArea = document.getElementById("textarea");
//             let inputTrim = textarea.trim();
//             if (textArea.value === '' || textArea.value === inputTrim || textArea.value = ' ') {
//                 alert("Tienes que escribir algo");
//             } else {
//                 firebase.firestore().collection('users').doc(user.uid).get()
//                     .then(doc => {
//                         if (user.displayName === null) {
//                             addPost(textArea.value, user.uid, doc.data().name);

//                         } else {
//                             addPost(textarea.value, user.uid, user.displayName);
//                         }

//                     });
//             }

//         } else {
//             alert("Inicia sesion para publicar");
//         }

//     });
// };