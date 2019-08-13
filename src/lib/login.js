let Login = {
    render : async () => {
        let view = /* html */ `
            <figure class = "page-background">
                <section class = "form-background">
                    <h1>Inicia Sesión</h1>
                    <div id = "firebaseui-auth-container"></div>
                </section>
            </figure>
        `
        return view
    },
    after_render : async () => {

        // FirebaseUI config.
        let uiConfig = {
            signInSuccessUrl: 'loggedin.html',
            signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // tosUrl and privacyPolicyUrl accept either url string or a callback
            // function.
            // Terms of service url/callback.
            //tosUrl: '<your-tos-url>',
            // Privacy policy url/callback.
            /* privacyPolicyUrl: function() {
            window.location.assign('<your-privacy-policy-url>');
            } */
        };

        // Initialize the FirebaseUI Widget using Firebase.
        //let ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        //ui.start('#firebaseui-auth-container', uiConfig);
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start('#firebaseui-auth-container', uiConfig);


    }
}

export default Login;