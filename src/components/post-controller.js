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