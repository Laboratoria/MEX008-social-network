let registro = {
    render : async () => {
    const view = 
    `<header class="cabecera">
    <h1>Crear cuenta</h1>
    </header>
        <div class="registrar-box">
             <h6>Puedes registrarte con alguna de las siguientes redes sociales:</h6>
            <button type="button" class="btn btn-secondary"><img src="img/googleicon.png" width="10%"
            height="auto"><strong>Entrar con Google</strong></button>
            <button type="button" class="btn btn-secondary"><img src="img/facebookicon.png" width="10%"
             height="auto"><strong>Entrar con Facebook</strong> </button>
        </div>
 <hr>
 <img class="hopaki-pk" src="img/hopaki-pk.png" width="10%" height="auto">
 <div>
    <label for="email">Ingresa tu correo</label>
    <input id="email" type="email" placeholder="@">
    <label for="password">Ingresa tu password</label>
    <input id="password" type="password" placeholder="6 digitos">
    <button id="registrar-btn">Enviar</button>
 </div>`
        return view

    },

    after_render : async () => {
        let register = document.getElementById('registrar-btn');
        register.addEventListener('click', () => location.hash = "#/inicio");
    } 
};

export default registro;
