// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs8MZppR_IAUhvtJ5l70eM9B-dHKB5esw",
  authDomain: "inventory-management-2219c.firebaseapp.com",
  projectId: "inventory-management-2219c",
  storageBucket: "inventory-management-2219c.appspot.com",
  messagingSenderId: "892602438197",
  appId: "1:892602438197:web:d71ac1d66a9e8a9c18977c",
  measurementId: "G-20M47VBDJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };