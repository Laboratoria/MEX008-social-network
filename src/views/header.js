let header = {

    render : async () => {
        const view =  /*html*/`
        <div class="header" id="header-login">
          <img src="./imgenes/logo-two.png" class="logo-two">
        </div>
        `
        return view
    }
    , after_render: async () => {}
}
export default header;