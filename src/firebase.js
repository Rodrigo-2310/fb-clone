//Configuración de Firebase

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCc4Ym21JwNUK2NXzSqnrukHzIT3mOMK6I",
    authDomain: "fbclone-1a642.firebaseapp.com",
    databaseURL: "https://fbclone-1a642.firebaseio.com",
    projectId: "fbclone-1a642",
    storageBucket: "fbclone-1a642.appspot.com",
    messagingSenderId: "618816850540",
    appId: "1:618816850540:web:69ca8eac3f64b2512e2649"
  };

//Conectamos el front con el back
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Obtenemos acceso a la BD
const db = firebaseApp.firestore();
//Autenticación
const auth = firebase.auth();

//Le hacemos saber a firebase que queremos que se inicie sesión con Google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;