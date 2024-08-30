// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jJPhqDSqWSHx5ZyFg389IOOo3i9T8BI",
  authDomain: "saf-mobility-oficial.firebaseapp.com",
  projectId: "saf-mobility-oficial",
  storageBucket: "saf-mobility-oficial.appspot.com",
  messagingSenderId: "248048503814",
  appId: "1:248048503814:web:4ca5cf31580f43ae25c787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export {auth}