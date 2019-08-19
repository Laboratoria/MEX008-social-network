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
                    <progress value="0" max="100" id="uploader">0%</progress>
                    <input type="file" value="upload" id="fileButton"/>
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

    after_render: async () => {
       document.getElementById('btn-post').addEventListener('click', addPost);
        // Cloud storage
//Obteniendo elementos del DOM para storage
const uploader = document.getElementById('uploader');
const fileButton = document.getElementById('fileButton');
//Escuchar la selección del archivo
fileButton.addEventListener('change', async (e) => {
    //Obtener archivo
 let file = e.target.files[0];

    //Crear una referencia de storage
    let storageRef = firebase.storage().ref('posted_photos/' + file.name);

    //Subir el archivo
    let task = storageRef.put(file);

    //Cargar la barra de progreso
    task.on('state_changed',
        function progress(snapshot) {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;

        },
        function error(err) {

        },
        function complete() {

        });

})

        // const savingPhotoFirebase = (chargeimg) => {
        //     const addImage = chargeimg.target.files[0];
        //     const refStorage = storageService.ref().child(`imagenesdemascotas/${addImage.name}`);
        //     const uploadTask = refStorage.put(addImage)
        //     .then(() => console.log('Uploaded file!'))
        //     .then(() => 
        //     refStorage.getDownloadURL()
        //     ).then((url) => {
        //         const urlPhoto = url;
        //         console.log(urlPhoto);
        //         return urlPhoto;
        //     })
        //     .cath(err => {
        //         console.log('Error:')
        //         console.log(err)
        //     });
        // }

        // savingPhotoFirebase.addEventListener('change', (chargeimg) => {
        //     console.log('Subiendo fotos')
        //     const urlPhotoResult = savingPhotoFirebase(chargeimg);
        // });

        
        
        
        // const btnUpload = document.getElementById('upload-image');
        // btnUpload.addEventListener('click' async (ev) => {
        //     ev.preventDefault();
        //     const inputFile = document.getElementById('image-file');
        //     const file = inputFile.file[0];
        //     const storageRef = firebase.storage().ref();
        //     const imageRef = storageRef.child('images/file3.jpg');
        //     const snapshot = await imageRef.put(file);
        //     const url = await snapshot.ref.getDownloadURL();
        //     document.getElementById('contenido').innerHTML = '<img src="' + url '"/>';

        // })
        
        // const btnUpload = document.getElementById('upload-image');
        // btnUpload.addEventListener('click' async (ev) => {
        //     ev.preventDefault();
        //     const inputFile = document.getElementById('image-file');
        //     const file = inputFile.file[0];
        //     const storageRef = firebase.storage().ref();
        //     const imageRef = storageRef.child('images/file3.jpg');
        //     imageRef.put(file).then(function(snapshot){
        //         console.log ('uploaded a blob or file');
        //         snapshot.ref.getDownloadURL().then(function(url){
        //             console.log('file available at', url);
        //             document.getElementById('contenido').innerHTML = '<img src="' + url '"/>';
        //         });

        //     });

        // });
 }

}
export default Wall;