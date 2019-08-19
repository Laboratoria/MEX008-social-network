let Aside = {
    render : async () => {
        let view = `
        <ul class="lateral-menu">
            <ul>
                <li><a href="./#/home"><img src="../img/home.svg" alt="Inicio">Inicio</a></li>
                <li><a href="./#/events"><img src="../img/events.svg" alt="Eventos">Eventos</a></li>
                <li><a href="./#/about-us"><img src="../img/aboutus.svg" alt="Sobre Nosotros">Sobre nosotros</a></li>
                <li><a href="./#/store"><img src="../img/store.svg" alt="Tienda">Tienda</a></li>
                <li><a href="" id="sign-out"><img src="../img/logout.svg" alt="Cerrar Sesión">Cerrar Sesión</a></li>
            </ul>
        </ul>` 
        return view 
    }
, after_render: async () => {
    const linkSignOut = document.getElementById('sign-out');
    // Cerrar sesion//
    linkSignOut.addEventListener('click',signOut);

}
    
}

export default Aside;