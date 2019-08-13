 let signOutBtn;

 // Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyBxJs9j1qM3ULWLVgJ_LqeNZGkGegHOh8o",
   authDomain: "sacbe-rd.firebaseapp.com",
   databaseURL: "https://sacbe-rd.firebaseio.com",
   projectId: "sacbe-rd",
   storageBucket: "",
   messagingSenderId: "304589264925",
   appId: "1:304589264925:web:ed29df87477af218"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 // Initialize the FirebaseUI Widget using Firebase.
 var ui = new firebaseui.auth.AuthUI(firebase.auth());
 var db = firebase.firestore();

 //UI firebase
 var uiConfig = {
   callbacks: {
     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
       // User successfully signed in.
       // Return type determines whether we continue the redirect automatically
       // or whether we leave that to developer to handle.
       return true;
     },
     uiShown: function () {
       // The widget is rendered.
       // Hide the loader.
       document.getElementById('loader').classList.add("hide");
     }
   },
   // Will use popup for IDP Providers sign-in flow instead of the default, redirect. ./#timeline
   signInFlow: 'popup',
   signInSuccessUrl: './#/profile',
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID,
   ],
   // Terms of service url.
   tosUrl: '<your-tos-url>',
   // Privacy policy url.
   privacyPolicyUrl: '<your-privacy-policy-url>'
 };

 //UI Firebase
 // The start method will wait until the DOM is loaded.
 ui.start('#firebaseui-auth-container', uiConfig);

 ui.start('#firebaseui-auth-container', {
   signInOptions: [
     // List of OAuth providers supported.
     firebase.auth.EmailAuthProvider.PROVIDER_ID,
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID
   ],
 });
 
 //funcion para comprobar estado de usuario
 firebase.auth().onAuthStateChanged(function (user) {
   console.log('state changed')
   if (user) {
     document.getElementById('signup-signin').classList.add("hide");
     document.getElementById('intro-container').classList.add("hide");
     document.getElementById('section-container').classList.remove("hide");
     document.getElementById('pic-trigger').classList.remove("hide");
     document.getElementById('slide-out').classList.remove("hide");
     document.getElementById('footer-nav').classList.remove("hide");

     document.getElementById("sign-out").addEventListener("click", () => {
       console.log('click');
       firebase.auth().signOut();
     });

     console.log('ONSIGN', document.getElementById("sign-out"))

     console.log("Entró el usuario");

   } else {
     document.getElementById('signup-signin').classList.remove("hide");
     document.getElementById('slide-out').classList.add("hide");
     document.getElementById('pic-trigger').classList.add("hide");
     document.getElementById('footer-nav').classList.add("hide");
     document.getElementById('section-container').classList.add("hide");
     console.log('Se salió el usuario')
      // document.getElementById("sign-out").removeEventListener('click');
   }
 });

 //Funcion para encontrar boton de cerrar sesión
 //  const signOutRun = async () => {
 //   if (document.getElementById("sign-out")) {
 //     resolve (document.getElementById("sign-out"))
 //        }else{
 //          reject("no se encuentra elemento sign-out")
 //        }
 // }
 //  signOutRun().then(document.getElementById("sign-out").addEventListener("click", () => signOut())); // 1





 //  const signOutRun = async () => {
 //   let promise = new Promise((resolve, reject) => {
 //    if (document.getElementById("sign-out")) {
 // resolve (document.getElementById("sign-out"))
 //    }
 //   reject(console.log("no se encuentra botón"))});
 //    signOutBtn = await promise; // wait till the promise resolves (*)
 //    signOutBtn.addEventListener("click", () => signOut());
 //    console.log("hay botón para cerrar sesión");
 // };

 //  signOutRun();
 //Función para observar si hay usuario o no
 //  var user = firebase.auth().currentUser;

 // if (user) {
 //   document.getElementById('signup-signin').classList.add("hide");
 //   document.getElementById('intro-container').classList.add("hide");
 //   document.getElementById('section-container').classList.remove("hide");
 //   document.getElementById('pic-trigger').classList.remove("hide");
 //   document.getElementById('slide-out').classList.remove("hide");
 //   document.getElementById('footer-nav').classList.remove("hide");
 //    console.log("Sí hay usuario")
 //    document.getElementById("sign-out").addEventListener("click", () => signOut());  
 // } else {
 //   document.getElementById('intro-container').classList.remove("hide");
 //   document.getElementById('signup-signin').classList.remove("hide");
 //   document.getElementById('footer-nav').classList.add("hide");
 //   document.getElementById('section-container').classList.add("hide");
 //   console.log('No hay usuario')
 // }


 //   db.collection("users").add({
 //     first: "Ada",
 //     last: "Lovelace",
 //     born: 1815
 // })
 // .then(function(docRef) {
 //     console.log("Document written with ID: ", docRef.id);
 // })
 // .catch(function(error) {
 //     console.error("Error adding document: ", error);
 // });