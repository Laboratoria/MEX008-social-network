import Utils from "../../services/Utils.js";

const timeline = {
    render: async () => {
      return ` 
    <!-- Modal Form Trigger -->
    <div class="fix">
    <a id="add-btn" class="btn-floating btn-large waves-effect waves-light btn modal-trigger teal"
        href="#modalAdd"><i class="material-icons">add</i></a>
    </div>
    <section id="timeline">

    <div id="post-list" class="col s12 m7">
    <h6>Cargando...</h6>     
      <!-- Post cards -->

    
      </div>
      <!-- Modal Confirmation-delete Structure -->
      <div id="modalConfirmation" class="modal">
          <div class="modal-content">
              <h4>Cofirmación de Eliminar</h4>
              <p>¿Estás seguro de querer eliminar esta publicación?</p>
          </div>
          <div class="modal-footer">
              <a id="confirmation" href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
              <a href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
          </div>
      </div>

      <!-- Modal Add Structure -->
      <div id="modalAdd" class="modal modal-fixed-footer">
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
              <a id="add" href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Publicar</a>
          </div>
      </div>
      <section>

      <!-- Modal Edit Structure -->
      <div id="modalEdit" class="modal modal-fixed-footer">
        <div class="modal-content">
          <h4>Publicación</h4>
          <div class="divider"></div>
              <div class="input-field">
                <textarea id="textarea-edit" class="materialize-textarea"></textarea>
                <label for="textarea-post"></label>
              </div>
              </div>
        <div class="modal-footer">
          <a href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
          <a id="edit" href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Editar</a>
        </div>
      </div>
      `;
    },


    after_render: () => {
      //Declarando variables para editar y eliminar
      let idDelete, idEdit;
      const textareaEdit = document.getElementById('textarea-edit');


      let postList = document.getElementById("post-list");

      db.collection("posts").onSnapshot((querySnapshot) => {
        postList.innerHTML = "";
        querySnapshot.forEach((post) => {
          let d = new Date(post.data().date);
          let date = d.toDateString();
          postList.innerHTML += `
      <div class="card horizontal" style="overflow: visible;">

          <div class="card-image waves-effect waves-block waves-light">
              <img src="${post.data().photo}">
          </div>

          <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${post.data().displayName} ${post.data().emailVerified}<i
                      class="material-icons">more_vert</i></span>
              <p>${post.data().textPost}</p>
              <div class="card-action section">
              <a class="waves-effect" href="#/timeline"><i class="material-icons">favorite_border</i>${post.data().likes}</a>      ${date}
              </div>
          </div>

          <div class="card-reveal" style="display: none; transform: translateY(0%);">
              <li class=" card-title">
                  <span class="title"></span>
                  <i class="material-icons right">close</i>
              </li>

              <ul class="collection">
                  <li class="collection-item avatar">
                      <!-- Modal Form Trigger -->
                      <a class="modal-trigger" href="#modalEdit">
                          <span class="title edit" data-id="${post.id}" data-uid="${post.data().uid}">Editar</span>
                          <i class="material-icons waves-effect waves-light circle orange">edit</i>
                      </a>
                  </li>

                  <li class="collection-item avatar">
                      <!-- Modal Confirmation-delete Trigger -->
                      <a class="modal-trigger" href="#modalConfirmation">
                          <span class="title delete" data-id="${post.id}" data-uid="${post.data().uid}">Eliminar</span>
                          <i class="material-icons circle red">delete</i>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>
      `;
        });
      });

      //reglas para manejar clicks
      const handleClick = async (e) => {
        if (e.target.tagName == "SPAN" && e.target.classList.contains('delete')) {
          idDelete = e.target.dataset.id;
        };

        if (e.target.tagName == "SPAN" && e.target.classList.contains('edit')) {
          idEdit = e.target.dataset.id;
          const postEdit = db.collection("posts").doc(idEdit);

          postEdit.get().then(function (post) {
              if (post.exists) {
                document.getElementById('textarea-edit').value = post.data().textPost;
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          }).catch(function (error) {
          console.log("Error getting document:", error);
        });
      };
    };

    //Funciones para manipular collecion 'posts'
    const add = document.getElementById('add');
    add.addEventListener('click', () => {
      Utils.savePost();
    });

    const confirmation = document.getElementById('confirmation');
    confirmation.addEventListener('click', () => {
      Utils.deletePost(idDelete);
    });


    const edit = document.getElementById('edit');
    edit.addEventListener('click', () => {
      Utils.editPost(idEdit);
    });

    //Inicializando modales   
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    //agregando "chismosas para post-list"
    postList.addEventListener('click', handleClick)
  },
};

export default timeline;