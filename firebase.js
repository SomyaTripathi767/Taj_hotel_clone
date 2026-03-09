// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeJsuYsQAPRRszh8VUMdJ8jkpoohXqBig",
  authDomain: "taj-clone.firebaseapp.com",
  projectId: "taj-clone",
  storageBucket: "taj-clone.firebasestorage.app",
  messagingSenderId: "769328320508",
  appId: "1:769328320508:web:2b1238b599e5e9c63dec79",
  measurementId: "G-P020F32979",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); // Initialize Firestore and export `db`
