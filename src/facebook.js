//INICIO DE SESION POR FACEBOOK 
window.fbAsyncInit = function() {
    FB.init({
      appId      : '841700652892753', //ID proporcionado por facebook developers
      cookie     : true,
      xfbml      : true,
      version    : 'v4.0' //VERSION EN FACEBOOK DEVELOPERS
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));