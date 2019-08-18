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

            <box>
            <progress value="0" max="100" id="uploader">0%</progress>
            <input type="file" value="upload" id="fileButton>
    
            </box>
       
            
    
            </section>

            
            `
        return view
    },
    after_render: async() => {
        document.getElementById('btn-post').addEventListener('click', addPost);

        //Obteniendo elementos del DOM para storage
        const uploader = document.getElementById('uploader');
        const fileButton = document.getElementById('file-button');

        //Escuchar la selección del archivo
        fileButton.addEventListener('change', (event)=> {
            //Obtener archivo
            let file = e.target.files[0]
            
            //Crear una referencia de storage
            firebase.storage().ref('posted_photos/' + file.name)

            //Subir el archivo

            //Cargar la barra de progreso

        })
        
    }
}
export default Wall;