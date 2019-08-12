const footerNav = {
  render: async () => {
    let view = `
    <div class="">
    <nav>
    <div class="nav-wrapper">
     <a href="#!" class="brand-logo center"><link rel="icon" type="image/img" href="img/logo.png">Sacbé</a>
      <ul class="left">
        <li><a class="waves-effect"><i class="material-icons">home</i></a></li>
      </ul>
      <ul class="right">
      <li><a class="waves-effect"><i class="material-icons right">search</i></a></li>
    </ul>
    </div>
    </div>
  </nav>
        `;
    return view;
  },
  after_render: async () => {}
};

export default footerNav;
