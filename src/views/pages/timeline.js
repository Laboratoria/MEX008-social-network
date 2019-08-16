import elementLI from "../components/elementLI.js";
//import Utils from "../../services/Utils.js";

const timeline = {
  render: async () => {
      let LI = await elementLI.render();

    return `
    <section>
    ${LI}

    </section>
        `;
  },
  after_render: () => {
  //Inicializando modales   
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  },
};

export default timeline;