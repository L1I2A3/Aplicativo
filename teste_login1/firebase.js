// Import the functions you need from the SDKs you need
import * as firebase from "firebase";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUvysbxfPeGKujEWDwJXEIgQYOQ4Y_aI",
  authDomain: "telalogin-d7a15.firebaseapp.com",
  projectId: "telalogin-d7a15",
  storageBucket: "telalogin-d7a15.appspot.com",
  messagingSenderId: "393176216732",
  appId: "1:393176216732:web:22f3ba847b927dc1bee959"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export {auth};