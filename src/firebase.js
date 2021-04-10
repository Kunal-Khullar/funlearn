import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA0IsJQEniEQbyZ8LpW84_711Uf1eYz3AI",
  authDomain: "hack36-project.firebaseapp.com",
  projectId: "hack36-project",
  storageBucket: "hack36-project.appspot.com",
  messagingSenderId: "756033874730",
  appId: "1:756033874730:web:82c67aaf82d231092a0c53",
  measurementId: "G-36N18GG2R4",
};
const fireapp = firebase.initializeApp(firebaseConfig);
const firelytics = firebase.analytics();
const db = firebase.firestore();
const storageRef = firebase.storage().ref();
const auth = firebase.auth();
export { fireapp, firelytics, db, auth, storageRef };
