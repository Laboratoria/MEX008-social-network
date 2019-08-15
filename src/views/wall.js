let Wall = {
    render: async() => {
        let view = `
        <section class="section-timeline">
        <div class="col s12 m7 box-title-post">
        <h2 class="header">Publica sobre tu amigo</h2>
        <div class="card horizontal">
         
        <div class="card-stacked">
            <div class="card-content">
            <form class="post-form">
            <textarea class="textarea post-form" name="post" id="post-txt" cols="30" rows="3" placeholder="¡Cuéntanos algo sobre ti!"></textarea>
            <button id="btn-post" class="btn waves-effect waves-light" type="submit" name="action">Publicar
    </button>
            </form>
            </div>
        </div>
        </div>
    </div>
            
    
            </section>
            <section class="section-timeline">
       
            
    
            </section>

            
            `
        return view
    },
    after_render: async() => {
        document.getElementById('btn-post').addEventListener('click', addPost);
    }
}
export default Wall;