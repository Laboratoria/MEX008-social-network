let login = {
    render: async () => {
        let view = /* html */ `
         <div class="conteiner">
        
            <form class="login">
        
                <p><img src="https://github.com/JessicaZetina/MEX008-social-network/blob/master/icon/FAVORITO.png?raw=true" alt="imagen-logo" id="logo"></p>
                    <h3 class="login-title">Registro de usuarios </h3> <br>
                    <label class="login-label">Correo</label>
                    <input class="login-input" id="email" type="email"  placeholder="wanderlust@gmail.com">
                    <label class="login-label">Contraseña</label>
                    <input class="login-input" id="password" type="password"  pattern=".{6,}" placeholder="contraseña"> <br><br>
                    <button class="login-button" id="btn-registro">Registrarse</button> <br>
​                   
                    <div class="alerta" id="alertas"></div> 
​
                    <button class="login-button-google" id="google">Google</button> <br>
                    
                        
                    <h3 class="login-title">Ingreso de usuarios </h3> <br>
                    <label class="login-label">Correo </label>
                    <input class="login-input"  id="email2" type="email"  placeholder="wanderlust@gmail.com">
                    <label class="login-label">Contraseña</label>
                    <input class="login-input" id="password2" type="password"  pattern=".{6,}" placeholder="contraseña"> <br><br>
                    <button class="login-button" id="btn-ingreso">Ingreso</button>
                    <div class="alerta2" id="alertas2"></div> 
        
            </form>
            <div id="contenido"></div>
​
        </div>
        </section> 
        </main>
        `
        return view
    },
    after_render: async () => {
        const btnRegistro = document.getElementById('btn-registro');
        console.log(btnRegistro);
        btnRegistro.addEventListener('click', registro)
        
        const btnIngreso = document.getElementById('btn-ingreso');
        console.log(btnIngreso);
        btnIngreso.addEventListener('click', ingreso)

        const btngoogle = document.getElementById('google');
        console.log(btngoogle);
        btngoogle.addEventListener('click', google)
    }
};
export default login;




