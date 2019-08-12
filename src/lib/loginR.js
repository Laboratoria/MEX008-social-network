let LoginR = {

    render : async () => {
        let view =  /*html*/`

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
    }
    , after_render: async () => {

        console.log("HOLA DESDE ROSA");
        

        // When the user want login with google or facebook
      const google = document.getElementById("btn_google");
      const facebook = document.getElementById("btn_facebook");
  
      google.addEventListener("click", window.signInWithGoogle);
      facebook.addEventListener("click", window.signInWithFacebook);

    }
}
export default LoginR;

//               *****************     PRUEBA LOGIN ROSA 2     *****************
