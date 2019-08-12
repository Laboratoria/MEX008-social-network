const error404 = {
  render: async () => {
    return `
    <section id="error404" class="center-align valign-wrapper">
            <div>
                <h4>No existe esta pagina</h4>
                <h3>"Error404"</h3>
            </div>
            </section>
        `;
  },
  after_render: () => {}
};
export default error404;
