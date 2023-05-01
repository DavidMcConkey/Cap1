// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC65cjdGB9XaUlgNOfzj4uGtjTuGn6gKF4",
  authDomain: "resteasy-7f4eb.firebaseapp.com",
  projectId: "resteasy-7f4eb",
  storageBucket: "resteasy-7f4eb.appspot.com",
  messagingSenderId: "1031089106157",
  appId: "1:1031089106157:web:d7f74d377944aecc83b0e4",
  measurementId: "G-KBYYF0TPM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
