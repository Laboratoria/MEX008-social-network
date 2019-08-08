let error404 = {

    render : async () => {
        let view =  /*html*/`
            <figure>
                <img src="./imgenes/triste.jpg" alt="">
            </figure>
        `
        return view
    }
    , after_render: async () => {}
}
export default error404;