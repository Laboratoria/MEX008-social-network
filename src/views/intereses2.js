let intereses2 = {
    render : async () => {
        let view = /* html */ `
        <div class="pantalla-intereses-dos">
        <p>Te interesa:</p>
            <div class="container-ofrecer">
              <ul class="ks-cboxtags">
                <li><input type="checkbox" id="checkboxOne" value="orientaciónPsicologica"><label for="checkboxOne">Orientación Psicológica</label></li>
                <li><input type="checkbox" id="checkboxTwo" value="orientaciónLegal" checked><label for="checkboxTwo">Orientación Legal</label></li>
                <li><input type="checkbox" id="checkboxThree" value="limpiezaDomestica" checked><label for="checkboxThree">Limpieza Doméstica</label></li>
                <li><input type="checkbox" id="checkboxFour" value="cuidadoNinos"><label for="checkboxFour">Cuidado de niños</label></li>
                <li><input type="checkbox" id="checkboxFive" value="servicioBelleza"><label for="checkboxFive">Servicio de belleza</label></li>
                <li><input type="checkbox" id="checkboxSix" value="RopaAccesorios" checked><label for="checkboxSix">Ropa y accesorios</label></li>
              </ul>
            </div> 
        <p>Escribe tu Código Postal</p>
        <input type="number" class="btn"><br>
        <input type="submit" value="Comenzar" class="btn">
      </div>
        `
        return view
    },
    after_render : async () => {}
}

export default intereses2;