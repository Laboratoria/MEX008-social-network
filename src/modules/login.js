let login = {
    render: async () => {
        let view = /* html */ `
         <div class="conteiner">
        
            <form class="login">
        
                <p><img src="../icon/FAVORITO.png" alt="imagen-logo" id="logo"></p>
                    <h2>Registro de usuarios </h2> <br>
                // <div id="firebaseui-auth-container"></div>

                    <p>Correo </p>
                    <input id="email" type="email"  placeholder="wanderlust@gmail.com">
                    <p>Contraseña</p>
                    <input id="password" type="password"  pattern=".{6,}" placeholder="contraseña"> <br><br>
                    <button onclick="registro()">Registrarse</button> <br>
                    <p>
                    <input type="submit" value="Google">
                        
                    <h2>Ingreso de usuarios </h2> <br>
                    <p>Correo </p>
                    <input id="email2" type="email"  placeholder="wanderlust@gmail.com">
                    <p>Contraseña</p>
                    <input id="password2" type="password"  pattern=".{6,}" placeholder="contraseña"> <br><br>
                    <button onclick="ingreso()">Ingreso</button>
        
            </form>
            <div id="contenido"></div>

        </div>
        </section> 
        </main>
        `
        return view
    },
        after_render: async () => {
        }
};
export default login;




