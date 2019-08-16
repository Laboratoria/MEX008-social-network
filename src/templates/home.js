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
    //Crea las colecciones en Cloud Firestore//
    // const profiles= db.collection("profile");
    const posts=db.collection("posts");

    const likes=db.collection("likes");
    const comentarios=document.getElementById("comentarios");


    function renderPost(doc){
        // const postBody=document.getElementById("post-body");

        //Show-post container 
        const showPost = document.getElementById('show-post');
        showPost.appendChild(divContainerPost); //Adjunta el hijo (divContainerPost) al padre (showPost)

        //container-post
        const divContainerPost = document.createElement('div');
        divContainerPost.setAttribute("class","container-post");
        divContainerPost.appendChild(userPost, commentPost); //2 hijos?

        //user-post
        const userPost = document.createElement('div');
        userPost.setAttribute("class","user-post");
        userPost.appendChild(postHeader, postBody, postFooter);

        //post-header
        const postHeader = document.createElement('div');
        postHeader.setAttribute("class","post-header");
        postHeader.appendChild(userName, edit);

        //user-name
        const userName = document.createElement('div');
        userName.setAttribute("class","user-name");
        userName.appendChild(userPhoto, userNamePost);

        //user-photo
        const userPhoto = document.createElement('img');
        userPhoto.setAttribute('src','img/default-photo.svg');//Reemplazar con función
        
        //user-name-post
        const userNamePost = document.createElement('h2');
        userNamePost.setAttribute('class','user-name-post');

        //edit
        const edit = document.createElement('div');
        edit.setAttribute("class","edit");
        edit.appendChild(editButton);

        //edit-button
        const editButton = document.createElement('a');
        editButton.setAttribute('href');
        editButton.appendChild(editIcon);

        //edit-icon
        const editIcon = document.createElement('i');
        editIcon.setAttribute('class','fas fa-comment');

        //post-body

        const postBody = document.createElement('div');
        postBody.setAttribute("class","post-body");
        postBody.appendChild(textTarea); 

     //textarea
        const textTarea = document.createElement('textarea');
        const textPostNode = document.createTextNode(doc.data().postText); //Post hecho
        textTarea.setAttribute("class","post-content");
        textTarea.appendChild(textPostNode);
        

        //post-footer
        const postFooter = document.createElement('div');
        postFooter.setAttribute('class','post-footer');
        postFooter.appendChild(likeButton, commentsButton);

        //btn-like
        const likeButton = document.createElement('button');
        likeButton.setAttribute('class','btn-like');


        //comments-button
        const commentsButton = document.createElement('button');
        const commentsBTitle = document.createTextNode('Comentarios');
        commentsButton.appendChild(commentsBTitle);


        //comment-post
        const commentPost = document.createElement('div');
        commentPost.setAttribute('class','comment-post');
        commentPost.appendChild(desorderListBox, newCommentBox);

        //desorderListBox
        const desorderListBox = document.createElement('div');
        desorderListBox.appendChild(allCommentPost);

        
        //all-comment-post


        const allCommentPost = document.createElement('ul');
        allCommentPost.setAttribute('class','all-comment-post');
        allCommentPost.appendChild(commentBox);

        //commentbox
        const commentBox = document.createElement('li');
        commentBox.appendChild(photoComments, comment);

        //photo comments
        const photoComments = document.createElement('img');
        photoComments.setAttribute('src','img/default-photo.svg');

        //comment
        const comment = document.createElement('p');
        const commentText = document.createTextNode();//Comentarios hechos
        comment.appendChild(commentText);

        //new-comment
        const newCommentBox = document.createElement('div');
        newCommentBox.setAttribute('class', 'new-comment');
        newCommentBox.appendChild(formComment);

        const formComment = document.createElement('form');
        formComment.appendChild(textAreaComment, newCommentButton);

        const textAreaComment = document.createElement('textarea');

        const newCommentButton = document.createElement('button');
        newCommentButton.appendChild(newCommentBTitle);

        const newCommentBTitle = document.createTextNode('Comentar');
        
     
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
    //querysnapshot contiene los resultados(docsnapshot objects) de una consulta
    posts.onSnapshot(snapshot => {  
        console.log(snapshot);
        let changes = snapshot.docChanges();
        console.log(changes);
        changes.forEach(change => {
            console.log(change);
            console.log(change.doc);
            console.log(change.doc.data());
            if(change.type == 'added'){
                renderPost(change.doc);
            } 
        });
    });

    //Guarda un post en Cloud Firestone //  
    savePostButton.addEventListener("click", ()=>{
        let textPost= inputWritePost.value;
        console.log(textPost);
        //Añade un post a Cloud Firestone
        posts.add({
            postText:textPost,
            email: user.email,
            name: user.displayName,
            uidUser: user.uid
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