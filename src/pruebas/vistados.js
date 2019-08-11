 //llamando a las funciones 
  const registrar = () => {
    //console.log("diste click");
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    //console.log(email);
    //console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const btnRegistrar = document.getElementById('registrar-btn').addEventListener('click', registrar);
  
  function ingreso() {
    const email2= document.getElementById("email2").value;
    const password2= document.getElementById("password2").value;
    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  
  function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe usuario activo");
            aparece();
          // User is signed in.
          const displayName = user.displayName;
          const email = user.email;
          console.log("user");
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          type="module"
        } else {
          // User is signed out.
          console.log("no existe usuario activo");
        }
      })  
    }
  observador();
  
  function aparece() {
    //var contenido= document.getElementById("contenido");
    //contenido.innerHTML= "Solo lo ve usuario activo";
    //vistados.innerHTML;
    `<p> HOLA!!</p>
    <button onclick="cerrar()">Cerrar Sesión</button>`
  };
  
  function cerrar() {
    firebase.auth().signOut()
    .then(function() {
        console.log("saliendo");
  
    })
    .catch(function(error) {
        console.log(error);
    })
  }