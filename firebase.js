import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdkK9pRA3hz5bRYIiiB2En6tfnD026bwg",
    authDomain: "student-teacher-appointm-1b119.firebaseapp.com",
    projectId: "student-teacher-appointm-1b119",
    storageBucket: "student-teacher-appointm-1b119.firebasestorage.app",
    messagingSenderId: "95093396874",
    appId: "1:95093396874:web:ca6ad3783bff7c6980a473",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
