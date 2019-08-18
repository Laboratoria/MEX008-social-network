let NavBar = {
    render: async () => {
        let view = `
        <header>
        <div class="nav-color">
        
        <ul id="hamb-menu" class="menu">
                <li>
                <i class="fas fa-bars"></i>
                    <ul>
                        <li><a id="profile">Perfil</a></li>
                        <li><a id="wall">Wall</a></li>
                        <li><a>Búsqueda avanzada</a></li>
                        <li><a id="sign-out">Cerrar sesión</a></li>
                    </ul>
                </li>
            </ul>
            </div>
            </header>`
        return view
    },
    after_render: async () => {
const logOut = () =>  firebase.auth().signOut();
   const logOutWithClick = (event) => { //Trae const logOut = () => firebase.auth().signOut();
    event.preventDefault(); //Evita que la función se ejecute antes de tiempo
        if (firebase.auth().currentUser) { //si el usuario se deslogea
            logOut()
                .then (() => {
                    alert('Hasta Pronto'); //sale un alert que dice hasta pronto
                    location.hash = '#/'; // y redigire al ingreso
                });
            } else {
                alert('Algo ha salido mal');
              }
            }



const signOutButton = document.getElementById('sign-out');
signOutButton.addEventListener('click', logOutWithClick);

const goToProfileButton = document.getElementById('profile');

goToProfileButton.addEventListener('click', () => location.hash = '#/profile');

const goToWallButton = document.getElementById('wall');
goToWallButton.addEventListener('click', () => location.hash = '#/wall');

}

}
export default NavBar;