
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtFEENiIn0p9ihGMvyjShvTO-Pwy0luRg",
  authDomain: "react-netflix-clone-75bed.firebaseapp.com",
  projectId: "react-netflix-clone-75bed",
  storageBucket: "react-netflix-clone-75bed.appspot.com",
  messagingSenderId: "357099825029",
  appId: "1:357099825029:web:2a1f1a263b45bc74c986ec",
  measurementId: "G-QWEBPT79QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);