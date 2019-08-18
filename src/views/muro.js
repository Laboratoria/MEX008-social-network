let Muro = {
    render : async () => {
        let view = /* html */ `
        <section id="pantalla-muro" class="pantalla-muro">
        <main class="row-fluid container-publication text-center" id="container-publication">
          
              <textarea id="publication" contenteditable="true" placeholder="Publica aquí"></textarea>
            
          <div class="row-fluid>
            <div class="span12">
              <label for="select-publication"class="in-line">Selecciona la Categoría</label>
              <select name="categorias" class="input-small filter in-line" id="select-publication">
                    <option value=""></option>
                    <option value="Orientacion Psicologica">Orientación Psicológica</option>
                    <option value="Orientación Legal">Orientación Legal</option>
                    <option value="Limpieza Doméstica">Limpieza Doméstica</option>
                    <option value="Cuidado de niños">Cuidado de niños</option>
                    <option value="Belleza">Belleza</option>
                    <option value="Ropa y accesorios">Ropa y accesorios</option>
              </select>
              <div class="row" id="div-publicar">
                <input type="submit" value="PUBLICAR" class="btn-small" id="btn-publicar" disabled>
              </div>
            </div>
          </div>
        </main>
        
        <div class="row inputs-filter">
          <div class="span12">
            <div class="input-prepend text-center">
              <img src="./imgenes/icon-search.png" class="add-on">
              <input type="search" class="input-small search">
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

              <!--AQUI SE IMPRIMEN LAS PUBLICACIONES-->
              <p id="print-post"></p>
        
          <input type="submit" value="CERRAR SESION" class="btn" id="cerrar-sesion-dos">
      </section>
        `
        return view
    },
    after_render : async () => {
      const db = firebase.firestore();
      
      const btnPublicar = document.getElementById("btn-publicar");
      let select = document.getElementById("select-publication");
      const printPost = document.getElementById("print-post");
      const containerPublication = document.getElementById("container-publication");

      //EVENTO QUE PUBLICA POST
      btnPublicar.addEventListener("click",() => {
        alert("si entra a la funcion");
        const publication = document.getElementById("publication").value;
        const select = document.getElementById("select-publication").value;
        window.functions.save(publication,select);
        btnPublicar.disabled = true;
      });

      //EVENTO QUE PERMITE HABILITAR EL BOTON DE PUBLICAR
      containerPublication.addEventListener("click", (e) =>{
        if(e.target.tagName === "SELECT" && select != 0){
          btnPublicar.disabled = false;
        }
        return;
      });

      //LECTURA E IMPRESION EN PANTA DE POST´S 
      //onSnapshot actualiza en pantalla en tiempo real
      
        db.collection("posts").onSnapshot((querySnapshot) => {
          printPost.innerHTML = "";

          querySnapshot.forEach((doc) => {
              console.log(`${doc.data().category} => ${doc.data().post}`);
              printPost.innerHTML += `
              <div class="posts">
              
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
              <p class="in-line" data-id="${doc.id}"><strong>${doc.data().category}</strong></p>
              <p class="text-center text-publication" data-id="${doc.id}" value="${doc.id}">${doc.data().post}</p>
              
              <button><i class="fas fa-trash-alt btn-eliminar" data-id="${doc.id}"></i></button>
              <button><i class="far fa-edit btn-editar" data-id="${doc.id}"></i></button>
              </div>
              `     
          });  
          // console.log("aqui",doc.data().category);
        });
      

      printPost.addEventListener("click", (e) =>{
        console.log(e.target.tagName);
        if(e.target.tagName !== "I" || !e.target.classList.contains("btn-eliminar")){
          return;
        }
        console.log(e.target);
         window.functions.eliminar(e.target.dataset.id);
      })


        //Funcion editar post
        const editar = (id,textPublication) =>{

          const washingtonRef = db.collection("posts").doc(id);
            // Set the "capital" field of the city 'DC'
            return washingtonRef.update({
              post: textPublication,
              // category: selectPublication,
            })
            .then(()=>{
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }   
    
      printPost.addEventListener("click", (e) =>{
        console.log("entra a la funcion");
        if(e.target.tagName !== "I" || !e.target.classList.contains("btn-editar")){
            return;
        }
        console.log("entra a la funcion y funciona");
        const inputText = document.querySelector(`p.text-publication[data-id='${e.target.dataset.id}']`);
        console.log(inputText.textContent);
        // // console.log(!e.target.classList.contains("btn-editar"));
        // console.log(post.textContent);
        inputText.contentEditable = true;
        inputText.focus();
        editar(e.target.dataset.id,inputText.textContent);
      })
      
      document.getElementById("cerrar-sesion-dos").addEventListener("click",() => window.functions.cerrarSesion());
    }
}

export default Muro;