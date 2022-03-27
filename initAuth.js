// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFZWWs4Hc2FAj-AtF4s4gESbE7Ef7gKFg",
  authDomain: "freeqr-1e734.firebaseapp.com",
  projectId: "freeqr-1e734",
  storageBucket: "freeqr-1e734.appspot.com",
  messagingSenderId: "858040272157",
  appId: "1:858040272157:web:9132bdd651257184e84df4",
  measurementId: "G-SNMKPJFWXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);