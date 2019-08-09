const error404 = {
  render: async () => {
    return `
    <section id="error404">
            <div>
                <h2>No existe esta pagina "Error404"</h2>
            </div>
            </section>
        `;
  },
  after_render: () => {}
};
export default error404;
