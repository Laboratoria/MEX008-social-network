let CrearPerfil = {
    render : async () => {
        let view = /* html */ `
        <section class="perfil-box">
          <section class="Perfil">
                <img class= "avatar" src="../icon/FAVORITO.png" alt="logoWander">
                <h2>¿Tienes un espiritu Wanderlust?</h1>
                <br>
                <h2>¡Crea tu perfil!</h2>
                <form class="usario-box">
                <label for="NombreUsuario">Nombre</label>
                <input type="text"name="Nombre" id="nombreUsuario">
                <br>
                <br>
                <label for="UbicaciónUsiario">Tu Ubicación</label>
                <input type="text" name="Ubicación" id="ubicaciónUsuario">
                <section class="SeleccionarInsignias">
                <h2>Agrega tus insignias</h2>
                <input id="experto" type="image" src="../icon/icons8-maleta-480.png" name="viajeroexperto" >
                <input id="noexperiencia" type="image" src="../icon/viajerosinexperiencia.png" name="vijerosinexperiencia">
                <input id="surfing" type="image" src="../icon/casaamor.png" name="couchsurfing">
          </section>
        </form>
        </section>
        </section>
        `
        return view
    },
    after_render : async () => {}
}
export default CrearPerfil;