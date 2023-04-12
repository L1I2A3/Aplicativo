// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'




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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default {app, db}