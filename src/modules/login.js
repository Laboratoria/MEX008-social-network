let Login = {
    render : async () => {
        let view = /* html */ `
        <div class="conteiner">
        <form class="login">
              <h1><img src="../icon/FAVORITO.png" alt="imagen-logo" id="logo"></h1>
              <div id="loader">Login or sign up</div> <br>
              <div id="firebaseui-auth-container"></div>
              
        </form>
        `
        return view
    },
    after_render : async () => {}
}

export default Login;