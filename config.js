import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBCPzePmB0naePZUHZ1o6sdrjyHZqFk1cE",
  authDomain: "c-78-ae5c3.firebaseapp.com",
  projectId: "c-78-ae5c3",
  storageBucket: "c-78-ae5c3.appspot.com",
  messagingSenderId: "728497660594",
  appId: "1:728497660594:web:97f4c12fcd878f29891fab"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
