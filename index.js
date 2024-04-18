// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsfjjoQxRAnn3CR0iNH9I4Nv5UQFAShLA",
  authDomain: "test-01-53393.firebaseapp.com",
  projectId: "test-01-53393",
  storageBucket: "test-01-53393.appspot.com",
  messagingSenderId: "133235405822",
  appId: "1:133235405822:web:0e10eea77c42cccc35c6af",
  measurementId: "G-9HKBJFPLPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);