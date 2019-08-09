window.Wall = {
    render: async() => {
        let view = /* html */ `
        <section class="section-welcome">
        <!--Sección 1-->
        <box class="welc-text">
        <!--Caja que contiene el texto de bienvenida-->
        <p>¡Bienvenido a la comunidad más completa de animal lovers!</p>
        <p>Localiza más rápido a tu amigo perdido</p>
         </box>
        <!--Caja que contiene el botón de "Cerrar sesión"-->
        <box>
        <a id="btn-logout" class="waves-effect waves-light btn modal-trigger" href="#/welcome">Cerrar sesion</a>
        </box>
        </section>
        `
        return view
    },
    after_render: async() => {}
}

export default window.Wall;