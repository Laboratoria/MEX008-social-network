const configuration = {
    render: async () => {
        return `
      <section id="configuration">
      <h4>Configuración de la cuenta</h4>
      <hr>
      <p>Administra la información sobre tu cuenta</p>
      <p>información personal</p>
      <p>Privacidad de las publicaciones</p>
      <p>Seguridad</p>
    </section>
          `;
    },
    after_render: () => { }
};
export default configuration;
