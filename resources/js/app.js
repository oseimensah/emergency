require('./bootstrap');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlMu9HLhmhqK-bQmG6dBody08-SmHhMkk",
  authDomain: "emergency-kayd.firebaseapp.com",
  projectId: "emergency-kayd",
  storageBucket: "emergency-kayd.appspot.com",
  messagingSenderId: "747282120146",
  appId: "1:747282120146:web:4e62a0f8bad4d11c89dc0b",
  measurementId: "G-BMFN4DP591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
