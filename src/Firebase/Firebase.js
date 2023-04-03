import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaIs42dOdUZIJU84HHa57BP7M0Cfk2Qq4",
  authDomain: "auth-bfcc6.firebaseapp.com",
  projectId: "auth-bfcc6",
  storageBucket: "auth-bfcc6.appspot.com",
  messagingSenderId: "448624047328",
  appId: "1:448624047328:web:8c94140c4c3ddb91358c85",
  measurementId: "G-DY7FJ17RYX"
};

const MyFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(MyFirebase);
export const db = getFirestore(MyFirebase)