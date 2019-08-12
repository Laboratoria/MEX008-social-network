let Register = {
    render : async () => {
        let view = /*html*/ `
            <figure class = "page-background">
                <section class = "form-background">
                    <h1>Crea tu cuenta</h1>
                    <form id = "form-register" name = "formRegister" action="">
                        <input 
                            type="email"
                            id = "email"
                            name = "email"
                            class = "form-inputs"
                            placeholder="Ingresa tu correo electrónico"
                            required
                        />
                        <br>
                        <input 
                            type = "password"
                            id = "password" 
                            name = "password" 
                            class = "form-inputs"
                            placeholder = "contraseña (mayor o igual a 6 caracteres)"
                            required
                        />
                        <br>
                        <input 
                            type="submit" 
                            class = "form-submit"
                            value="Crear cuenta"
                        />
                    </form>
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