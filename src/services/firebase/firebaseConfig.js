// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKtVcqD9O_uIgUcG--u2SxVeoNlhJwqY",
  authDomain: "backend-ecommers.firebaseapp.com",
  projectId: "backend-ecommers",
  storageBucket: "backend-ecommers.appspot.com",
  messagingSenderId: "431817162089",
  appId: "1:431817162089:web:9b32a0e901d471d90391f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)