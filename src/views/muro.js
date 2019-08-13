let Muro = {
    render : async () => {
        let view = /* html */ `
        <section id="pantalla-muro" class="pantalla-muro">
        <div class="row">
          <div class="span12">
              <div class="input-prepend text-center">
                  <img src="./imgenes/icon-search.png" class="add-on">
                  <input type="search" class="input-small search" id="">
              </div>
              <div class="input-prepend text-center in-line">
                  <img src="./imgenes/icono-filter.png" class="add-on">
                  <select name="categorias" class="input-small filter" id="">
                    <option value=""></option>
                    <option value="1">Orientación Psicológica</option>
                    <option value="2">Orientación Legal</option>
                    <option value="3">Limpieza Doméstica</option>
                    <option value="4">Cuidado de niños</option>
                    <option value="5">Belleza</option>
                    <option value="6">Ropa y accesorios</option>
                  </select>
              </div>
          </div>
        </div>

        <div class="row-fluid">
          <div class="span12">
              <div class="input-prepend text-center">
                <img src="./imgenes/perfil-avatar.jpg" class="img-circle add-on" alt="">
                <form class="stars">
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
              <input type="text" class="add-on" placeholder="Publica aquí" id="publication">
          </div>
        </div>
        <div class="row" id="div-publicar">
        <input type="submit" value="PUBLICAR" class="btn-small" id="btn-publicar" disabled>
        </div>
        <select name="categorias" class="input-small filter" id="select-publication">
                    <option value=""></option>
                    <option value="1">Orientación Psicológica</option>
                    <option value="2">Orientación Legal</option>
                    <option value="3">Limpieza Doméstica</option>
                    <option value="4">Cuidado de niños</option>
                    <option value="5">Belleza</option>
                    <option value="6">Ropa y accesorios</option>
                  </select>
           
              <!--AQUI SE IMPRIMEN LAS PUBLICACIONES-->


          
          <input type="submit" value="CERRAR SESION" class="btn" id="cerrar-sesion-dos">
      </section>
        `
        return view
    },
    after_render : async () => {
    
      const btnPublicar = document.getElementById("btn-publicar");
      const publication = document.getElementById("publication");
      
      //pendiente
      publication.addEventListener("input", () =>{
        const textPublication = publication.value;
        if(textPublication.lenght != 0){
          btnPublicar.disabled = false;
        }
     });

     const arrayJSON = (textPublication,selectPublication) =>{
        const Data = {
          textpublication: textPublication,
          selectPublication: selectPublication
        };
        return Data;
     }

      const insertPublication = () =>{
        const textPublication = publication.value;
        const selectPublication = document.getElementById("select-publication").value;
        const arrayData = arrayJSON(textPublication,selectPublication);
        const publicacion = firebase.database().ref("publication/"+selectPublication);
        publicacion.set(arrayData);
        alert("Guardado exitosamente =)");
           
      }
      
      btnPublicar.addEventListener("click",insertPublication);
      

      
    

    
    const cerrarSesion = () =>{
      firebase.auth().signOut()
      .then( () => {
          console.log("sesion cerrada");
          location.hash = "#/login"
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