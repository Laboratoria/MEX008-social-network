
/* ROSA AQUÍ VA TU CÓDIGO */
let RegisterR = {

    render : async () => {
        let view =  /*html*/`
    
        `
        return view
    }
    , after_render: async () => {
        const signInWithGoogle = () => {
            //Sign into Firebase using popup auth and google as the identify provider
            const provider = new firebase.auth.GoogleAuthProvider();
             firebase.auth().signInWithPopup(provider)
            .then ((result) => {
              //this give you a google access token 
              const token = result.credential.accessToken;
              //The signed-in users info
              const user = result.user;
              console.log(user.uid);  
            }).then(() => window.location = "home.html")
            .catch((error) => {
              //Handle errors here
              const errorCode = error.code;
              const errorMessage = error.message;
              //The email of the user's account used
              const credential = error.credential;
              console.log(credential);
              console.log(errorCode);
            });
          }
          
          //  ***************       LOGIN WITH FACEBOOK     *****************
          const signInWithFacebook = () => {
          
            const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    const token = result.credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // ...
                }).then(() => window.location = "home.html")
                .catch(function(error) {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    const credential = error.credential;
                    // ...
                });
          }
          
          
          // firebase.auth().onAuthStateChanged(function(user) {
          //   if (user) {
          //       // User is signed in.
          //    window.location = "home.html";
          // } else {
          //       // No user is signed in.
          //       console.log('usuario no conectado')
          //   }
          // });
          

    }
}
export default RegisterR;


//  ***************       LOGIN WITH GOOGLE     *****************


  
  
  
//   window.signInWithGoogle = signInWithGoogle;
//   window.signInWithFacebook = signInWithFacebook;
  
//   module.exports = {
//     signInWithGoogle,
//     signInWithFacebook,
//   };