let Navbar = {
    render : async () => {
        let view = `
        <nav>
            <figure>
                <img src="img/logo.svg" alt="logo">
            </figure>
            <div>
                <figure id=photo-head ></figure>
                <span id="name-head"></span>
            </div>
        </nav>`
      
    return view
},

after_render: async () => {}


}

export default Navbar;
    