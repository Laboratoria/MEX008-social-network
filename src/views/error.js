let Error404 = {

    render: async() => {
        let view = /*html*/ `
        <section class="error-section">
        <box>
        <h1> There was a small mistake </h1>
        </box>
        <video src="./img/Closeup_of_Cat.mp4" autoplay loop muted>
        
        </video>
        

        </section>

        `
        return view
    },
    after_render: async() => {
        document.getElementById('hamb-menu').style.display = 'none'; 
    }
}
export default Error404;

//  <figure>
// <img src="img/ponido1.jpg" alt="">
// </figure>