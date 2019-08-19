let Footer = {
    render: async() => {
        let view = `
<div class="footer-center">
<div>
   <div class="footer-content">
    <div class="footer-menu">
        <ul>
                <li>FAQ</li>
                <li>About us</li>
                <li>Términos y condiciones</li>
            </ul>
        </div>
        </div>
        <div class="download-icons">
                <figure>
                    <img src="./img/app-store.png" alt="Download for apple">
                    <img src="./img/google-play.png" alt="Download for android">
                </figure>
            </div>
            <div class="icons">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-apple"></i>
                    <i class="fas fa-play"></i>
                </div>
        </div>
        <hr>
        <p class="copyright"> &copy;  2019 PetFriendly technologies Inc.</p>
</div>
</div>  `
        return view
    },
    after_render: async() => {}
}
export default Footer;