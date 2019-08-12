const configuration = {
    render: async () => {
        return `
      <section id="configuration">
      <h3>Configuración de la cuenta</h3>
      <p>Administra la información sobre tu cuenta</p>
      <p>información personal</p>
      <p>Seguridad</p>
      <h3>Configuración</h3>
    </section>
          `;
    },
    after_render: () => { }
};
export default configuration;
