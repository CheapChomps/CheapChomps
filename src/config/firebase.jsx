// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZQVrwOBSXW4qbT2QEsu5HaaZbfV8DWc",
  authDomain: "cheapchomps-cc.firebaseapp.com",
  projectId: "cheapchomps-cc",
  storageBucket: "cheapchomps-cc.appspot.com",
  messagingSenderId: "239800147975",
  appId: "1:239800147975:web:d652f9992fe79427c48aa2",
  measurementId: "G-J1VXVV7NDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);