// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI-ttcwWwPJU3qXVIFHFDOM61mn3seZvU",
  authDomain: "talestory5.firebaseapp.com",
  projectId: "talestory5",
  storageBucket: "talestory5.appspot.com",
  messagingSenderId: "1046359617562",
  appId: "1:1046359617562:web:5aa712c80b4f6bcc7ae1a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);