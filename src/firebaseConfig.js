// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKimgaVSQyNN9ZYt29AffByCygfY4-1qc",
  authDomain: "e-comerceshoes.firebaseapp.com",
  projectId: "e-comerceshoes",
  storageBucket: "e-comerceshoes.appspot.com",
  messagingSenderId: "606114669927",
  appId: "1:606114669927:web:10f093e7be1521850abbc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
