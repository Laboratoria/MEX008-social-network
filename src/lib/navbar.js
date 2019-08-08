let Navbar = {    
    render : async () => { 
        let view = /*html*/`
            <nav>
                <a href = "./#/"><img src="imgs/Logo-white.png" alt="" id="logo"></a>
    
                <a href = "./#/register"> Crea tu cuenta</a>
                <a href = "./#/login">Inicia sesión</a>
            </nav>
        `
        return view
    }
    ,after_render : async () => {}
}

export default Navbar;