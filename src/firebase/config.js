// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH3a_9uBJo0bLLWbVWEMddpt4YeF-QrdA",
  authDomain: "super-app-477e7.firebaseapp.com",
  projectId: "super-app-477e7",
  storageBucket: "super-app-477e7.appspot.com",
  messagingSenderId: "428849752396",
  appId: "1:428849752396:web:e0b6db6c19bd5575f187e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export{auth}