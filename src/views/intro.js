let intro = {
    render: async () => {
        let view = 
        `
        <section>
          <img src="/src/img/fondodesktop.jpg" alt="fondo-lapices" class="img-fondo-desktop">
          <!-- <img src="https://github.com/VianeyLaraRangel/MEX008-social-network/blob/master/src/img/fondodesktop.jpg"
            alt="fondo-lapices" class="img-fondo-desktop"> -->
          <div class="card card-desktop" style="width: 45rem;">
            <div class="card-body">
              <h1 class="title1">Academia HOPAKI</h1>
              <h3>(Home, Parents, Kids)</h3>
              <img src="img/hopaki-triada.png" class="card-img-top" alt="logo-hopaki-responsive">
              <h4 class="card-text">Es una red social dedicada a aquellos padres que por diversos motivos han decidido
                educar
                a sus hijos en casa, enfocada a compartir materiales y también a la comunicación.</h4>
              <!--Botones para direccionar a Inicio o a registro-->
              <button class="btn btn-primary btn-principal" id="iniciar-sesion-button">Iniciar Sesión</button>
      
              <button class="btn btn-light btn-principal">Aviso de Privacidad</button>
      
              <button class="btn btn-primary btn-principal" id="registrate-button">Regístrate</button>
            </div>
          </div>
        </section>
      </div>`
      return view
      console.log(view);
    },
    after_render: async () => {
        //LLamar botones que se imprimieron con template
        let iniciaSesion = document.getElementById('iniciar-sesion-button');
        let registrate = document.getElementById('registrate-button');
        //Detonar evento que escucha hash
        iniciaSesion.addEventListener('click', ()=> location.hash= "#/login");
        registrate.addEventListener('click', () => location.hash= "#/registro");
    }
};

export default intro;

// class="hide-desktop-section"