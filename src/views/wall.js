let Wall = {
  render: async () => {
    let view = `
  <div class="col s12 m7 box-title-post">
    <h2 class="header">Publica sobre tu amigo</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img id="post-img" src="./img/240.jpg">
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <form class="post-form">
          <textarea  class="textarea post-form" name="post" id="post" cols="30" rows="3" placeholder="¡Cuéntanos algo sobre ti!"></textarea>
          <button class="print-post-button" id="print-button">Publicar</button>
        


          </form>
        </div>
      </div>
    </div>
  </div>

 
            `
    return view
  },
  after_render: async () => {
    buttonSubmit.addEventListener("click", submitPost);

  }

}
export default Wall;