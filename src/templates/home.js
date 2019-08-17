let Home = {
    render : async () => {
        let view = `
        <section class="all-sections">

        <!--Crea un nuevo post-->
        <div id="new-post" class="card">
            <h3>Crear publicación</h3>
            <form action="" id="post">
                <textarea type="texfield" id="input-write-post" placeholder="¿Que hay de nuevo?"></textarea>
                <div>
                <button id="save-post">Publicar</button>
                <button id="cancel-post">Cancelar</button>
                </div>
            </form>
        </div>
        
        <!--Post publicados por el usuario-->
        <div id="show-post">

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
    const showPost = document.getElementById('show-post');

    //Crea las colecciones en Cloud Firestore//
    const posts=db.collection("posts");
    // const likes=db.collection("likes");
    

    //Funcion para crear un post en el DOM
    function renderPost(doc){
        //container-post
        const divContainerPost = document.createElement('div');
        divContainerPost.setAttribute("class","container-post");
        divContainerPost.setAttribute('id', doc.id)
        showPost.appendChild(divContainerPost); 

        //user-post
        const userPost = document.createElement('div');
        userPost.setAttribute("class","user-post");
        divContainerPost.appendChild(userPost);

        //post-header
        const postHeader = document.createElement('div');
        postHeader.setAttribute("class","post-header");
        userPost.appendChild(postHeader);

        //post-body
        const postBody = document.createElement('div');
        postBody.setAttribute("class","post-body");
        userPost.appendChild(postBody);

        //user-name
        const userName = document.createElement('div');
        userName.setAttribute("class","user-name");
        postHeader.appendChild(userName);

        //user-photo
        const userPhoto = document.createElement('img');
        userPhoto.setAttribute('class',"user-image");
        userPhoto.setAttribute('src',doc.data().photoURL);//Reemplazar con función
        userName.appendChild(userPhoto);
        
        //user-name-post
        const userNamePost = document.createElement('h3');
        const textNamePost = document.createTextNode(doc.data().name);
        userNamePost.appendChild(textNamePost);
        userNamePost.setAttribute('class','user-name-post');
        userName.appendChild(userNamePost);

        //edit
        const edit = document.createElement('div');
        edit.setAttribute("class","edit");
        postHeader.appendChild(edit);

        //edit-button
        const editButton = document.createElement('a');
        // editButton.setAttribute('href');
        edit.appendChild(editButton);
        
        //edit-icon
        const editIcon = document.createElement('i');
        editIcon.setAttribute('class','fas fa-pen');
        // deleteIcon.setAttribute("src",);
        editButton.appendChild(editIcon);

        //delete
        const deleteB = document.createElement('div');
        deleteB.setAttribute("class","delete");
        deleteB.setAttribute("id","delete");
        postHeader.appendChild(deleteB);
  
        //delete-button
        const deleteButton = document.createElement('a');
        // deleteButton.setAttribute('href');
        deleteB.appendChild(deleteButton);
          
        //delete-icon
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class','fas fa-trash');
        // deleteIcon.setAttribute("src",);
        deleteButton.appendChild(deleteIcon);
        
        //textarea
        const textTarea = document.createElement('textarea');
        // const textPostNode = document.createTextNode(doc.data().postText); //Post hecho
        const textPostNode = document.createTextNode(doc.data().postText); // doc.data().postText;
        textTarea.setAttribute("class","post-content");
        textTarea.setAttribute("disabled","true")
        textTarea.appendChild(textPostNode);
        postBody.appendChild(textTarea);
        // textTarea.appendChild(textPostNode);??
        
        //post-footer
        const postFooter = document.createElement('div');
        postFooter.setAttribute('class','post-footer');
        userPost.appendChild(postFooter);

        //btn-like
        const likeButton = document.createElement('button');
        const likeTitle = document.createTextNode('like');
        likeButton.setAttribute('class','btn-like');
        likeButton.appendChild(likeTitle);
        postFooter.appendChild(likeButton);

        //comments-button
        const commentsButton = document.createElement('button');
        const commentsBTitle = document.createTextNode('Comentarios');
        commentsButton.appendChild(commentsBTitle);
        postFooter.appendChild(commentsButton);

        //comment-post
        const commentPost = document.createElement('div');
        commentPost.setAttribute('class','comment-post');
        divContainerPost.appendChild(commentPost);
      
        //desorderListBox
        const desorderListBox = document.createElement('div');
        commentPost.appendChild(desorderListBox);
        
        //all-comment-post
        const allCommentPost = document.createElement('ul');
        allCommentPost.setAttribute('class','all-comment-post');
        desorderListBox.appendChild(allCommentPost);
        
        //commentbox
        const commentBox = document.createElement('li');
        allCommentPost.appendChild(commentBox);

        //photo comments
        const photoComments = document.createElement('img');
        photoComments.setAttribute('src','img/default-photo.svg');
        commentBox.appendChild(photoComments);

        //comment
        const comment = document.createElement('p');
        const commentText = document.createTextNode("Un comentario");//Comentarios hechos
        comment.appendChild(commentText);
        commentBox.appendChild(comment);
        
        //new-comment
        const newCommentBox = document.createElement('div');
        newCommentBox.setAttribute('class', 'new-comment');
        commentPost.appendChild(newCommentBox);
        
        //form-comment
        const formComment = document.createElement('form');
        newCommentBox.appendChild(formComment);

        //textTarea comment
        const textAreaComment = document.createElement('textarea');
        formComment.appendChild(textAreaComment);

        //new comment button
        const newCommentButton = document.createElement('button');
        const newCommentBTitle = document.createTextNode("Comentar");//Comentarios hechos
        newCommentButton.appendChild(newCommentBTitle);
        formComment.appendChild(newCommentButton);


    //Funcion que borra un post de la coleccion posts de la BD utilizando el metodo delete      
    deleteB.addEventListener('click', () => {
        console.log(doc.id);
        posts.doc(doc.id).delete();
    });


    edit.addEventListener('click',()=>{
        console.log(doc.id);
        document.querySelector(".post-content").disabled = false;
    });

    // editButton.addEventListener('click', () => {
    //     console.log(doc.id);
    //     textTarea.setAttribute('disabled','false');
    //     posts.doc(doc.id).update({postText: textPostNode});
    // });


    // commentPostButton.addEventListener("click", ()=>{
    //     let textPost= inputWritePost.value;
    //     console.log(textPost);
    //     //Añade un post a la coleccion posts en la BD utilizando el metodo add
    //     comments.add({
    //         postText:textPost,
    //         email: user.email,
    //         name: user.displayName,
    //         uidUser: user.uid,
    //         photoURL: user.photoURL
    //     })

    //     .then(function(doc) {
    //         console.log("Document written with ID: ", doc.id);
    //     })
    //     // Manejo de errores
    //     .catch(function(error) {
    //         console.error("Error adding document: ", error);
    //     });
    // })


    
    

    }
    
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
    // posts.where("uidUser", "==", user.uid)
    // .get()
    // .then(function(posts) {
    //     //     console.log("soy todos los posts de este usuario")
    //     //     console.log(doc.data().postText);
    //         const mostrarData = () => {
    //             let str =  '';
    //             posts.forEach(doc => {
    //                 let post=doc.data().postText;
    //                 str += 
    //                    `<div id="prueba">${post}</div>`;//Crea el post en el html                  
    //             });
    //         comentarios.innerHTML = str;
    //         };
    //         mostrarData();
    //     })
    // // Manejo de errores
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });

    //Listener para la coleccion posts//
    //Si la coleccion posts cambia (editar, borrar,crear) se activa el metodo onsnapshot
    //el metodo onsnapshot adjunta un oyente para eventos QuerySnapshot. 
    //Un evento Querysnapshot contiene los resultados(docsnapshot objects) de una consulta(cambio)
    posts.onSnapshot(snapshot => {  
        console.log(snapshot);
        let changes = snapshot.docChanges();
        console.log(changes);
        changes.forEach(change => {
            console.log(change);
            console.log(change.doc);
            console.log(change.doc.data());
            //Ejecuta la funcion si un documento fue añadido a la BD
            if(change.type == 'added'){
                renderPost(change.doc);
            } 
            //Ejecuta la funcion si un documento fue eliminado de la BD
            else if (change.type == 'removed'){
                console.log("soy el post borrado"+change.doc.id);
                let deletePost = showPost.querySelector('[id=' + change.doc.id + ']');
                showPost.removeChild(deletePost);
            }
            // else if (change.type == 'modified'){
            //     let modifiedPost = textTarea
            // }
        });
    });

    //Guarda un post en la coleccion posts de la BD //  
    savePostButton.addEventListener("click", ()=>{
        let textPost= inputWritePost.value;
        console.log(textPost);
        //Añade un post a la coleccion posts en la BD utilizando el metodo add
        posts.add({
            postText:textPost,
            email: user.email,
            name: user.displayName,
            uidUser: user.uid,
            photoURL: user.photoURL
        })

        .then(function(doc) {
            console.log("Document written with ID: ", doc.id);
        })
        // Manejo de errores
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    })



 

}

}

export default Home;