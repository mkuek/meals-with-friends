// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "meals-with-friends-8a1ec.firebaseapp.com",
  projectId: "meals-with-friends-8a1ec",
  storageBucket: "meals-with-friends-8a1ec.appspot.com",
  messagingSenderId: "1054229559113",
  appId: "1:1054229559113:web:47c21afdcc9a23359a8c98",
  measurementId: "G-6DNYP1PLQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
