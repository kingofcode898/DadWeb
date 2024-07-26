// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtpClOO8J9JM2ZMau58rXUz2OPzUiX-qU",
    authDomain: "bbpadweb.firebaseapp.com",
    projectId: "bbpadweb",
    storageBucket: "bbpadweb.appspot.com",
    messagingSenderId: "331551977283",
    appId: "1:331551977283:web:93f6d840840f206b1189f6",
    measurementId: "G-0L63MHY2MM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { db, storage };