let Muro = {
    render : async () => {
        let view = /* html */ `
        <div class="slider">
            <div class=slider-img>
                <ul>
                <li> <img src="../icon/slider1.jpg" /></li>
                <li><img src="https://github.com/JessicaZetina/MEX008-social-network/blob/master/icon/slide2.jpeg" /></li>
                <li> <img src="../icon/slide3.jpeg" /></li>
                <li><img src="../icon/slide4.jpeg" /></li
                <li><img src="../icon/slide5.jpeg" /></li>
                <li><img src="../icon/slider6.jpg" /></li>
                </ul>
            </div>
            </div>
            <div class="container-publicaciones">
            <h1>Realiza tu publicación</h1>
        </div>    
        `
        return view
    },
    after_render : async () => {}
}

export default Muro;

  
  