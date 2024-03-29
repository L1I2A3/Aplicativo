// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'




// Add SDKs for Firebase products that you want to use
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export default {app, db, auth}

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUvysbxfPeGKujEWDwJXEIgQYOQ4Y_aI",
  authDomain: "telalogin-d7a15.firebaseapp.com",
  projectId: "telalogin-d7a15",
  storageBucket: "telalogin-d7a15.appspot.com",
  messagingSenderId: "393176216732",
  appId: "1:393176216732:web:46c1950a68ad403cbee959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/