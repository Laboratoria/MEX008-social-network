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
    let edit = '';
    let verified = '';
    let photoUrl = '';
    let likesArr = [];
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
      editDate: edit,
      likes: likesArr,
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

  likePost: (id) => {
    const postLike = db.collection("posts").doc(id);

    postLike.get().then(function (post) {
      if (post.exists) {
        const user = firebase.auth().currentUser;
        let likesArr = post.data().likes;
        if (likesArr.indexOf(user.uid) < 0) {
          likesArr.push(user.uid);
         } else {
        const index = likesArr.indexOf(user.uid);
           likesArr.splice(index, 1);
          };
          return postLike.update({
            likes: likesArr,
          })
          .then(function() {
              console.log("'likes' successfully updated!");
          })
          .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error updating 'likes': ", error);
          });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
  console.log("Error getting document:", error);
});
  }
};

export default Utils;
