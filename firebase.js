// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv_wLSvqT6CwFv8UTladUljbCTfwRyjfc",
  authDomain: "supratools-bf9ef.firebaseapp.com",
  databaseURL: "https://supratools-bf9ef-default-rtdb.firebaseio.com",
  projectId: "supratools-bf9ef",
  storageBucket: "supratools-bf9ef.appspot.com",
  messagingSenderId: "53233563348",
  appId: "1:53233563348:web:2545a4a9c7113a50b7ed41",
  measurementId: "G-JLNT23HSP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider,db };