import elementLI from "../components/elementLI.js";
import modal from "../components/modal.js";
import addBtn from "../components/addBtn.js";
import Utils from "../../services/Utils.js";

const

const timeline = {
  render: async () => {
    const publications = Utils.getTimeline();
    return `
    <section id="timeline">
            <div id="publication-list">
                <h2> Publicaciones</h2>
                <ul>
                   ${publications
                     .map(publication => elementLI.render(publication))
                     .join("\n ")}
                </ul>
            </div>
            <div id="modal-more-container">
            ${modal}
            </div>
            <div id="add-btn" class="right-align">
            ${addBtn}
            </div>
            </section>
        `;
                   },
  after_render: () => {},
                  };

export default timeline;
