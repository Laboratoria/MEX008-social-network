const footerNav = {
  render: async () => {
    let view = `
    <nav>
    <div class="nav-wrapper valign-wrapper">
  <a href="#!" class="brand-logo center"><i class="material-icons"><img id="footer-icon" src="img/logo.png" alt="logo"></i>Sacbé</a>
   </div>
  </nav>
        `;
    return view;
  },
  after_render: async () => {}
};

export default footerNav;
