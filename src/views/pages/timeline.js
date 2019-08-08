
import Utils from "../../services/Utils.js";

const timeline = {
  render: async () => {
    const publications = Utils.getTimeline();
    return `
            <div>
                <h2> Publicaciones</h2>
                <ul>
                   ${publications
                     .map(publication => {
                       return LI.render(publication);
                     })
                     .join("\n ")}
                
                </ul>

            </div>
        `;
  },
  after_render: () => {}
};
export default timeline;
