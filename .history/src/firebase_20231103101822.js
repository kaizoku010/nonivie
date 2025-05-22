// Import the functions you need from the SDKs you need
import { firebase,initializeApp } from "firebase/app";
import 'firebase'
import {getAuth} from "firebase/auth" 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8UQ3KUtxBTEw9QwOQ38rAwVT7hePby4k",
  authDomain: "nonivie-51296.firebaseapp.com",
  projectId: "nonivie-51296",
  storageBucket: "nonivie-51296.appspot.com",
  messagingSenderId: "971121217588",
  appId: "1:971121217588:web:90e8b2f696a97e2a323a61",
  measurementId: "G-0KT86GEKSZ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebase.initializeApp(firebaseConfig)