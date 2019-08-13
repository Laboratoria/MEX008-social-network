let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <figure>
                <img src="img/ponido1.jpg" alt="">
            </figure>
        `
        return view
    }
    , after_render: async () => {
        console.log("hola desde el ERROR");
        
    }
}
export default Error404;