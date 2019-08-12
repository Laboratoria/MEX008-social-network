const profile = {
    render: async () => {
      return `
      <secttion id="profile">
      <h3>Perfil</h3>
      <hr>
      <img src="" alt="">
      <p>Nombre: Ramona Díaz</p>
      <p>Correo:ramona@gmail.com </p>
      <p>Edad: 24 años </p>
      <p>Cel: 5567245350</p>
      <p>Ciudad: CDMX</p>
    </secttion>
          `;
    },
    after_render: () => {}
  };
  export default profile;
  