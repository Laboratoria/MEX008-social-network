// aqui exportaras las funciones que necesites
// alert ("Aqui estoy :)");
export const myFunction = () => {
  // console.log('Hola mundo!');
};


document.getElementById('iniciar-sesion').addEventListener('click', () => {
  Swal.fire({
    title: '<i class="fas fa-user-alt"></i>',
    html:
      '<button class = btn-social face><img  class= img-social src= "img/googleicon.png"> Ingresa con Google</button>' + '<br>' +
      '<button class= btn-social googl><img class= img-social src= "img/facebookicon.png"> Ingresa con Facebook</button>'+ '<br>' +
      '<input id="email2" type="email" placeholder="Email">'+'<br>' +
      '<input type="password2" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button onclick="ingreso()" class="btn-warning">Registrate</button>',

      '<button class= btn-social googl><img class= img-social src= "img/facebookicon.png"> Ingresa con Facebook</button>'+ '<br>' + '<br>' +
      '<input type="email" placeholder="Email">' + '<br>' +
      '<input type="password" placeholder="Password">' + '<br>'+ '¿No tienes una cuenta?' + '<br>' + '<button class="btn-warning">Registrate</button>',
      '<input type="password" placeholder="Password">'+'<br>'+ '¿Olvidaste tu contraseña?' + '<br>' + '<button class="btn-warning">Registrate</button>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Acceder!',
    confirmButtonAriaLabel: 'Registrate!',
    
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
