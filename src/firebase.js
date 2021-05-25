import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO3q4Bf0n3SaiUHIydqBwreldCv8sjtIQ",
  authDomain: "softtable-ed330.firebaseapp.com",
  databaseURL: "https://softtable-ed330-default-rtdb.firebaseio.com",
  projectId: "softtable-ed330",
  storageBucket: "softtable-ed330.appspot.com",
  messagingSenderId: "933274909868",
  appId: "1:933274909868:web:da1d47c0e168c089ce3309",
  measurementId: "G-3E3M54BPPG",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
