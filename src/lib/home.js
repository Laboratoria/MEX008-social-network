let Home = {
    render : async () => {
        let view = /* html */ `
            <section id = "home">
                <figure id = "home-background" class = "page-background"></figure>
                <main id = "main-home-mbl" class = "main-home"> 
                    <h1>El espacio incluyente donde toda la comunidad de bodas se conecta.</h1><br>
                    <a href = "./#/login" id = "btn-login" class = "linksToJoin" >Inicia sesión</a><br><br>
                    <a href = "./#/register" id = btn-register class = "linksToJoin"> Crea tu cuenta</a>
                </main>
                <main id = "main-home-dsk" class = "main-home"> 
                    <h1>El espacio incluyente donde toda la comunidad de bodas se conecta.</h1><br><br>
                    <p>Planear una boda puede ser muy complicado, quieres que sea perfecta, lo que siempre has soñado, pero a la vez que se ajuste a la realidad.</p>
                </main>
            </section>    
        `
        return view
    },
    after_render : async () => {}
}

export default Home;