let Test = {
    render : async () => {
        let view = /* html */ `
        <h1>ROSA</h1>

        <div id="firebaseui-auth-container"></div>
            <!--<div id="loader">Loading...</div>-->
  
            <div class="form-group">
              <input type="button" id="btn_google" value="Google Sign In" />
            </div>
            <div class="form-group">
              <input type="button" id="btn_facebook" value="Facebook Sign In" />
            </div>
    
        `
        return view
    },
    after_render : async () => {
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
        
        // When the user want login with google or facebook
      const google = document.getElementById("btn_google");
      const facebook = document.getElementById("btn_facebook");
  
      google.addEventListener("click", signInWithGoogle);
      facebook.addEventListener("click", signInWithFacebook);
    }
}

export default Test;
