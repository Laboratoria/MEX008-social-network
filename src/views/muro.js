let Muro = {
    render : async () => {
        let view = /* html */ `
        <section id="pantalla-muro" class="pantalla-muro">
        <div class="row">
          <div class="span12">
              <div class="input-prepend">
                  <img src="./imgenes/icon-search.png" class="add-on">
                  <input type="search" class="btn search" id="">
                  <img src="./imgenes/icono-filter.png" class="add-on">
                  <select name="categorias" class="btn filter" id="">
                    <option value=""></option>
                    <option value="1">Orientación Psicológica</option>
                    <option value="2">Orientación Legal</option>
                    <option value="3">Limpieza Doméstica</option>
                    <option value="4">Cuidado de niños</option>
                    <option value="5">Belleza</option>
                    <option value="6">Ropa y accesorios</option>
                  </select>
              </div>

              <div class="input-prepend text-center">
                <img src="./imgenes/perfil-avatar.jpg" class="img-circle add-on" alt="">
                <form class="stars text-center">
                    <p class="clasificacion">
                      <input id="radio1" type="radio" name="estrellas" value="5">
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4">
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3">
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2">
                      <label for="radio4">★</label>
                      <input id="radio5" type="radio" name="estrellas" value="1">
                      <label for="radio5">★</label>
                    </p>
                   </form>
              </div>
              <input type="text" class="" placeholder="Publica aquí" id="publication">
              
              <!--AQUI SE IMPRIMEN LAS PUBLICACIONES-->


          </div>
        </div>
          <input type="submit" value="CERRAR SESION" class="btn" id="cerrar-sesion-dos">
      </section>
        `
        return view
    },
    after_render : async () => {
    
    const cerrarSesion = () =>{
      firebase.auth().signOut()
      .then( () => {
          console.log("sesion cerrada");
          location.hash = "/login"
      })
      .catch( (error)=>{
          var errorMessage = error.message;
          console.log(errorMessage);
      })
    }
    document.getElementById("cerrar-sesion-dos").addEventListener("click",cerrarSesion);
    }
}

export default Muro;