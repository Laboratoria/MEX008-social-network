const Sidebar = {
  render: async () => {
    return `<nav> <a id="side-trigger" href="#" data-target="slide-out" class="sidenav-trigger"><img class="circle"
          src="img/readme/ramona.png"></a>
    </nav>
    <!-- <a href="#" class="sidenav-trigger" data-target="menu-side"><i class="material-icons">menu</i></a> -->
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <!-- <img src="img/bike-day.jpg">-->
          </div>
          <a href="#user"><img class="circle" src="img/readme/ramona.png"></a>
          <a href="#name"><span class="white-text name">Ramona</span></a>
          <a href="#email"><span class="white-text email">ramona@gmail.com</span></a>
        </div>
      </li>
      <li><a href="#!"><i class="material-icons">account_circle</i>Editar Perfil</a></li>
      <li><a href="#!"><i class="material-icons">settings</i>Configuración</a></li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Directorio</a></li>
      <li><a class="waves-effect" href="#workshops"><i class="material-icons">build</i>Talleres</a></li>
      <li><a class="waves-effect" href="#shops"><i class="material-icons">store</i>Tiendas</a></li>
      <li><a id="sos" class="waves-effect right-align" href="#!"><i class="material-icons">report_problem</i>S.O.S.</a>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a id="sign-out" class="waves-effect right-align" href="#!">Cerrar Sesión</a></li>
    </ul>`;
  },
  after_render: () => {}
};
export default Sidebar;
