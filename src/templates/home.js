let Home = {
    render : async () => {
        let view = `
        <section class="all-sections">

        <!--Crea un nuevo post-->
        <div id="new-post" class="card">
            <h3>Crear publicación</h3>
            <form action="" id="post">
                <textarea type="textfield" id="input-write-post" placeholder="¿Que hay de nuevo?"></textarea>
                <div>
                <button id="save-post">Publicar</button>
                <button id="cancel-post">Cancelar</button>
                </div>
            </form>
        </div>
        
        <!--Post publicados por el usuario-->
        <div id="show-post">
        <!-- Contenedor del posto publicado y de los comentarios-->
        <div class="container-post">  
        <!-- Contenedor del post escrito por el usuario   -->    
            <div class="user-post">
            <!-- Contenedor de user image and name user  -->
                <div class="post-header">
                    <div class="user-name">
                        <img src="img/default-photo.svg" alt="">
                        <h2></h2>
                    </div>
                    <!-- Imagen/boton de editar -->
                    <div class="edit">
                        <a><i class="fas fa-pen"></i></a>
                    </div>
                </div>
                <!-- Texto del comentario -->
                <div class="post-body">
                    <textarea readonly class="post-content">Aquí se guarda la publicación  </textarea>
                </div>
                <!-- Contenedor de likes y boton comentar -->
                <div class="post-footer">
                    <button class="btn-like"><img src="img/sun.svg" alt=""></button>
                    <button>Comentarios</button>
                </div>
            </div >

            <!-- Contenedor de los comentarios del post   -->   
            <div class="comment-post">
                 <!--Contenedor de comentarios agregados -->
                <div>
                    <ul class="all-comments-post>
                        <li>
                        <img src="img/default-photo.svg" alt="">
                        <input>
                        </li>
                    </ul>
                </div>
             <!--     Agregar comentario -->
                <form action="">
                    <div>
                       <img src="" alt="">     
                       <input type="text"> 
                       <button>Agregar comentario</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
        </section>    
        `



        return view
    }
, after_render: async () => {
    //  Verifica si existe un usuario registrado actual  //
    var user = firebase.auth().currentUser;

    console.log(user.photoURL);
    console.log('Firebase uid:'+user.uid);
    console.log('Firebase email:'+user.email);
    //  Declaracion de variables  //
    const inputWritePost=document.getElementById("input-write-post");
    const savePostButton=document.getElementById("save-post");
    //Crea las colecciones en Cloud Firestore//
    const profiles= db.collection("profile");
    const posts=db.collection("posts");
    const likes=db.collection("likes");
    const comentarios=document.getElementById("comentarios");
 
    // //Añade el perfil del usuario a cloud firestone //
    // profiles.add({
    //     email: user.email,
    //     name: user.displayName,
    //     photo:user.photoURL,
    //     uidUser: user.uid
    // })

    // .then(function(docRef) {
    //     console.log("hola soy perfil mucho gusto: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });    

    // //Añade los likes de un usuario a Clud Firestore //
    // likes.add({
    //     email: user.email,
    //     uidUser: user.uid
    //     /* uidFriend: user .??? */
    // })

    // .then(function(docRef) {
    //     console.log("hola soy like mucho gusto: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });  
    
    //Muestra todos los posts de un usuario //
    posts.where("uidUser", "==", user.uid)
    .get()
    .then(function(posts) {
        //     console.log("soy todos los posts de este usuario")
        //     console.log(doc.data().postText);
            const mostrarData = () => {
                let str =  '';
                posts.forEach(doc => {
                    let post=doc.data().postText;
                    str += 
                       `<div id="prueba">${post}</div>`;//Crea el post en el html                  
                });
            comentarios.innerHTML = str;
            };
            mostrarData();
        })
    // Manejo de errores
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    //Guarda un post en Cloud Firestone //  
    savePostButton.addEventListener("click", ()=>{
        const textPost= inputWritePost.value;
        console.log(textPost);
        //Añade un post a Cloud Firestone
        posts.add({
            postText:textPost,
            email: user.email,
            name: user.displayName,
            uidUser: user.uid
        })
    
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        // Manejo de errores
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
    

    })
    


}

}

export default Home;