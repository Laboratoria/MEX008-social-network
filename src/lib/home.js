let Home = {
    render : async () => {
        let view = /* html */ `
            <figure id = "home-background" class = "page-background">
                <main id = "main-home-mbl" class = "main-home"> 
                    <h1>El espacio incluyente donde toda la comunidad de bodas se conecta.</h1><br>
                    <a href = "./#/login" id = "btn-login" class = "linksToJoin" >Inicia sesión</a><br><br>
                    <a href = "./#/register" id = btn-register class = "linksToJoin"> Crea tu cuenta</a>
                </main>
                <main id = "main-home-dsk" class = "main-home"> 
                    <h1>El espacio incluyente donde toda la comunidad de bodas se conecta.</h1><br><br>
                    <p>Planear una boda puede ser muy complicado, quieres que sea perfecta, lo que siempre has soñado, pero a la vez que se ajuste a la realidad.</p>
                    <p>Es por eso que existe Together-Click, un espacio donde todas aquellas personas interesadas en casarse se encuentran, se apoyan, comparten dudas, ideas, consejos y pueden involucrar a sus seres queridos en su gran día. </p>
                </main>
            </figure>
        `
        return view
    },
    after_render : async () => {}
}

export default Home;