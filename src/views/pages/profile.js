const profile = {
    render: async () => {
      const user = firebase.auth().currentUser;
      let verified = '';
      let name, email, photo;

/*     // Función para actualizar perfil
     user.updateProfile({
       i: "Estudiante de Laboratoria",
       phoneNumber: "5530214576",
      }).then(function() {
        console.log('Update successful');
      }).catch(function(error) {
        console.log('Update error');
      });   */
      
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photo = user.photoURL;
        if (user.emailVerified == true) {
          verified = `<a class="waves-effect"><i class="material-icons tiny">verified_user</i></a>`; 
        };
/*         if (user.phoneNumber !== null) {
          phone = user.phoneNumber; 
        };
        if (user.i !== null) {
          description = user.i; 
        }; */
      }

      


      return `
      <section id="profile">
      <h3>Perfil</h3>
      <div class="divider"></div>
      <div class="row">
      <div class="col s5 m4">
      <img id="pic-profile" class="circle" src="${photo}">
      </div>
      <div class="col s7 m8">
      <br><br>
      <p><i class="material-icons tiny">person</i>${name}</p>
      <p><i class="material-icons tiny">email</i>${email} ${verified} </p>
      <p><i class="material-icons tiny">phone_iphone</i> 5530214576 </p>
      <p><i class="material-icons tiny">location_on</i> Ciudad de México</p>
      </div>
      </div>
      <br>
      <h6></h6>
    </section>
          `;
    },
    after_render: () => {}
  };
  export default profile;
  