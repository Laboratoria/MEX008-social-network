const sidebar = {
  render: async () => {
    let user = firebase.auth().currentUser;
    let name, email;
    
    if (user != null) {
      name = user.displayName;
      email = user.email;
    }


    return `
    <nav> 
    <a id="side-trigger" href="#" data-target="slide-out" class="sidenav-trigger">
    <i id="menu" class="material-icons">menu</i></a>
    </nav>
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <!-- <img src="img/bike-day.jpg">-->
          </div>
          <a><img class="circle" src="img/readme/ramona.png"></a>
          <a><span class="white-text name">${name}</span></a>
          <a><span class="white-text email">${email}</span></a>
        </div>
      </li>
      <li><a href="#/profile"><i class="material-icons">account_circle</i>Perfil</a></li>
      <li><a href="#/settings"><i class="material-icons">settings</i>Configuración</a></li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Directorio</a></li>
      <li><a class="waves-effect" href="#/workshops"><i class="material-icons">motorcycle</i>Talleres</a></li>
      <li><a class="waves-effect" href="#/shops"><i class="material-icons">loyalty</i>Tiendas</a></li>
      <li class="right"><a id="sos" class="waves-effect right-align" href="#/sos"><i class="material-icons">report_problem</i>S.O.S.</a></li>     
      <li id="divider-final">
        <div class="divider"></div>
      </li>
      <li class="right"><a id="sign-out" class="waves-effect">Cerrar Sesión</a></li>
    </ul>
    `;
  },
  after_render: () => {
    //Inicializando sidebar
    const btnCollapse = document.querySelectorAll(".sidenav");
    M.Sidenav.init(btnCollapse);

    //agregando chismosa para 'sign-out'
    document.getElementById("sign-out").addEventListener("click", () => {
      firebase.auth().signOut();
    });

  }
};
export default sidebar;
