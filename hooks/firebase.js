
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDC87clfkTg6W7znKDBmgOBzfsBtHcXuGk",
  authDomain: "knozeenews-a45f2.firebaseapp.com",
  projectId: "knozeenews-a45f2",
  storageBucket: "knozeenews-a45f2.appspot.com",
  messagingSenderId: "200017954917",
  appId: "1:200017954917:web:8b8341e00417ea23235e8c"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app)
export const auth = getAuth(app);
export const storage = getStorage(app)