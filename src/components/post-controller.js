let printPost = user => {
        let userId = JSON.parse(localStorage.getItem('user'));
        let rootPost = document.getElementById('wall-posts');
        rootPost.innerHTML = '';
        user.for


    }
    // let printPost = ((user) => {
    //     let card = `
    //     <div class="col s12 m7">
    //     <h2 class="header">post</h2>
    //     <div class="card horizontal">
    //       <div class="card-image">
    //         <img src="${user.photoURL}">
    //       </div>
    //       <div class="card-stacked">
    //         <div class="card-content">
    //         <p>${post.name}</p>
    //           <p>${post.postContent}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //     `
    //     rootPost.innerHTML = card

// }) 

//let addPost = () => {
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user.uid != '') {
//             let postTxt = document.getElementById('post').value;
//             console.log(postTxt);
//             db.collection("post").add({
//                     usuario: user.uid,
//                     postContent: postTxt
//                 })
//                 .then(function(docRef) {
//                     console.log("Document written with ID: ", docRef.id);
//                 })
//                 .catch(function(error) {
//                     console.error("Error adding document: ", error);
//                 });

//             // User is signed in.
//         } else {
//             console.log("no hay usuario logeado")
//                 // No user is signed in.
//         }
//     });
// }

// module.exports = {
//     addPost
// }




// export default PostController;

// let addPost = () => {
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             console.log(user.uid)

//             // User is signed in.
//         } else {
//             console.log("no hay usuario logeado")
//                 // No user is signed in.
//         }
//     });


// }



// export const addPost = (contentPost, userId, userName, privacyPost) => {
//     firebase.firestore().collection('posts').add({
//         content: contentPost,
//         UID: userId,
//         name: userName,
//         privacyPost: privacyPost,
//         date: firebase.firestore.FileValue.serverTimestamp()
//     })
// };

// db.collection("post").add({
//     usuario: "Juanita",
//    postContent:'';

// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// firebase.auth().onAuthStateChanged(function(user) {
// if (user) {
//     console.log(user)

//     // User is signed in.
// } else {
//     console.log("no hay usuario logeado")
//         // No user is signed in.
// }
// });