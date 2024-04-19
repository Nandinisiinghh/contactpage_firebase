// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkY47UT0GLoihY6HZOFRdh9NvthbQUuaM",
  authDomain: "contact-page-177f8.firebaseapp.com",
  projectId: "contact-page-177f8",
  storageBucket: "contact-page-177f8.appspot.com",
  messagingSenderId: "188350458190",
  appId: "1:188350458190:web:89e23c0b1fe678958ad61f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);