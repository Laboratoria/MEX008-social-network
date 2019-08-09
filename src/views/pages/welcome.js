const welcome = {
  render: async () => {
    return `
      <div class="center-align">
        <h1>Sacbé</h1>
        <figure class="logo">
          <img src="img/logo.png" alt="logo">
        </figure>
        <div id="login">
          <h5>La mejor ruta para llegar a tu destino</h5>
        `;
  },
  after_render: () => {}
};
export default welcome;
