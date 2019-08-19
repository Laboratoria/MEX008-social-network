let Welcome = {
    render: async() => {
        let view = /* html */ `
                <section class="section-welcome">
         <!--Sección 1-->
         <figure class="box-logo-welc">
            <img id="logo-welc" src="../img/logo-pet.png">
         </figure>
         <box class="welc-text">
             <!--Caja que contiene el texto de bienvenida-->
             <p>¡Únete a la comunidad más completa de animal lovers!</p>
             <p>Localiza más rápido a tu amigo perdido</p>
         </box>
         <!--Caja que contiene el botón de "Inicia sesión"-->
         <box>
             <a id="btn-login" class="waves-effect waves-light btn modal-trigger" href="#modal1">Inicia sesión</a>
         </box>
         <!--Inicia la estructura del modal de inicio de sesión-->
         <div id="modal1" class="modal">
             <div id="style-modal" class="modal-content">
                 <header class="modal-header">
                     <!--Header del modal-->
                     <box>
                         <p>Inicia sesión en PetFriendly</p>
                     </box>
                 </header>
                 <div class="login-container" id="firebaseui-auth-container"></div>
                 <div id="loader">Loading...</div>
             </div>
             <div id="modal-login" class="modal-footer" id="mod-footer-color">
                 <a href="#/" class="modal-close waves-effect waves-green btn-flat">Close</a>
             </div>
         </div>
         </section>
         
         
        `
        return view
    },
    after_render: async() => {
        document.getElementById("btn-login").addEventListener("click", () => {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
            //initialize ui config
            ui.start('#firebaseui-auth-container', uiConfig);
        });

        document.getElementById('hamb-menu').style.display = 'none';


        // //Mostrar Wall y contenido
        // const content = null || document.getElementById('container');
        // content.innerHTML = await window.Wall.render();
        // await window.Wall.after_render();

    }
}

export default Welcome;