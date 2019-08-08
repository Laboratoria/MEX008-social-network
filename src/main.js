
//Importando pantallas
import intro from "./views/pages/intro.js";
//import welcome from "./views/pages/welcome.js";
import timeline from "./views/pages/timeline.js";
import shops from "./views/pages/shops.js";
import workshops from "./views/pages/workshops.js";
//import entry from "./views/pages/entry.js";
import Error404 from "./views/pages/Error404.js ";


//Importando componentes
import Sidebar from "./views/components/Sidebar.js";
//import Main from "./views/components/Main.js";
//import Footer-nav from "./views/components/Footer-nav.js";
//import Form from "./views/components/Form.js";

import Utils from "./services/Utils.js";

// Initial Storage
/*localStorage.setItem(
    "publicationList",
    localStorage.getItem("publicationList") || JSON.stringify([])
  );*/
  
  const routes = {
    "/": intro,
   // "/welcome": welcome,
    "/timeline": timeline,
    "/shops": shops,
    "/workshops": workshops,
  //  "/entry": entry,
  };

  const routerApp = async () => {
    const sidebar = null || document.getElementById("sidebar");
    const mainContainer = null || document.getElementById("main-container");
  //  const footerNav = null || document.getElementById("footer-nav");

    sidebar.innerHTML = await Sidebar.render();
  //  mainContainer.innerHTML = await main-container.render(); creo que ni lo usamos
   // footer-nav.innerHTML = await Footer-nav.render();
  //  form.innerHTML = await Form.render();

    const request = Utils.pageRequestURL();

    let parsedURL =
      (request.resource ? `/${request.resource}` : "/") +
      (request.verb ? "/" + request.verb : "") +
      (request.id ? "/:id" : "");
  
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    mainContainer.innerHTML = await page.render();
//Inicializando sidebar
    const btnCollapse = document.querySelectorAll(".sidenav");
    M.Sidenav.init(btnCollapse);
  
   // const btnAdd = document.getElementById("btn-add");
   // btnAdd.addEventListener("click", addPublication);



/*  para hacker-edition
    const arrayLi = Array.from(
        document.querySelectorAll("#publication-list ul>li")
      );
      // console.log(li);
      arrayLi.forEach(item => {
        item.addEventListener("click", liked);
      });
    };*/
    
   /* const addPublication = e => {
      e.preventDefault();
      const inputText = document.getElementById("input-text");
    
      const arrayPublication = [...JSON.parse(localStorage.getItem("publicationList"))];
      const objPublication = {
        user: `Ramona`,
        value: inputText.value,
        date: `${new Date().getTime()}`,
      };*/
    
      //arrayPublication.push(objPublication);
    
     // localStorage.setItem("publicationList", JSON.stringify(arrayPublication));
      routerApp();
    };
/* para hacker-edition
    const checked = e => {
        let arrayTask = Utils.getTask();
      
        if (e.target.tagName == "INPUT") {
          if (e.target.checked) {
            arrayTask = arrayTask.map(item => {
              if (item.id == e.target.id) {
                item.status = "Completed";
              }
              return item;
            });
          } else {
            arrayTask = arrayTask.map(item => {
              if (item.id == e.target.id) {
                item.status = "Active";
              }
              return item;
            });
          }
        }
        localStorage.setItem("TaskList", JSON.stringify(arrayTask));
        routerApp();
      };*/
      
      window.addEventListener("hashchange", routerApp);
      window.addEventListener("load", routerApp);