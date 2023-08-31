// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCyMohZwAecW5jlAG8BrDR20sqQawkQqs",
  authDomain: "texas-database.firebaseapp.com",
  projectId: "texas-database",
  storageBucket: "texas-database.appspot.com",
  messagingSenderId: "156667097934",
  appId: "1:156667097934:web:fbede5a164309e297aa41f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;