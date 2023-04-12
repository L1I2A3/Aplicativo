// Import the functions you need from the SDKs you need
import * as firebase from "firebase";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3UVmzFg1ndhKrWM3RgtS4zi-hEItXeK4",
  authDomain: "teste-login1-eaf51.firebaseapp.com",
  projectId: "teste-login1-eaf51",
  storageBucket: "teste-login1-eaf51.appspot.com",
  messagingSenderId: "450242592747",
  appId: "1:450242592747:web:b3ad9bb2098e94e7a1e3ae"
        
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