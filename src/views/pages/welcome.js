const welcome = {
  render: async () => {
    return `
    <section id="welcome" class="">
      <div class="center-align">
        <h1>Sacbé</h1>
        <figure class="logo">
          <img src="img/logo.png" alt="logo">
        </figure>
        <div id="login">
          <h5>La mejor ruta para llegar a tu destino</h5>

          <!-- Firebase UI-->
          <div id="firebaseui-auth-container"></div>
          <div id="loader">Loading...</div>
        </div>
      </div>
    </section>
        `;
  },
  after_render: () => {}
};
export default welcome;
