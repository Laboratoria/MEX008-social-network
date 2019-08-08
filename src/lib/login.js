let Login = {
    render : async () => {
        let view = /*html*/ `

        <div class="container-login">
        <div class= "form-login"> 
        <h2>INICIA SESIÓN</h2>
        <div class="register">
           
            <form class="center" action="">
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
                    type="submit" value="Inicia sesión">Iniciar sesión
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
export default Login;