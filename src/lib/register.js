let Register = {
    render : async () => {
        let view = /*html*/ `

        <div class="container-register">
        <div class= "form-register"> 
        <h2>REGISTRO</h2>
        <div class="register">
           
            <form class="center" action="">
                <label for="name">Nombre</label>
                <input 
                    type="name"
                    id = "name"
                    name = "name"
                    placeholder="Ingresa tu nombre"
                    required
                />
                <label for="email">Email</label>
                <input 
                    type="email"
                    id = "email"
                    name = "email"
                    placeholder="Ingresa tu correo electrónico"
                    required
                />
                 <label for="password">Contraseña</label>
                <input 
                    type = "password"
                    id = "password" 
                    name = "password" 
                    placeholder = "Contraseña (mayor o igual a 6 caracteres)"
                    required
                />
                <button class="new-account"
                    type="submit" value="Crear cuenta">Crear cuenta
                </button>
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