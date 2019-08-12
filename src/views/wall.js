let Wall = {
    render: async() => {
        let view = `
    <main>
      <div class="wall-bground">
        <div id="post-container">
        <form class="post-form">
          <div class="post-box">
            <textarea  class="textarea" name="post" id="post" cols="30" rows="3" placeholder="¡Cuéntanos algo sobre ti!"></textarea>
          </div>
          <div class="send-post">
              <select class="buttons-post" id="privacy-select">
                  <option value="publico">Publico</option>
                  <option value="seguidores">Seguidores</option>
              </select>
              <button class="print-post-button" id="print-button">Publicar</button>
          </div>
        </form>
      </div>
      </div>
    </main`
            return view
        },
        after_render: async () => {}

    }
export default Wall;