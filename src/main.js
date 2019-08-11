// Este es el punto de entrada de tu aplicacion
// import {login} from './views/login.js';

// myFunction();

const routes = {
    '/'           : login
  , '/register'   : registro
  , '/profile'    : perfil
  , '/error'      : error404
};
//
//Aquí el controlador
const router = async () => {
  //
  const content = null || document.getElementById('container_page');
  //
  let request = Utils.parseRequestURL();
  //
  let parsedUrl = (request.resource ? '/' + request.resource : '/'); //+ (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  console.log(parsedUrl);
  //obtener la página desde el hash
  let page = routes [parsedUrl] ? routes[parsedUrl] : error404;
  content.innerHTML = await page.render();
  await page.after_render();
}
//llamando objeto y escuchando hash
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
parseRequestUrl : () => {
  let url = location.hash.slice(1) || '/';
  let r = url.split('/');
  let request = {
  };
};

myFunction();

