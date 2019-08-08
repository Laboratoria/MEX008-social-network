let Home = {
    render : async () => {
        let view = /* html */ `
        <div class="container-home">
        <div class="home-1">  
        <div class=home-text">
        <h1>Somos la red social que une a la comunidad de bodas 
        (proveedores, novias, novios, padrinos e invitados), 
        para hacer de esta experiencia la mejor de todas.</h1>
        </div>
        <div/>
        </div> 
        `
        return view
    },
    after_render : async () => {}
}

export default Home;