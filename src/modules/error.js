let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <figure>
                <img src="../icon/error404.jpg" alt="error404">
            </figure>
        `
        return view
    }
    , after_render: async () => {}
}
export default Error404;