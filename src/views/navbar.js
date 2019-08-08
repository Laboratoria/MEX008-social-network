let navbar = {
    render : async () => {
        let view = /* html */ `
        <div class="row">
        <div class="span12">
          <div class="footer" id="footer">
                <ul class="navegacion">
                  <li><a href=""><i class="fas fa-home"></i></a></li>
                  <li><a href=""><i class="fas fa-map-marked"></i></a></li>
                  <li><a href=""><i class="far fa-comments"></i></a></li>
                  <li><a href=""><i class="far fa-user-circle"></i></a></li>
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