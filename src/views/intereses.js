let Intereses = {
    render : async () => {
        let view = /* html */ `
        <div id="pantalla-intereses" class="pantalla-intereses text-center">
        <div class="row-fluid">
          <div class="span12 perfil-avatar">
            <img src="./imgenes/perfil-avatar.jpg" alt="" class="img-circle">
            <p>Estás interesada en ofrecer:</p>
          </div>          
        </div> 
        <div class="container-ofrecer">
            <ul class="ks-cboxtags">
              <li><input type="checkbox" id="checkboxOne" value="orientaciónPsicologica"><label for="checkboxOne" class="label-intereses">Orientación Psicológica</label></li>
              <li><input type="checkbox" id="checkboxTwo" value="orientaciónLegal" checked><label for="checkboxTwo" class="label-intereses">Orientación Legal</label></li>
              <li><input type="checkbox" id="checkboxThree" value="limpiezaDomestica" checked><label for="checkboxThree" class="label-intereses">Limpieza Doméstica</label></li>
              <li><input type="checkbox" id="checkboxFour" value="cuidadoNinos"><label for="checkboxFour" class="label-intereses">Cuidado de niños</label></li>
              <li><input type="checkbox" id="checkboxFive" value="servicioBelleza"><label for="checkboxFive" class="label-intereses">Servicio de belleza</label></li>
              <li><input type="checkbox" id="checkboxSix" value="RopaAccesorios" checked><label for="checkboxSix" class="label-intereses">Ropa y accesorios</label></li>
            </ul>
           </div> 
           <input type="submit" value="Siguiente" class="btn">
        `
        return view
    },
    after_render : async () => {}
}

export default Intereses;