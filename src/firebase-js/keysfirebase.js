
var firebaseConfig = {
    apiKey: "AIzaSyAmmZe7KTWuN95FA9DlAVRZqF1cVADqu_k",
    authDomain: "wanderlust-acc5a.firebaseapp.com",
    databaseURL: "https://wanderlust-acc5a.firebaseio.com",
    projectId: "wanderlust-acc5a",
    storageBucket: "",
    messagingSenderId: "272328701609",
    appId: "1:272328701609:web:93f50bd23d7b36b2"
  };
  // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());



//   // <!--registrarse-->
//   var uiConfig = {
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         // User successfully signed in.
//         // Return type determines whether we continue the redirect automatically
//         // or whether we leave that to developer to handle.
//         return true;
//       },
//       uiShown: function() {
//         // The widget is rendered.
//         // Hide the loader.
//         document.getElementById('loader').style.display = 'none';
//       }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: './#index.html',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
//   };
//   // 
//  //Login con gmail
//   ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       // List of OAuth providers supported.
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       // firebase.auth.GithubAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });
// // 
// // 
//   //  