let register = {
    render : async () => {
        let view = /* html */ `
        <div class="pantalla-registro text-center" id="pantalla-registro">
        <div class="header">
          <img src="./imgenes/logo-two.png" class="logo-two">
        </div>
        
          <h3>Registro</h3>

          <form class="form-inline">
            <label for="register-name" class="input-register">Nombre</label>
            <input type="text" id="register-name" required><br>

            <label class="input-register">Correo</label>
            <input type="email" id="email-registro" required><br>
            <p class="prueba">Por favor ingresar un correo electrónico válido</p>

            <label class="input-register">Contraseña</label>
            <input type="password" id="password-registro" pattern="[A-Za-z0-9@#$%]{6,8}" required>
            <p class="prueba">La longitud debe ser entre 6 y 8 caracteres, incluye Mayúsculas, Minúsculas y símbolos</p>

            <input type="submit" value="ENVIAR" class="btn input-register" id="btn-registro">
          </form>

          <div class="divider">
              <div class="linea">&nbsp;</div>
              <div class="leyenda">o bien</div>
              <div class="linea">&nbsp;</div>
          </div>

        <div class="row-fluid input-register">
            <div class="span12">
              <div class="input-prepend">
                <img src="./imgenes/google-icon.png" class="add-on">
                <input type="submit" value="Registrate con Google" class="btn">
              </div>
            </div>
          </div>
    
          <div class="row-fluid input-register">
              <div class="span12">
                <div class="input-prepend">
                  <img src="./imgenes/icon-facebook.png" class="add-on">
                  <input type="submit" value="Registrate con Facebook" class="btn">
                </div>
              </div>
          </div>
        </div>
        `
        return view
    },
    after_render : async () => {

      document.getElementById("btn-registro").addEventListener("click",() => {
        let mail = document.getElementById("email-registro").value;
        let password = document.getElementById("password-registro").value;
        let name = document.getElementById("register-name").value;
        window.functions.register(name,mail,password);
      });
    //   const verificar = () =>{
    //     var user = firebase.auth().currentUser;
    //     user.sendEmailVerification()
    //     .then(() => {
    //     // Email sent.
    //     console.log("enviando correo ...");
    //     alert("Ya casi terminas. Accede a tu correo para verificar tu cuenta");
    //     console.log("aqui", user.emailVerified);
    //     if(user.emailVerified){
    //       location.hash= '/intereses';
    //     }
        
    //     })
    //     .catch((error) => {
    //     // An error happened.
    //     console.log(error);
    //     });
    // }
  }
}

export default register;