let Modal1 = {
    render: async() => {
        let view = `
        <!--Inicia la estructura del modal de inicio de sesión-->
         <div id="modal1" class="modal">
             <div id="style-modal" class="modal-content">
                 <header class="modal-header">
                     <!--Header del modal-->
                     <box>
                         <p>Inicia sesión en PetFriendly</p>
                     </box>
                 </header>
                 <h1>Welcome to My Awesome App</h1>
                 <div class="login-container" id="firebaseui-auth-container"></div>
                 <div id="loader">Loading...</div>

             </div>
             <div class="modal-footer" id="mod-footer-color">
                 <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
             </div>
         </div>
    `
        return view
    },
    after_render: async() => {}
}
export default Modal1;