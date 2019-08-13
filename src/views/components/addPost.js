const addPost = {
  render: async () => {
    return `
    <!-- Modal Trigger -->
    <a id="add-btn" class="btn-floating btn-large waves-effect waves-light btn modal-trigger teal" href="#modal1"><i class="material-icons">add</i></a>
  
    <!-- Modal Structure -->
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Publicación</h4>
        <textarea name="post-textarea" autocapitalize="sentences" plachedolder="¿Que está pasando?"></textarea>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
        <a id="send-btn" href="#!" class="modal-close waves-effect waves-green btn-flat">Publicar</a>
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
