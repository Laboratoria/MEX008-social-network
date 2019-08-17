// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

window.functions = {
//Function Login
functionLogin: (mail,password) =>{
  
  
    firebase.auth().signInWithEmailAndPassword(mail, password)
    .then(()=>{
      sessionStorage.setItem('key', 'true');
    // console.log("¿El usuario esta verificado?",user.user.emailVerified); 
    // if(user.user.emailVerified){
      location.hash = "#/muro";
      return console.log("Login exitoso");
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
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
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
  }

}