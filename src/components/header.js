let NavBar = {
    render: async() => {
        let view = `
        <nav class="nav-color"></nav>
        <!-- Aquí va el logo <figure>
          <img src="./img/logo-pet.png" alt="logo pet" width="200" height="50px">
      </figure>  -->
    `
        return view
    },
    after_render() => {}
}

export default NavBar;