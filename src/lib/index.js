// aqui exportaras las funciones que necesites
// alert ("Aqui estoy :)");
export const myFunction = () => {
  // console.log('Hola mundo!');
};

const firebaseConfig = {
  apiKey: "AIzaSyAfAooPNMQOUS3UMPcAUDQHBXM64dAuBK0",
  authDomain: "hopaki-prueba.firebaseapp.com",
  databaseURL: "https://hopaki-prueba.firebaseio.com",
  projectId: "hopaki-prueba",
  storageBucket: "",
  messagingSenderId: "967562359456",
  appId: "1:967562359456:web:8517811f94b84354"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//llamando a las funciones 
function registrar() {
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
}

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
  indextwto.innerHTML;
  /*`<p> HOLA!!</p>
  <button onclick="cerrar()">Cerrar Sesión</button>` */
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
document.getElementById('iniciar-sesion').addEventListener('click', () => {
  Swal.fire({
    title: '<i class="fas fa-user-alt"></i>',
    html:
      '<button class = btn-social face><img  class= img-social src= "img/googleicon.png"> Ingresa con Google</button>' + '<br>' +
      '<button class= btn-social googl><img class= img-social src= "img/facebookicon.png"> Ingresa con Facebook</button>'+ '<br>' +
      '<input id="email2" type="email" placeholder="Email">' + '<br>' +
      '<input type="password2" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button onclick="ingreso()" class="btn-warning">Registrate</button>',

      '<button class= btn-social googl><img class= img-social src= "img/facebookicon.png"> Ingresa con Facebook</button>'+ '<br>' + '<br>' +
      '<input type="email" placeholder="Email">' + '<br>' +
      '<input type="password" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button class="btn-warning">Registrate</button>',

    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Acceder!',
    confirmButtonAriaLabel: 'Registrate!',
    // cancelButtonText:
    //   '<i class="fa fa-thumbs-down"></i>',
    // cancelButtonAriaLabel: 'Cancelar',
  })
});

document.getElementById('registrate').addEventListener('click', () => {
  Swal.fire({
    title: '/MEX008-social-network/src/img/login.png',
    html:
      '<input type="email" placeholder="Email"> ' +
      '<input type="password" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button onclick="registrar()" class="btn-warning">Registrate</button>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Acceder!',
    confirmButtonAriaLabel: 'Registrate!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Cancelar',
  })
});
