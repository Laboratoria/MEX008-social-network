const modalMore = {
  render: async () => {
    return `
    <!-- Modal Trigger-->
    <div id="more-btn" class="right-align">
      <a class="waves-effect waves-light btn modal-trigger" href="#modal2"><i
          class="material-icons">more_vert</i></a>
    </div>
    <!-- Modal more Structure-->
    <div id="modal2" class="modal bottom-sheet">
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
  after_render: () => {
    let more = document.querySelectorAll('.modal');
    M.Modal.init(more);
    console.log("se inicializó more");
  }
};
export default modalMore;
