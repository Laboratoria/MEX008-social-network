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
    <!-- Modal add Trigger -->
    <a id="add-btn" class="btn-floating btn-large waves-effect waves-light btn modal-trigger teal" href="#modal-add"><i class="material-icons">add</i></a>
  
    <!-- Modal add Structure -->
    <div id="modal-add" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Publicación</h4>
        <textarea name="post-textarea" autocapitalize="sentences" plachedolder="¿Que está pasando?"></textarea>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
        <a id="send-btn" href="#!" class="modal-close waves-effect waves-green btn-flat">Publicar</a>
      </div>
    </div>
    </section>
        `;
                   },
  after_render: () => {},
                  };

export default timeline;
