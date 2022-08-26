import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe9Z7Ak7av79Y7s5bK6EmS1DZVY7gVnvg",
  authDomain: "next-simple-crud.firebaseapp.com",
  projectId: "next-simple-crud",
  storageBucket: "next-simple-crud.appspot.com",
  messagingSenderId: "768456231728",
  appId: "1:768456231728:web:44670d0c188a2f925356f5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
