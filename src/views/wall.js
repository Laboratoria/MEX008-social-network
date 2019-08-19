let Wall = {
    render: async() => {
        let view = `
            <div id="container-post" class="col s12 m7 box-title-post">
                <h2 class="header">Publica sobre tu amigo</h2>
                <div class="card horizontal">
                <div class="card-image">
                    <img id="post-img" src="./img/240.jpg">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <form id="post-form" class="post-form">
                    <textarea class="textarea post-form" name="post" id="post-txt" cols="30" rows="3" placeholder="Hoy Fido..."></textarea>
                    <p id="issue-root"></p>
                    <a id="btn-post" class="waves-effect waves-light btn">Publicar</a>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div id="wall-posts"></div>
            
            `
        return view
    },
    after_render: async() => {
        document.getElementById('btn-post').addEventListener('click', addPost);

    }
}
export default Wall;