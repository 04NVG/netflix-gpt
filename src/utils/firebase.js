// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHMirs2fAY9hPni0QortTJcMEpU86SG8",
  authDomain: "netflixgpt-2f0bf.firebaseapp.com",
  projectId: "netflixgpt-2f0bf",
  storageBucket: "netflixgpt-2f0bf.firebasestorage.app",
  messagingSenderId: "247326278444",
  appId: "1:247326278444:web:feb27d81ae711724fbe289",
  measurementId: "G-RGEBC7QXQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
console.log(analytics)

export const auth = getAuth();