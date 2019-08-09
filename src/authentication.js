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
       //document.getElementById('firebaseui-auth-container').classList.add("hide");
     }
   },
   // Will use popup for IDP Providers sign-in flow instead of the default, redirect. ./#timeline
   signInFlow: 'popup',
   signInSuccessUrl: './#/shops',
   signInOptions: [
     // Leave the lines as is for the providers you want to offer your users.
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
     //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
     //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID,
     //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
   ],
   // Terms of service url.
   tosUrl: '<your-tos-url>',
   // Privacy policy url.
   privacyPolicyUrl: '<your-privacy-policy-url>'
 };


 // The start method will wait until the DOM is loaded.
 ui.start('#firebaseui-auth-container', uiConfig);

 ui.start('#firebaseui-auth-container', {
   signInOptions: [
     // List of OAuth providers supported.
     firebase.auth.EmailAuthProvider.PROVIDER_ID,
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
     //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
     //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
     //   firebase.auth.PhoneAuthProvider.PROVIDER_ID

   ],
   // Other config options...
 });

   //funcion para cerrar sesion
   const signOut = async() => {
    try{
        firebase.auth().signOut().then;
    }
    catch(err){
        console.error("¡Error!")
    }
    console.log("Se cerró sesión")
}

//funcion para comprobar estado de usuario
 firebase.auth().onAuthStateChanged(function (user) {
   if (user) {
    document.getElementById('pic-trigger').classList.remove("hide");
     console.log(user)
     // User is signed in.
     var displayName = user.displayName;
     var email = user.email;
     var emailVerified = user.emailVerified;
     var photoURL = user.photoURL;
     var isAnonymous = user.isAnonymous;
     var uid = user.uid;
     var providerData = user.providerData;
     // ...
     //document.getElementById('loader').classList.add("hide");
     document.getElementById('signup-signin').classList.add("hide");
     
     document.getElementById('section-container').classList.remove("hide");
     document.getElementById("sign-out").addEventListener("click", () => signOut())
   } else {
     // User is signed out.
     // ...
     // location.assign = '/src/'
     document.getElementById('signup-signin').classList.remove("hide");
     document.getElementById('pic-trigger').classList.add("hide");
     document.getElementById('section-container').classList.add("hide");
     console.log('No hay usuario')
   }
 });




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
 