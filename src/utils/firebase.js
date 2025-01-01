// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq94P-eakT6Wlv5yzxDVvY9NUVLhRwEJA",
  authDomain: "netflixgpt-25eb3.firebaseapp.com",
  projectId: "netflixgpt-25eb3",
  storageBucket: "netflixgpt-25eb3.firebasestorage.app",
  messagingSenderId: "56775429172",
  appId: "1:56775429172:web:4129449eb95c2e5a2d4e61",
  measurementId: "G-KBKYKH47YC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
