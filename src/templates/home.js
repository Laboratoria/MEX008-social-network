let Home = {
    render : async () => {
        let view = `
        <section class="all-sections">
        <!--Crea un nuevo post-->
        <div id="new-post" class="card">
            <h3>Crear publicación</h3>
            <form action="" id="post">
                <input type="textfield" id="input-write-post" placeholder="¿Que hay de nuevo?"></input>
                <button id="save-post">Publicar</button>
                <button id="cancel-post">Cancelar</button>
            </form>
        </div>
        
        <!--Post publicados por el usuario-->
        <div id="show-post" style="background-color:yellow" >
        <!-- Contenedor del posto publicado y de los comentarios-->
        <div id="property-post" style="background-color:green">  
          Property post
        <!-- Contenedor del post escrito por el usuario   -->    
            <div id="user-post" style="background-color:blue">
                user post
                <div style="background-color:red">
                    <!-- Contenedor de user image and name user  -->
                    <div style="background-color:pink">
                        <img src="" alt="">
                        <h2></h2>
                    </div>
                    <!-- Imagen/boton de editar -->
                    <img src="" alt="" style="background-color:black">
                </div>
                  <!-- Texto del comentario -->
                <p id="comentarios">Comentarios</p>
                <!-- Contenedor de likes y boton comentar -->
                <div>  
                    <img src="" alt="">
                    <button>Publicar</button>
                </div>
            </div>
            <!-- Contenedor de los comentarios del post   -->   
            <div id="comment-post">
              Coment post
                 <!--Contenedor de comentarios agregados -->
                <div style="background-color:fuchsia">
                    <ul>
                        Lista desordenada
                    </ul>
                </div>
             <!--     Agregar comentario -->
                <form action="" style="background-color:greenyellow">
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