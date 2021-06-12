import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCcmBQ239JhW5qFOQ8qI5ExbP3BDV3Ej64",
  authDomain: "react-userapp.firebaseapp.com",
  projectId: "react-userapp",
  storageBucket: "react-userapp.appspot.com",
  messagingSenderId: "742657153893",
  appId: "1:742657153893:web:04bdd192a6f91d7a955f8c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;