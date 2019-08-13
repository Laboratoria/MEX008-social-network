let Register = {
    render : async () => {
        let view = /*html*/ `
            <figure class = "page-background">
                <section class = "form-background">
                    <h1>Crea tu cuenta</h1>
                    <form id = "form-register" name = "formRegister" action="">
                        <div class="input-group input-group-lg">
                            <div class="input-group-prepend">
                                <!--<span class="input-group-text" id="addon-wrapping">@</span>-->
                                <span class=" input-group-text material-icons" id = "addon-wrapping">email</span>
                            </div>
                            <input 
                                type="email" 
                                name = "email"
                                id = "email"
                                class="form-control" 
                                placeholder="Ingresa tu correo electrónico" 
                                aria-label="Username" 
                                aria-describedby="addon-wrapping"
                                required
                            />
                        </div>
                        <!--<input 
                            type="email"
                            id = "email"
                            name = "email"
                            class = "form-inputs"
                            placeholder="Ingresa tu correo electrónico"
                            required
                        />-->
                        <br>
                        <div class="input-group input-group-lg">
                            <div class="input-group-prepend">
                                <!--<span class="input-group-text" id="addon-wrapping">@</span>-->
                                <i class = "input-group-text material-icons" id = "addon-wrapping">vpn_key</i>
                            </div>
                            <input 
                                type="password" 
                                name = "password"
                                id = "password"
                                class="form-control" 
                                placeholder = "Contraseña (mayor o igual a 6 caracteres)" 
                                aria-label = "Username" 
                                aria-describedby = "addon-wrapping"
                                required
                            />
                        </div>
                        <!--<input 
                            type = "password"
                            id = "password" 
                            name = "password" 
                            class = "form-inputs"
                            placeholder = "contraseña (mayor o igual a 6 caracteres)"
                            required
                        />-->
                        <br>
                        <input 
                            type="submit" 
                            class = "btn btn-secondary btn-lg"
                            value="Crear cuenta"
                        />
                    </form> <!--class = "form-submit"-->
                </section>
             </figure>
        `
        return view
    },
    after_render : async () => {
        const formRegister = document.forms.formRegister;
        formRegister.addEventListener("submit", () => {
            event.preventDefault();
            firebase.auth()
                .createUserWithEmailAndPassword(
                    formRegister["email"].value, formRegister["password"].value)
                .then(
                    () => {
                        console.log("BIENVENIDO");
                        //toogleModal();
                        alert("¡Bienvenido, gracias por registrarte!. \nAhora inicia sesión con tu cuenta");
                    }
                )
                .catch(
                    error => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode,"|",errorMessage);
                        if (errorCode == "auth/weak-password") {
                            alert("La contraseña debe ser de al menos 6 caracteres");
                        }
                        else if (errorCode == "auth/email-already-in-use") {
                            alert("La dirección de correo ya está registrada");
                        }
                        else{
                            alert(errorMessage);
                        }       
                    }
                );
            }
        );
    }
}
export default Register;