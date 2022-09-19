// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhzB-3mGw19RCZtCjFMWbAq0TQP3TSuDE",
  authDomain: "encontree.firebaseapp.com",
  projectId: "encontree",
  storageBucket: "encontree.appspot.com",
  messagingSenderId: "345046866232",
  appId: "1:345046866232:web:72097102a91fb52aa749cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { storage, auth,provider, signInWithPopup, onAuthStateChanged };

