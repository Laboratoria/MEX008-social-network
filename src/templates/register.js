let Register = {
    render : async () => {
        let view = `
        <section id="register-page">
        <div id="img-register-page"></div>
        <div id="form-register-page">
          <div id="all-forms">
          <div id="login">
            <form action="">
              <label for="email-login"></label>
              <input id="email-login" name="email-login" type="email" placeholder="E-mail" required>
              <label for="password"></label>
              <input  id="password-login" name="password" type="password" placeholder="Contraseña" required>
              <button id="button-login" type="button" >Inicia sesión</button>
            </form>
          </div>
          <div>
            <div id="register">
              <h2>Registro</h2>
              <form action="">
  
                <div class="form-group">
                  <label for="user" class="col-sm-2 col-form-label">Usuario</label>
                  <div class="col-sm-10">
                      <input id="name-user" name="user" type="text" class="form-control"  placeholder="Username">
                  </div>
                </div>
  
                <div class="form-group">
                  <label for="email" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input id="email" name="email" type="email" class="form-control" placeholder="Email">
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="col-sm-2 col-form-label" for="password">Contraseña</label>
                  <div class="col-sm-10">
                    <input id="password" class="form-control" name="password" type="password" placeholder="Password">
                  </div>
                </div>
          
                <div class="form-group">
                  <label class="col-sm-2 col-form-label" for="confirm-password">Confirmar contraseña</label>
                  <div class="col-sm-10">
                    <input id="confirm-password" name="confirm-password" class="form-control" type="password" placeholder="Confirm Password">
                  </div>
                </div>
                <div class="button">
                  <button id="button-register" type="button">Registrarse</button>
                </div>
  
              </form>
              <div class="social-media">
                <p>O bien, ingresa con:</p>
                <div class="google-facebook">
                  <figure><img id="facebook" src="img/facebook.svg" alt="facebook"></figure>
                  <figure><img id="google" src="img/gmail2.svg" alt="gmail"></figure> 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>`
            
            return view
}, 

after_render : async () => {
/********************* Declaracion de variables **************************/

// Inicio de sesión por correo //
const emailLogin = document.getElementById('email-login');
const passwordLogin= document.getElementById('password-login');
const buttonLogin = document.getElementById('button-login');

// Registro por formulario //
const nameRegister = document.getElementById('name-user');
const emailRegister = document.getElementById('email');
const passwordRegister = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');
const buttonRegister = document.getElementById('button-register');

// Inicio de sesión por google //
const google = document.getElementById('google');

// Inicio de sesión por facebook //
const facebook=document.getElementById('facebook');

/**********************Declaracion de eventos************************/   
// Inicio de sesión por correo //
buttonLogin.addEventListener('click',() => 
  window.emailPasswordLogIn(emailLogin,passwordLogin));


// Inicio de sesión por formulario de registro //

buttonRegister.addEventListener('click',()=>
window.register(nameRegister,emailRegister,passwordRegister,passwordConfirm));

// Inicio de sesión por google //
google.addEventListener('click',googleSignIn);


// Inicio de sesión por facebook //
facebook.addEventListener('click',facebookSignIn);

// Observador de sesion
 window.addEventListener('load', initApp); 



}

}

export default Register
