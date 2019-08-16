const addPost = {
  render: async () => {
    return `
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
    `;
  },
  after_render: () => {
    let add = document.querySelectorAll('.modal');
    M.Modal.init(add);
    console.log("se inicializó add");
  }
};
export default addPost;
