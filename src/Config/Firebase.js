// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyANgX9TDZFflcGlXPIGakGSgpTsAfzWg8s",
    authDomain: "icat-86fa6.firebaseapp.com",
    databaseURL: "https://icat-86fa6-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "icat-86fa6",
    storageBucket: "icat-86fa6.appspot.com",
    messagingSenderId: "529920973957",
    appId: "1:529920973957:web:022591b239f7eeca93ddec",
    measurementId: "G-YV0R76VYBB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider =new GoogleAuthProvider();

// Reference to the database
export const db = getDatabase(app);
