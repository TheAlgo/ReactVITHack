import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDn0TyHn1jjqwTXiJ1D8auwxZwt5-Jz4OY",
    authDomain: "vit-hack-location.firebaseapp.com",
    databaseURL: "https://vit-hack-location.firebaseio.com",
    projectId: "vit-hack-location",
    storageBucket: "",
    messagingSenderId: "779375775741",
    appId: "1:779375775741:web:886318f0324a5fd2ba9394"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export default app;