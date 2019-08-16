//import Utils from "../../services/Utils.js";
import savePost from "../../lib/index.js";

const timeline = {
  render: async () => {
    return ` 
    <!-- Modal Form Trigger -->
    <div class="fix">
    <a id="add-btn" class="btn-floating btn-large waves-effect waves-light btn modal-trigger teal"
        href="#modalForm"><i class="material-icons">add</i></a>
    </div>
    <section id="timeline">

    <div id="post-list" class="col s12 m7">
    <h5>Posts</h5>     
      <!-- Post cards -->

    
      </div>
      <!-- Modal Confirmation-delete Structure -->
      <div id="modalConfirmation" class="modal">
          <div class="modal-content">
              <h4>Cofirmación de Eliminar</h4>
              <p>¿Estás seguro de querer eliminar esta publicación?</p>
          </div>
          <div class="modal-footer">
              <a href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
              <a href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
          </div>
      </div>

      <!-- Modal Form Structure -->
      <div id="modalForm" class="modal modal-fixed-footer">
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
      `;
  },


  after_render: () => {
    let postList = document.getElementById("post-list");
  db.collection("posts").onSnapshot((querySnapshot) => { 
    postList.innerHTML = "";
    querySnapshot.forEach((post) => {
      let d = new Date(post.data().date);
      let date = d.toDateString();
     // console.log(`${post.id} => ${post.data().textPost}`);
      postList.innerHTML += `
      <div class="card horizontal" style="overflow: visible;">

          <div class="card-image waves-effect waves-block waves-light" data-pid="${post.id}" data-uid="${post.data().uid}">
              <img src="${post.data().photo}">
          </div>

          <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${post.data().displayName} ${post.data().emailVerified}<i
                      class="material-icons">more_vert</i></span>
              <p>${post.data().textPost}</p>
              <div class="card-action section">
              <p>${date}</p>
              <a class="waves-effect" href="#/timeline"><i class="material-icons">favorite_border</i>${post.data().likes}</a>
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
                      <a class="modal-trigger" href="#modalForm">
                          <span class="title">Editar</span>
                          <i class="material-icons waves-effect waves-light circle yellow">edit</i>
                      </a>
                  </li>

                  <li class="collection-item avatar">
                      <!-- Modal Confirmation-delete Trigger -->
                      <a class="modal-trigger" href="#modalConfirmation">
                          <span class="title">Eliminar</span>
                          <i class="material-icons circle red">delete</i>
                      </a>
                  </li>
              </ul>
          </div>
          
      </div>
      `;
    });
  });

  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () =>{
    savePost();
  }
  )


    //Inicializando modales   
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  },
};

export default timeline;