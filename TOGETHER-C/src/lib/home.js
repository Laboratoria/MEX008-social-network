let Home = {
    render : async () => {
        let view = /* html */ `
        <div class="container-home-background">
            <div class="home-transparente-mbl">  
             <h1 class="txt-home">Somos la red social que une a la comunidad de bodas 
              (proveedores, novias, novios, padrinos e invitados), 
              para hacer de esta experiencia la mejor de todas.</h1>
             <div/>
        </div> 
        `
        return view
    },
    after_render : async () => {}
}

export default Home;