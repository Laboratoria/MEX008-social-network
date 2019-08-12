let Register = {
    render : async () => {
        let view = /*html*/ `
            <figure class = "page-background">
                <section class = "form-background">
                    <h1>Crea tu cuenta</h1>
                    <form |action="">
                        <input 
                            type="email"
                            id = "email"
                            name = "email"
                            placeholder="Ingresa tu correo electrónico"
                            required
                        />
                        <br>
                        <input 
                            type = "password"
                            id = "password" 
                            name = "password" 
                            placeholder = "contraseña (mayor o igual a 6 caracteres)"
                            required
                        />
                        <br>
                        <input 
                            type="submit" value="Crear cuenta"
                        />
                    </form>
                </section>
             </figure>
        `
        return view
    },
    after_render : async () => {}
}
export default Register;