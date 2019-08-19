let NavBar = {
    render: async() => {
        let view = `
        <header id="main-header">
        <div class="nav-color">
        
        <ul id="hamb-menu" class="menu">
                <li>
                    <figure class="box-hamb">
                    <img id="icon-hamb" src="./img/hamb.png" alt="icono menu hamburguesa">
                    </figure>
                    <ul>
                       <li><a id="profile-desktop">Perfil</a></li>
                        <li><a id="wall-desktop">Wall</a></li>
                        <li><a>Búsqueda avanzada</a></li>
                        <li><a id="sign-out-desktop">Cerrar sesión</a></li>
                    </ul>
                </li>
                 <li>
                    <figure class="box-logo-head">
                        <img id="logo-head" src="../img/petfriendly.svg">
                    </figure>
                </li>

            </ul>
           
            <ul id="nomobile-menu-hamb" class="nomobile-menu">
            <li><a id="profile">Perfil</a></li>
            <li><a id="wall">Wall</a></li>
            <li><a>Búsqueda avanzada</a></li>
            <li><a id="sign-out">Cerrar sesión</a></li>
        </ul>
               
        </ul>
        

            </div>
            </header>`
        return view
    },
    after_render: async() => {
        const logOut = () => firebase.auth().signOut();
        const logOutWithClick = (event) => { //Trae const logOut = () => firebase.auth().signOut();
            event.preventDefault(); //Evita que la función se ejecute antes de tiempo
            if (firebase.auth().currentUser) { //si el usuario se deslogea
                logOut()
                    .then(() => {
                        alert('Hasta Pronto'); //sale un alert que dice hasta pronto
                        location.hash = '#/'; // y redigire al ingreso
                    });
            } else {
                alert('Algo ha salido mal');
            }
        }

//Menu mobile

        const signOutButton = document.getElementById('sign-out');
        signOutButton.addEventListener('click', logOutWithClick);

        const goToProfileButton = document.getElementById('profile');

        goToProfileButton.addEventListener('click', () => location.hash = '#/profile');

        const goToWallButton = document.getElementById('wall');
        goToWallButton.addEventListener('click', () => location.hash = '#/wall');


//Menu Desktop

const signOutButtonDesktop = document.getElementById('sign-out-desktop');
signOutButtonDesktop.addEventListener('click', logOutWithClick);

const goToWallButtonDesktop = document.getElementById('wall-desktop');
goToWallButtonDesktop.addEventListener('click', () => location.hash = '#/wall');

const goToProfileButtonDesktop = document.getElementById('profile-desktop');
goToProfileButtonDesktop.addEventListener('click', () => location.hash = '#/profile');
}

    }

export default NavBar;