const  registro=() => {
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then (function(){
        console.log("registrado");
        enviarCrearPerfil()
    })
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });email-password.html

};

const ingreso= ()=>{
let email2= document.getElementById('email2').value;
let password2= document.getElementById('password2').value;

firebase.auth().signInWithEmailAndPassword(email2, password2)
.then (function(){
    console.log("Ingreso de usuario viejo");
     enviarMuro();
})
.catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
    // ...
});email-password.html

}

const observador= ()=> {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log("existe usuario registrado");
        
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          console.log(user);
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
            console.log("No existe usuario registrado");
          // User is signed out.
          // ...
        }
      });
               
}
observador();

const enviarMuro=()=>{
 location.hash = '/muro'
};

const enviarCrearPerfil=()=>{
    location.hash = '/crear-perfil'
   };

const cerrar=() => {
    firebase.auth().signOut()
    .then (function(){
        console.log("Saliendo...");
        location.hash = '/login'
    })
    .catch(function(error){
        console.log(error);
    })
};


