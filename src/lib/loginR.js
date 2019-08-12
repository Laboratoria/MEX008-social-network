let LoginR = {

    render : async () => {
        let view =  /*html*/`
            <h1>ROSA</h1>
        `
        return view
    }
    , after_render: async () => {
        console.log("HOLA DESDE ROSA");
        
    }
}
export default LoginR;