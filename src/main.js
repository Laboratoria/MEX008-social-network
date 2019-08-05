// Este es el punto de entrada de tu aplicacion
/* 
import { myFunction } from './lib/index.js';

myFunction(); */

const data = firebase.database();

let data = {
    "Moscow": {
      country: "Russia"
    },
    "Berlin": {
      name: "Germany"
    }
  }

  let dataRef = database.ref('cities');
  let dataPush = dataRef.push(data);
  dataRef.once('value', snapshot => {
    console.log(snapshot.val());
  });