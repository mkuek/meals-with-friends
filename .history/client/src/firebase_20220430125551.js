// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "meals-with-friends-8a1ec.firebaseapp.com",
  projectId: "meals-with-friends-8a1ec",
  storageBucket: "meals-with-friends-8a1ec.appspot.com",
  messagingSenderId: "1054229559113",
  appId: "1:1054229559113:web:47c21afdcc9a23359a8c98",
  measurementId: "G-6DNYP1PLQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage(app);
