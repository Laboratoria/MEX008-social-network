import elementLI from "../components/elementLI.js";
//import Utils from "../../services/Utils.js";

const timeline = {
  render: async () => {
      let LI = await elementLI.render();

    return `
<section>
${LI}
    <!-- Modal add Trigger -->
    <a id="add-btn" class="btn-floating btn-large waves-effect waves-light btn modal-trigger teal right" href="#modal-add"><i class="material-icons">add</i></a>
  
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


    <!-- Modal Confirmation-delete Trigger -->
  
    <!-- Modal Confirmation-delete Structure -->
    <div id="confirmation-delete" class="modal">
      <div class="modal-content">
        <h4>Cofirmación de Eliminar</h4>
        <p>¿Estás seguro de querer eliminar esta publicación?</p>
      </div>
      <div class="modal-footer">
        <a href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
        <a href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
      </div>
    </div>

        `;
  },
  after_render: () => {
  //Inicializando modales   
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  },
};

export default timeline;