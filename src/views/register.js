let register = {
    render : async () => {
        let view = /* html */ `
        <div class="pantalla-registro text-center" id="pantalla-registro">
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

      const verificar = (e) =>{
        e.preventDefault();
        var user = firebase.auth().currentUser;
        user.sendEmailVerification()
        .then(function() {
        // Email sent.
        alert("Ya casi terminas. Accede a tu correo para verificar tu cuenta");
        console.log("enviando correo ...");
        location.hash= '/'
        }).catch(function(error) {
        // An error happened.
        console.log(error);
        });
    }

      const registrar = (e) => {
        e.preventDefault();
        alert("entra a la funcion registrar");
        let mail = document.getElementById("email-registro").value;
        let password = document.getElementById("password-registro").value;
        let name = document.getElementById("register-name").value;
    
        if(name != "" & mail != "" & password != ""){
    
        firebase.auth().createUserWithEmailAndPassword(mail, password)
        .then(()=>{
            alert("Usuario creado");
            verificar()   
        })
        /*.then(verificar())*/
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
          });
        }
    
        else{
            alert("Debes completar los campos");
        }
    }
    document.getElementById("btn-registro").addEventListener("click",registrar);
    
    }
}

export default register;