let Register = {
    render : async () => {
        let view = /*html*/ `
            <h1>REGISTRO</h1>
            <form id = "form-register" name = "formRegister" action="">
                <input 
                    type="email"
                    id = "email"
                    name = "email"
                    placeholder="Ingresa tu correo electrónico"
                    required
                />
                <input 
                    type = "password"
                    id = "password" 
                    name = "password" 
                    placeholder = "contraseña (mayor o igual a 6 caracteres)"
                    required
                />
                <input 
                    type="submit" 
                    value="Crear cuenta"
                />
            </form>
        `
        return view
    },
    after_render : async () => {
        /* form: Regístrate (Sign up new users)*/
        let formRegister = document.forms.formRegister;
        formRegister.addEventListener("submit", event => {
            event.preventDefault();
            firebase.auth()
                .createUserWithEmailAndPassword( //instrucción para crear una cuenta con correo y password
                    // .signInWithEmailAndPassword es para logearte
                    formRegister["email"].value, formRegister["password"].value)
                .then(
                    () => console.log("todo bien"))
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    console.log(errorCode,"/",errorMessage);
                });
        });
    }
}

export default Register;