let Navbar = {    
    render : async () => { 
        let view = /*html*/`
            <nav>
                <a href = "./#/">WANDERLUST</a><br>
                <a href = "./#/login">Incia sesión</a>
                <a href = "./#/crear-perfil"> Crea tu perfil</a>
                <a href = "./#/perfil"> Perfil</a>
                <a href = "./#/muro"> Muro</a>
                
            </nav>
        `
        return view
    }
    ,after_render : async () => {}
}

export default Navbar;