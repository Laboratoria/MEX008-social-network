// aqui exportaras las funciones que necesites

export const savePost = () => {
  const text = document.getElementById('textarea-post').value;
  let user = firebase.auth().currentUser;
  let verified = '';
  let name, photoUrl;
  
  if (user != null) {
    name = user.displayName;
    photoUrl = user.photoURL;
    if (user.emailVerified == true) {
      verified = `<a class="waves-effect"><i class="material-icons tiny">verified_user</i></a>`; 
    };
  }

  db.collection("posts").add({
    uid: user.uid,
    displayName: name,
    textPost: text,
    photo: photoUrl,
    emailVerified: verified,
    date: `${new Date().getTime()}`,
    likes: '0',
    status: 'no-like',
})
.then(function(postRef) {
  document.getElementById('textarea-post').value = '';
  console.log("Post written with ID: ", postRef.id);
})
.catch(function(error) {
    console.error("Error adding post: ", error);
});
};

export default savePost;





