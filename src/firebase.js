import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGSW9oAhpJWv27l57GSWzLYm2T1SjGtXQ",
  authDomain: "chatgram-refined.firebaseapp.com",
  projectId: "chatgram-refined",
  storageBucket: "chatgram-refined.appspot.com",
  messagingSenderId: "721787183100",
  appId: "1:721787183100:web:4ad09e8c56423d49c4dc79",
  measurementId: "G-48WVMTQLJ2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
