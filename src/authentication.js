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
   signInSuccessUrl: './#/timeline',
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
  
  

/*   db.collection("posts").add({
    uid: 'PcJkrcAcJ3dUxIJ6CHDP6Ak1Dwy1',
    textPost: 'Vengan conmigo a rodar',
    date: `${new Date().getTime()}`,
    likes: '0',
    status: 'no-like',
})
.then(function(postRef) {
    console.log("Post written with ID: ", postRef.id);
})
.catch(function(error) {
    console.error("Error adding post: ", error);
}); */