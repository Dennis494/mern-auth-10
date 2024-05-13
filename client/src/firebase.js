// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,//check .env for the key
  authDomain: "mean-auth-e96eb.firebaseapp.com",
  projectId: "mean-auth-e96eb",
  storageBucket: "mean-auth-e96eb.appspot.com",
  messagingSenderId: "1042359744682",
  appId: "1:1042359744682:web:513424086cb99eeb77f8d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);