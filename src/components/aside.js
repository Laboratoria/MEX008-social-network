let Aside = {
    render : async () => {
        let view = `
        <ul>
            <li><a href=""><img src="../src/img/home.svg" alt="Inicio">Inicio</a></li>
            <li><a href=""><img src="../src/img/events.svg" alt="Eventos">Eventos</a></li>
            <li><a href=""><img src="../src/img/aboutus.svg" alt="Sobre Nosotros">Sobre nosotros</a></li>
            <li><a href=""><img src="../src/img/store.svg" alt="Tienda">Tienda</a></li>
            <li><a href=""><img src="../src/img/logout.svg" alt="Cerrar Sesión">Cerrar Sesión</a></li>
        </ul>`
        return view 
    }
, after_render: async () => {}

}

export default Aside;