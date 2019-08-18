let printPost = user => {
    let rootPost = document.getElementById('wall-posts');
    let userUid = JSON.parse(localStorage.getItem('user'));
    rootPost.innerHTML = '';
    user.forEach(msj => {
        let post = msj.data();
        if (post.usuario == userUid.uid) {
            // console.log('ya sirvooooo')
            let card = `
                            <div class="col s12 m7">
                                <h2 class="header">post</h2>
                                <div class="card horizontal">
                                <div class="card-stacked">
                                    <div class="card-content">
                                    <p>${post.nombre}</p>
                                    <!--<p>${post.hora}</p>-->
                                    <p>${post.postContent}</p>
                                    <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            `
            rootPost.insertAdjacentHTML("afterbegin", card);
        } else {
            let card = `
                        <div class="col s12 m7">
                            <h2 class="header">post</h2>
                            <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                <p>${post.nombre}</p>
                                <!--<p>${post.hora}</p>-->
                                <p>${post.postContent}</p>
                            </div>
                            </div>
                            </div>
                        </div>
                        `
            rootPost.insertAdjacentHTML("afterbegin", card)
        }
    })
}


// let printPost = user.data() => {
//     let rootPost = document.getElementById('wall-posts');
//     let userUid = JSON.parse(localStorage.getItem('user'));
//     // console.log(userId);    
//     rootPost.innerHTML = '';
//     user.forEach(user.data() => {
//         // console.log(post)
//         if (post.usuario == userUid.uid) {
//             console.log(post.data());
//             let post = post.data();
//             let card = `
//                             <div class="col s12 m7">
//                                 <h2 class="header">post</h2>
//                                 <div class="card horizontal">
//                                 <div class="card-stacked">
//                                     <div class="card-content">
//                                     <p>${post.nombre}</p>
//                                     <p>${post.hora}</p>
//                                     <p>${post.postContent}</p>
//                                     <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>
//                             `
//             rootPost.insertAdjacentHTML('beforeend', card);
//         } else {
//             let card = `
//                         <div class="col s12 m7">
//                             <h2 class="header">post</h2>
//                             <div class="card horizontal">
//                             <div class="card-stacked">
//                                 <div class="card-content">
//                                 <p>${post.nombre}</p>
//                                 <p>${post.hora}</p>
//                                 <p>${post.postContent}</p>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                         `
//         }
//     });
// }