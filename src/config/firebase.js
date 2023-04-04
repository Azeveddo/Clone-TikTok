import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDfW_f4JAgCC65QHWtYgqXY9_r8z88_kno",
  authDomain: "tiktok---ebac-27824.firebaseapp.com",
  projectId: "tiktok---ebac-27824",
  storageBucket: "tiktok---ebac-27824.appspot.com",
  messagingSenderId: "696214140967",
  appId: "1:696214140967:web:e68ad663be324e88643602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;