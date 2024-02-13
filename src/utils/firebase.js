// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM8_ewB2JHLmJPBIDNIX5xmM4RoExMtGM",
  authDomain: "netflix-gpt-21edc.firebaseapp.com",
  projectId: "netflix-gpt-21edc",
  storageBucket: "netflix-gpt-21edc.appspot.com",
  messagingSenderId: "82436702219",
  appId: "1:82436702219:web:5038ea2fe1112dcb59470e",
  measurementId: "G-ZYK6ZRRFQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
