let Register = {
    render : async () => {
        let view = /*html*/ `
            <h1>REGISTRO</h1>
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
        `
        return view
    },
    after_render : async () => {}
}
export default Register;