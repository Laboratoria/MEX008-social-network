// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

window.functions = {
//Function Login
functionLogin: (mail,password) =>{
  console.log(mail);
  console.log(password);
  
    firebase.auth().signInWithEmailAndPassword(mail, password)
    .then(()=>{
      sessionStorage.setItem('key', 'true');
    // console.log("¿El usuario esta verificado?",user.user.emailVerified); 
    // if(user.user.emailVerified){
      location.hash = "#/muro";
      return ("hola");
    // }
    // else{
    //   console.log("aun no has validado tu cuenta, accede a tu correo por favor");
    //   const alertOne = document.getElementById("alert-one");
    //   alertOne.innerHTML = `
    //   <button type="button" class="close" data-dismiss="alert">&times;</button>
    //   <strong>Atención!</strong> Aun no has validado tu cuenta, accede a tu correo por favor`
    // }
  })
  .catch((error) => {
    // location.hash = "/login";
      // Handle Errors here.
      let alertOne = document.getElementById("alert-one");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      const modalErrorLogin = `<!-- Modal de correo y contraseña inválidos -->
          <div id="miModal" class="modal">
            <div class="flex" id="flex">
              <div class="contenido-modal">
                      <div class="modal-header flex modalTitle">
                          <h4 id="title-Modal">Atención</h4><span class="close" id="close">&times;</span>
                          
                      </div>
                      <div class="modal-body">
                          <p>El correo electrónico o la contraseña que has ingresado no son correctos.
                          <br>Verifícalos e ingrésalos nuevamente.
                          </p>            
                      </div>
              </div>
            </div>
          </div>`          
        // console.log("Usuario no registrado");
        alertOne.innerHTML = modalErrorLogin;
        // Modal de correo y contraseña inválidos
      const flex = document.getElementById('flex');
      const cerrar = document.getElementById('close');
      
      cerrar.addEventListener('click', (e) =>{
        e.preventDefault();
        alertOne.style.display = 'none';
      });
      window.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target == flex){
          alertOne.style.display = 'none';
        }
      });
        return console.log("Usuario no registrado");
    });
},

//Function Login with Google
loginGoogle: () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((user) =>{
    sessionStorage.setItem('key', 'true');
    return alert("Google Login");
    })
  .catch((error)=>{
    return alert("error");
    })
  },

 //Function Save Posts
 save: (textPublication,selectPublication) =>{
  
  db.collection("posts").add({
    post: textPublication,
    category: selectPublication,
})
.then((docRef) => {
    document.getElementById("publication").value = "";
    document.getElementById("select-publication").value = "";
    return console.log("Post written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

},

//Funcion eliminar post
eliminar: (id) => {
  db.collection("posts").doc(id).delete()
  .then(function() {
    return alert("Publicación eliminada correctamente!");
    })
  .catch(function(error) {
    return alert("Error al tratar de eliminar publicación: ", error);
    });
  },

register: (name,mail,password) => {
    
    console.log("entra a la funcion registrar");
    if(name != "" & mail != "" & password != ""){

    firebase.auth().createUserWithEmailAndPassword(mail, password)
    .then(()=>{
        location.hash = '/login';
        return alert("Usuario creado");
    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        return alert("no se pudo crear usuario");
        
      });
    
    }
    else{
        alert("Debes completar los campos");
    }
},

//Funcion editar post
editar: (id,textPublication) =>{

  const washingtonRef = db.collection("posts").doc(id);
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
      post: textPublication,
      // category: selectPublication,
    })
    .then(()=>{
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
},

cerrarSesion: () =>{
  firebase.auth().signOut()
  .then( () => {
      alert("sesion cerrada");
      sessionStorage.clear();
      location.hash = "#/login"
  })
  .catch( (error)=>{
      var errorMessage = error.message;
      console.log(errorMessage);
  })
}

}