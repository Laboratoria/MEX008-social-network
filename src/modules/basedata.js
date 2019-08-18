$(document).ready(function()
 {
    // Inicializar la base de datos
    var config = {
        apiKey: "AIzaSyAmmZe7KTWuN95FA9DlAVRZqF1cVADqu_k",
        authDomain: "wanderlust-acc5a.firebaseapp.com",
        databaseURL: "https://wanderlust-acc5a.firebaseio.com",
        projectId: "wanderlust-acc5a",
        storageBucket: "firebase-veigapp.appspot.com",
        messagingSenderId: "272328701609"
    };
    firebase.initializeApp(config);
    function getID(id){
        return document.getElementById(id).value;
    }
    function arrayJson(email,password){
    var data = {
        email : email,
        password : password
    };
    return data;
    }
    function insertTask(){
        var id = getID(email);
        var id = getID(email2);
        //var id = getID(password);
        //var id = getID(password2);
        console.log(email+password);
        if(id.length===0 || email.length==0 || password.name==0){
            alert("Empty Files");
        } else{
            var arrayData =arrayJson (email,password);
            var task= firebase.database().ref("task"/+id)
            task.set(arrayData)
            alert("se guardo");
        }
    }