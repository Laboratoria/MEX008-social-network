const profile = {
    render: async () => {
      return `
      <section id="profile">
      <h3>Perfil</h3>
      <div class="divider"></div>
      <div class="row">
      <div class="col s5 m4">
      <img id="pic-profile" class="circle" src="img/readme/ramona.png">
      </div>
      <div class="col s7 m8">
      <br><br>
      <p><i class="material-icons tiny">person</i> Ramona Díaz</p>
      <p><i class="material-icons tiny">email</i> ramona@gmail.com</p>
      <p><i class="material-icons tiny"></i> 24 años </p>
      <p><i class="material-icons tiny">phone_iphone</i> 01 55 6724 5350</p>
      <p><i class="material-icons tiny">location_on</i> Ciudad de México</p>
      </div>
      </div>
      <br>
      <h6>Hola soy Ramona Díaz, actualmente  soy estudiante de Diseño en UAM Azcapotzalco
      me considero una persona alegre, decidida y que en su tiempo libre, ama rodar
      por la ciudad de México</h6>
    </section>
          `;
    },
    after_render: () => {}
  };
  export default profile;
  