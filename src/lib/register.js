let Register = {
    render : async () => {
        let view = /*html*/ `

        <div class="container-register">
        <div class= "form-backg">
        <div class="register">
            <h2>REGISTRO</h2>
            <form action="">
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
                    type="submit" value="Crear cuenta"
                />
             </form>
             </div>
             </div>

             </div>
        `
        return view
    },
    after_render : async () => {}
}
export default Register;