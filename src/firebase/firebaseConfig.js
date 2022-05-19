// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAeAcwKIsqfcyP2Dd9DZD1204aEWRJtd8",
  authDomain: "corso-ecommerce.firebaseapp.com",
  projectId: "corso-ecommerce",
  storageBucket: "corso-ecommerce.appspot.com",
  messagingSenderId: "505004750218",
  appId: "1:505004750218:web:24ae80cef2010deee24473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 