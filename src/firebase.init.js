// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEufKT6eK0ZbB1-cMxpJeIqRKejO6W9v4",
  authDomain: "genius-car-services-1057c.firebaseapp.com",
  projectId: "genius-car-services-1057c",
  storageBucket: "genius-car-services-1057c.appspot.com",
  messagingSenderId: "592924071006",
  appId: "1:592924071006:web:44e51562405be3a03a90cf",
  measurementId: "G-XPF6P3FDH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;