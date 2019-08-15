//import elementLI from "../components/elementLI.js";
//import Utils from "../../services/Utils.js";

const timeline = {
  render: async () => {
    /*     db.collection("posts").onSnapshot.((querySnapshot) => {
          querySnapshot.forEach((post) => {
              console.log(`${post.id} => ${post.textPost()}`);
          });
      }); */

    return `
<section>

<!-- Post target -->
<div class="col s12 m7">
            <h5>Publicaciones</h5>
            <div class="card horizontal" style="overflow: visible;">

              <div class="card-image waves-effect waves-block waves-light">
              <img src="https://lorempixel.com/100/190/nature/6">
              </div>

              <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
             <p>Texto de publicación</p>
                <div class="card-action section">
                <i class="material-icons right">home</i>
                </div>
                </div>


      
              <div class="card-reveal" style="display: none; transform: translateY(0%);">
              
              <li class=" card-title">
              <span class="title"></span>
                <i class="material-icons right">close</i>
              </li>
              <ul class="collection">
                <li class="">
                <span class="title">Editar</span>
                  <a href="#/timeline" class="secondary-content">
                    <i class="material-icons">edit</i>
                  </a>
                </li>
                <li class="">
                <span class="title">Eliminar</span>
                  <a href="#/timeline" class="secondary-content">
                    <i class="material-icons">delete</i>
                  </a>
                </li>
  </ul>
              </div>


</div>
</div>
          












    <!-- Modal add Trigger -->
    <a id="add-btn" class="btn-floating btn-large waves-effect waves-light btn modal-trigger teal" href="#modal-add"><i class="material-icons">add</i></a>
  
    <!-- Modal add Structure -->
    <div id="modal-add" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Publicación</h4>
        <div class="divider"></div>
            <div class="input-field">
              <textarea id="textarea-post" class="materialize-textarea"></textarea>
              <label for="textarea-post">¿Que está pasando?</label>
            </div>
            </div>
      <div class="modal-footer">
        <a href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
        <a id="send-btn" href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Publicar</a>
      </div>
    </div>
    </section>



    <!-- Modal More Trigger-->
    <div id="more-btn" class="right-align">
      <a class="waves-effect waves-light btn modal-trigger" href="#modal-more"><i
          class="material-icons">more_vert</i></a>
    </div>
    
    <!-- Modal More Structure-->
    <div id="modal-more" class="modal bottom-sheet">
      <div class="modal-content">
        <h3 class="header">Opciones</h3>
        <ul class="collection">
          <li class="collection-item avatar">
            <i class="material-icons circle green">edit</i>
            <span class="title">Editar</span>
            <p>Editar</p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">edit</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle red">delete</i>
            <span class="title">Eliminar</span>
            <p>Eliminar</p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">delete</i>
            </a>
          </li>
        </ul>
      </div>
    </div>



        `;
  },
  after_render: () => {},
};

export default timeline;