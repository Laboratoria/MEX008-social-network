const elementLI = {
  render: async () => {

        /*     db.collection("posts").onSnapshot.((querySnapshot) => {
          querySnapshot.forEach((post) => {
              console.log(`${post.id} => ${post.textPost()}`);
          });
      }); */
      return `      
      <!-- Post card -->
      <div class="col s12 m7">
                  <div class="card horizontal" style="overflow: visible;">
      
                    <div class="card-image waves-effect waves-block waves-light">
                    <img src="https://lorempixel.com/100/190/nature/6">
                    </div>
      
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons">more_vert</i></span>
                     <p>Texto de publicación</p>
                      <div class="card-action section">
                      <i class="material-icons right">favorite_border</i>
                      </div>
                      </div>
            
                    <div class="card-reveal" style="display: none; transform: translateY(0%);">
                    <li class=" card-title">
                    <span class="title"></span>
                      <i class="material-icons right">close</i>
                    </li>
                    
                    <ul class="collection">
                                        <li class="collection-item avatar">
                                        <a class="modal-trigger" href="#modal-add">
                    <span class="title">Editar</span>
    <i class="material-icons circle yellow">edit</i>
    </a>
                    </li>
                   

                    <li class="collection-item avatar">
                    <a class="modal-trigger" href="#confirmation-delete">
                    <span class="title">Eliminar</span>
    <i class="material-icons circle red">delete</i>
    </a>

                      
                    </li>
                  </ul>        
                    </div>
            
      </div>
      </div>


      `;
    },
  };

export default elementLI;
