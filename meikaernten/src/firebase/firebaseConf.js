import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAaqU__dtGsig1gy3zwyIHN-Q6e5XoAVo",
  authDomain: "mei-kaernten.firebaseapp.com",
  projectId: "mei-kaernten",
  storageBucket: "mei-kaernten.firebasestorage.app",
  messagingSenderId: "860942128755",
  appId: "1:860942128755:web:1cdf2948cf0f02ef677c06"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);