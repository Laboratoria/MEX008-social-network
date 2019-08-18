const Utils = {
  pageRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || "/";
    const separator = url.split("/");
    const request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = separator[1];
    request.verb = separator[2];
    request.id = separator[3];
    return request;
  },

  savePost:  () => {
    const text = document.getElementById('textarea-post').value;
    let user = firebase.auth().currentUser;
    let verified = '';
    let photoUrl = '';
    let name;
    
    if (user != null) {
      name = user.displayName;
      if (user.photoUrl !== null) {
        photoUrl = user.photoURL; 
      };
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
      date: new Date().getTime(),
      likes: '0',
      status: 'no-like',
  })
  .then(function(post) {
    document.getElementById('textarea-post').value = '';
    console.log("Post written with ID: ", post.id);
  })
  .catch(function(error) {
      console.error("Error adding post: ", error);
  });
  },

  deletePost: (id) => {
    db.collection("posts").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });  
  },

  editPost: (id) => {
    const post = db.collection("posts").doc(id);
    const postEdited = document.getElementById('textarea-edit').value;
    // Set the "capital" field of the city 'DC'
    return post.update({
      textPost: postEdited,
      editDate: new Date().getTime(),
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  },
};

export default Utils;
