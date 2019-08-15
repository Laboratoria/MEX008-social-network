const elementLI = {
  render: () => {
      return `      
  <div class="col s12 m7">
  <h2 class="header">Horizontal Card</h2>
  <div class="card horizontal">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        </div>

        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
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
     
      <div class="card-action">
      <i class="material-icons right">like</i>
      </div>

    </div>
  </div>
</div>
      `;
    },
  };

export default elementLI;
