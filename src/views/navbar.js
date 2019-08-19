let navbar = {
    render : async () => {
        let view = /* html */ `
        <div class="row" id="navbar-login">
        <div class="span12">
          <div class="footer" id="footer">
                <ul class="navegacion">
                  <li><a href="./#/muro"><i class="fas fa-home"></i></a></li>
                  <li><a href="./#/favoritos"><i class="fas fa-map-marked"></i></a></li>
                  <li><a href="./#/chat"><i class="far fa-comments"></i></a></li>
                  <li><a href="./#/perfil"><i class="far fa-user-circle"></i></a></li>
                </ul>
          </div>
        </div>
      </div>
        `
        return view
    },
    after_render : async () => {}
}

export default navbar;