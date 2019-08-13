let Navbar = {    
    render : async () => { 
        let view = /*html*/`
        <nav id = "navbar-dsk" class = "navbar">
            <a href = "./#/"><img src = "img/Logo.png" id = "logo"></a><br>
            <a href = "./#/login" id = "btn-login" class = "linksToJoin" >Inicia sesión</a>
            <a href = "./#/register" id = btn-register class = "linksToJoin"> Crea tu cuenta</a>
        </nav>
        <!--  mobile version -->
        <nav id = "navbar-mbl" class = "navbar">
            <a href = "./#/"><img src = "img/Logo.png" id = "logo"></a>
        </nav>
        `
        return view
    }
    ,after_render : async () => {}
}

export default Navbar;