// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBNqIaZ6CdE981-DOUUkZQbuj46Y0Wy0Yc",
    authDomain: "icat22-778f4.firebaseapp.com",
    databaseURL: "https://icat22-778f4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "icat22-778f4",
    storageBucket: "icat22-778f4.appspot.com",
    messagingSenderId: "325719455282",
    appId: "1:325719455282:web:8dc44e2a385edb394e6e2b",
    measurementId: "G-4S8612WLJE"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider =new GoogleAuthProvider();

// Reference to the database
export const db = getDatabase(app);
