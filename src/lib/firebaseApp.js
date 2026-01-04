import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmP9w2tndSzzZqyMnrIf1qm0EkvGPPdgA",
  authDomain: "esocialapp-7f98f.firebaseapp.com",
  projectId: "esocialapp-7f98f",
  storageBucket: "esocialapp-7f98f.firebasestorage.app",
  messagingSenderId: "663612866996",
  appId: "1:663612866996:web:839e5a07d624c083bc32e1",
  measurementId: "G-E18ZYDTCSX"
};

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 

export { app, db }