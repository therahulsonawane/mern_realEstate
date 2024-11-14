// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyASMFjDrmMq7mxuZM_E3MgF9BAvOieDTiM",
  authDomain: "mern-realestate-e5e15.firebaseapp.com",
  projectId: "mern-realestate-e5e15",
  storageBucket: "mern-realestate-e5e15.firebasestorage.app",
  messagingSenderId: "912344422262",
  appId: "1:912344422262:web:456bab011a0e6e3de8cc57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
