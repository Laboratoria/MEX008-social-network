const settings = {
    render: async () => {
        return `
      <section id="settings">
      <h4>Configuración de la cuenta</h4>
      <hr>
      <h6>Administra la información sobre tu cuenta</h6>
      <h6>Información personal</h6>
      <h6>Privacidad de las publicaciones</h6>
      <h6>Seguridad</h6>
    </section>
          `;
    },
    after_render: () => { }
};
export default settings;
