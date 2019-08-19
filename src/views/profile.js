let Profile = {
    render: async () => {
        let view = `<section class="profile">
        <figure class="profile-picture-container">
            <img id="profile-picture" src="./img/mariana-perfil.jpg" alt="Profile picture">
        </figure>
        <box class="profile-description">
            <h1>Mariana Fuentes</h1>
            <i class="fas fa-medal"><p>Rescatista</p></i>
            <br>
            <i class="fas fa-heart"><p>Propietaria</p></i>
            <br>
            <i class="fas fa-syringe"><p>Veterinaria</p></i>
    </section>
    <section class="pets">
        <header class="header-pets">Pets</header>
        <box class="pets-profile-content">
        <div class="carousel">
        <a class="carousel-item" href="#one!"><img src="./img/caminando-parque.jpg"></a>
        <a class="carousel-item" href="#two!"><img src="./img/mujer-parque.jpg"></a>
        <a class="carousel-item" href="#three!"><img src="./img/pareja-bosque5.jpg"></a>
        <a class="carousel-item" href="#four!"><img src="./img/parque-otono.jpg"></a>
        <a class="carousel-item" href="#five!"><img src="./img/lindo-perro.jpg"></a>

  </div>
        <div class="row pets-bio">
    <div class="col s12 m8">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Sobre Hamburguesa</span>
          <p>Mi nombre es Hamburguesa y soy un suave lomito. Vivo con Mariana y duermo 
          muchas veces al día. Mi pasatiempo favorito es estar con Mariana y perseguir ardillas.</p>
        </div>
      </div>
    </div>
  </div>
            

  </div>
 </box>
    </section>
    <section class="life">
        <header class="header-life">Nuestra Vida</header>
        <box class="life-content">
        <figure class="profile-picture-container">
        <img id="profile-picture" src="./img/mujer-parque.jpg">
       </figure>
       <div class="row pets-bio">
   <div class="col s12 m8">
     <div class="card blue-grey darken-1">
       <div class="card-content white-text">
         <span class="card-title">Sobre mí</span>
         <p>Mi nombre es Mariana, tengo 26 años y soy médica veterinaria zootecnista. 
         Amo a los animales y también soy rescatista. Hamburguesa es una parte importante de mi mundo.</p>
       </div>
     </div>
   </div>
 </div>
        </box>
        
        
    </section> `
    return view 
    },
    after_render: async () => {
           var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
        

    }
}

export default Profile;