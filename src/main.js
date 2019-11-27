const registro = (e) => {
    e.preventDefault();    
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then (function(){
        verificar()
        console.log("registrado");
    })
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("alertas").innerHTML=errorCode;
        document.getElementById("alertas").innerHTML = errorMessage;
         // ...
    });email-password.html

};

//comentario 

const ingreso= (e)=>{
    e.preventDefault();
   let email2= document.getElementById('email2').value;
   let password2= document.getElementById('password2').value;
   
   firebase.auth().signInWithEmailAndPassword(email2, password2)
   .then (function(){
    console.log("Ingreso de usuario que ya estaba registrado");
    location.hash = '/muro'
})
.catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    document.getElementById("alertas2").innerHTML = errorCode;
    document.getElementById("alertas2").innerHTML = errorMessage;
    
    // ...
});email-password.html

}

const observador= ()=> {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log("existe usuario registrado");
        if(user.emailVerified) {
            location.hash = '/muro'
            console.log("ya paso")
        }
          // User is signed in.
          const displayName = user.displayName;
          const email = user.email;
          console.log(user.emailVerified);
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          // ...
        } else {
            console.log("No existe usuario registrado");
          // User is signed out.
          // ...
        }
      });

 }
 observador();

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

 const verificar= () =>{
    let user = firebase.auth().currentUser;
        
    user.sendEmailVerification()
        .then(function() {
        // Email sent.
        console.log("enviando correo")
        })
        .catch(function(error) {
        // An error happened.
        console.log("error de correo")
        });
 }

 const mensajesError= () => {
    if ( registro == 'errorCode' || registro ==  'errorMessage' ){
        document.getElementById('alerta');
        alerta.addEventListener('click', mensajesError)
    }
 }

 const google= () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then (function(user){
            console.log(user);

        })
        .catch(function(error){
           console.log(error);
        })

 }


//carga de imagen en  muro //
const cargaArchivo = async (e) => { 
    let imagenesBaseDatos = firebase.database().ref('Imagenes/'+document.getElementById("email"));
   alert("Subiendo Imagen: "+e.target.value);
   let file = e.target;
    if(file.files && file.files[0]){
        imagenesBaseDatos.push({
            urlImage:file.files[0],
            email:document.getElementById("email")
        });
       alert("Carga Exitosa");
      }else{
        alert("Carga No Exitosa");
      }
      
};