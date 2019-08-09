let Navbar = {    
    render : async () => { 
        let view = /*html*/`
            <nav id = "navbar-dsk" class = "navbar">
                <a href = "./#/"><img src = "imgs/Logo-color.png" id = "logo"></a><br>
                <a href = "./#/login" class = "linksToJoin" >Inicia sesión</a>
                <a href = "./#/register" class = "linksToJoin"> Crea tu cuenta</a>
            </nav>
            <!--  mobile version -->
            <nav id = "navbar-mbl" class = "navbar">
                <a href = "./#/"><img src = "imgs/Logo-color.png" id = "logo"></a><br>
                <a href = "./#/login" class = "linksToJoin-mbl" >Inicia sesión</a>
                <a href = "./#/register" class = "linksToJoin-mbl"> Crea tu cuenta</a>
            </nav>
        `
        return view
    }
    ,after_render : async () => {}
}

export default Navbar;
