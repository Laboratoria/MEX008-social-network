//Importando pantallas
import intro from "./views/pages/intro.js";
import welcome from "./views/pages/welcome.js";
import timeline from "./views/pages/timeline.js";
import shops from "./views/pages/shops.js";
import workshops from "./views/pages/workshops.js";
import profile from "./views/pages/profile.js";
import settings from "./views/pages/settings.js";
import error404 from "./views/pages/error404.js ";

//Importando componentes
import sidebar from "./views/components/sidebar.js";
import footer from "./views/components/footer.js";

//Importando servicios
import Utils from "./services/Utils.js";

// Initial Storage
/*localStorage.setItem(publicationList",
    localStorage.getItem("publicationList") || JSON.stringify([])
  );*/

const routes = {
  "/intro": intro,
  "/": welcome,
  "/timeline": timeline,
  "/shops": shops,
  "/workshops": workshops,
  "/profile": profile,
  "/settings": settings,
};

//Función para inicializar todo
const routerApp = async () => {
  const introContainer = null || document.getElementById("intro-container");
  const welcomeContainer = null || document.getElementById("welcome-container");

  introContainer.innerHTML = await intro.render();
  welcomeContainer.innerHTML = await welcome.render();

  // const request = Utils.pageRequestURL();

  // let parsedURL =
  //   (request.resource ? `/${request.resource}` : "/") +
  //   (request.verb ? "/" + request.verb : "") +
  //   (request.id ? "/:id" : "");

  // let page = routes[parsedURL] ? routes[parsedURL] : error404;
  // sectionContainer.innerHTML = await page.render();
  // await page.after_render();
};


//Función para inicializar contenido
const stateChange = async () => {
  const sidebarContainer = null || document.getElementById("sidebar-container");
  const sectionContainer = null || document.getElementById("section-container");
  const footerNav = null || document.getElementById("footer-nav");

  sidebarContainer.innerHTML = await sidebar.render();
  sectionContainer.innerHTML = await timeline.render();
  footerNav.innerHTML = await footer.render();

  const request = Utils.pageRequestURL();

  let parsedURL =
    (request.resource ? `/${request.resource}` : "/") +
    (request.verb ? "/" + request.verb : "") +
    (request.id ? "/:id" : "");

  let page = routes[parsedURL] ? routes[parsedURL] : error404;
  sectionContainer.innerHTML = await page.render();

  await sidebar.after_render();
  await page.after_render();
  await footer.after_render();
};

//funcion para comprobar estado de usuario
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    document.getElementById('signup-signin').classList.add("hide");
    document.getElementById('intro-container').classList.add("hide");
    console.log("El usuario ha entrado a sesión");
    stateChange();
  } else {
    document.getElementById('signup-signin').classList.remove("hide");
    document.getElementById('section-container').innerHTML = "";
    document.getElementById("sidebar-container").innerHTML = "";
    document.getElementById('footer-nav').innerHTML = "";
    console.log('El usuario está fuera de sesión')
  }
});







/*-- para hacker-edition, puede servir un poco para la funcionalidad de 'like'(publication-list solo aparece en timeline)
    const arrayLi = Array.from(
        document.querySelectorAll("#publication-list ul>li")
      );
      // console.log(li);
-- posible inicio de adapatacion para 'like'
      arrayLi.forEach(item => {
        item.addEventListener("click", liked);
      });*/

/*posible funcion para agregar publicacion
   const addPublication = e => {
      e.preventDefault();
      const inputText = document.getElementById("input-text");
      const arrayPublication = [...JSON.parse(localStorage.getItem("publicationList"))];
      const objPublication = {
        user: `${user}`,
        value: inputText.value,
        date: `${new Date().getTime()`
        status: "Normal"}`,
      };
    arrayPublication.push(objPublication);
   localStorage.setItem("publicationList", JSON.stringify(arrayPublication));
  routerApp();
    };*/

/* para hacker-edition'checar like'
    const like = e => {
        let arrayTask = Utils.getTimeline();
      
        if (e.target.tagName == "TEXT") {
          if (e.target.checked) {
            arrayTask = arrayTask.map(item => {
              if (item.id == e.target.id) {
                item.status = "Liked";
              }
              return item;
            });
          } else {
            arrayTask = arrayTask.map(item => {
              if (item.id == e.target.id) {
                item.status = "Normal";
              }
              return item;
            });
          }
        }
        localStorage.setItem("publicationList", JSON.stringify(arrayPublication));
        routerApp();
      };*/

window.addEventListener("hashchange", routerApp);
window.addEventListener("load", routerApp);

setTimeout(() => {
  document.getElementById('intro-container').classList.add("hide");
}, 1700);